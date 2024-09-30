import React from 'react'
import '../player/player.css'
const PlayerNameTable = ({ cashoutData, betData, setBetData, info }) => {
    const updateBetDataWithCashout = () => {
        const updatedBetData = betData?.length > 0 && betData?.map((bet) => {
            const matchingCashouts = cashoutData?.filter((cashout) => ((cashout?.bet_id === bet.bet_id) && (cashout?.user_id === bet.user_id)));
            if (matchingCashouts.length > 0) {
                const lastCashout = matchingCashouts[matchingCashouts.length - 1];
                return {
                    ...bet,
                    final_amount: lastCashout.final_amount,
                    max_mult: lastCashout.max_mult,
                    plane_status: lastCashout.plane_status
                };
            }
            return bet;
        });
        setBetData(updatedBetData)
    };

    React.useEffect(() => {
        if (cashoutData?.length > 0) {
            updateBetDataWithCashout();
        } else {
            setBetData(betData)
        }
    }, [cashoutData]);
    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Odds</th>
                        <th>Mode</th>
                        <th>Bet/Win</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        betData?.length > 0 ? betData?.map((el, i) => (
                            <tr key={i}>
                                <td
                                    style={{ color: el.plane_status === "cashout" ? "#0aad36" : "#0c70db" }}
                                >
                                    <div className="table-para">
                                        <img className='user-img' src={info.avatar} alt="" />
                                        <p>{el.name}</p>
                                    </div>
                                </td>
                                <td style={{ color: el.planeStatus === "cashout" ? "#0aad36" : "#0c70db" }}>

                                    {
                                        el?.max_mult ? <div className="bet-mult" style={{
                                            color: el.planeStatus === "cashout" ? "#0aad36" : "#0c70db"

                                        }}>
                                            {el?.max_mult}x
                                        </div> : null
                                    }
                                </td>
                                <td style={{ color: el.plane_status === "cashout" ? "#0aad36" : "#0c70db" }}>classic</td>
                                <td style={{ color: el.plane_status === "cashout" ? "#0aad36" : "#0c70db" }} >
                                    <div className="">
                                        {
                                            el.plane_status === "cashout" ? el.final_amount || "-" : el.bet_amount
                                        }
                                    </div>
                                </td>
                            </tr>
                        )) : null}
                </tbody>


            </table>

        </div>
    )
}

export default PlayerNameTable
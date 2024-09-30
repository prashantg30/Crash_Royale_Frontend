
// import React, { useState } from "react";
// import { userData } from "../../../utils/StaticData";
// import ChatBox from "./ChatBox";

// const PlayerDetails = ({
//   betData,
//   info,
//   cashoutData,
//   setBetData,
//   crashedData,
//   planeStatus,
// }) => {
//   console.log(betData);
//   const [activeTabPlayer, setActiveTabPlayer] = useState(0);
//   const updateBetDataWithCashout = () => {
//     const updatedBetData =
//       betData?.length > 0 &&
//       betData?.map((bet) => {
//         const matchingCashouts = cashoutData?.filter(
//           (cashout) =>
//             cashout?.bet_id === bet.bet_id &&
//             cashout?.user_id === bet?.bet_id?.split(":")[3]
//         );
//         if (matchingCashouts.length > 0) {
//           const lastCashout = matchingCashouts[matchingCashouts.length - 1];
//           return {
//             ...bet,
//             final_amount: lastCashout.final_amount,
//             max_mult: lastCashout.max_mult,
//             maxAutoCashout: lastCashout.maxAutoCashout,
//             plane_status: lastCashout.plane_status,
//           };
//         }
//         return bet;
//       });

//     setBetData(updatedBetData);
//   };

//   React.useEffect(() => {
//     if (cashoutData?.length > 0) {
//       updateBetDataWithCashout();
//     } else {
//       setBetData(betData);
//     }
//   }, [cashoutData]);
//   return (
//     <div className="">
//       <div className="player-container">
//         {activeTabPlayer === 0 && (
//           <div className="">
//             <table>
//               <thead className="center-text">
//                 <tr>
//                   <th>Name</th>
//                   <th>Odds</th>
//                   <th>Mode</th>
//                   <th>Bet/Win</th>
//                 </tr>
//               </thead>
//               {planeStatus === "2" ? (
//                 <tbody>
//                   {crashedData?.length > 0
//                     ? crashedData?.map((el, i) => (
//                         <tr key={i}>
//                           <td style={{ color: "red" }}>
//                             <div className="table-para">
//                               {/* <img className='user-img' src={info.avatar} alt="" /> */}
//                               <p>{el?.name}</p>
//                             </div>
//                           </td>
//                           <td style={{ color: "red" }}>{el?.max_mult + "x"}</td>
//                           <td
//                             style={{
//                               color: "red",
//                               textTransform: "capitalize",
//                             }}
//                           >
//                             {el?.mode}
//                           </td>
//                           <td style={{ color: "red" }}>
//                             <div className="">{el?.bet_id?.split(":")[2]}</div>
//                           </td>
//                         </tr>
//                       ))
//                     : null}
//                 </tbody>
//               ) : (
//                 <tbody>
//                   {betData?.length > 0
//                     ? betData?.map((el, i) => (
//                         <tr key={i}>
//                           <td
//                             style={{
//                               color:
//                                 el?.plane_status === "cashout"
//                                   ? "#0fc943"
//                                   : "#72b6ff",
//                             }}
//                           >
//                             <div className="table-para">
//                               {/* <img className='user-img' src={info.avatar} alt="" /> */}
//                               <p>{el?.name}</p>
//                             </div>
//                           </td>

//                           <td
//                             style={{
//                               color:
//                                 el?.plane_status === "cashout"
//                                   ? "#0fc943"
//                                   : "#72b6ff",
//                             }}
//                           >
//                             {el?.max_mult ? (
//                               <>
//                                 {el?.maxAutoCashout === "null"
//                                   ? el?.max_mult
//                                   : el?.maxAutoCashout}
//                                 x
//                               </>
//                             ) : (
//                               "-"
//                             )}
//                           </td>

//                           <td
//                             style={{
//                               color:
//                                 el?.plane_status === "cashout"
//                                   ? "#0fc943"
//                                   : "#72b6ff",
//                               textTransform: "capitalize",
//                             }}
//                           >
//                             {el?.mode}
//                           </td>
//                           <td
//                             style={{
//                               color:
//                                 el?.plane_status === "cashout"
//                                   ? "#0fc943"
//                                   : "#72b6ff",
//                             }}
//                           >
//                             <div className="">
//                               {el?.plane_status === "cashout"
//                                 ? el?.final_amount || "-"
//                                 : el?.bet_id?.split(":")[2]}
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     : null}
//                 </tbody>
//               )}
//             </table>
//           </div>
//         )}
//         {activeTabPlayer === 1 && <ChatBox info={info} />}
//       </div>
//       <div className="user-tab">
//         {userData.map((el, i) => (
//           <div
//             className={`place-tab-1 ${
//               activeTabPlayer === i ? "active-tab" : ""
//             }`}
//             key={i}
//             onClick={() => setActiveTabPlayer(i)}
//           >
//             <p style={{ fontWeight: "700" }}>{el?.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PlayerDetails;

import React, { useState, useEffect } from "react";
import { userData } from "../../../utils/StaticData";
import ChatBox from "./ChatBox";

const PlayerDetails = ({
    betData,
    info,
    cashoutData,
    setBetData,
    crashedData,
    planeStatus,
}) => {
    const [activeTabPlayer, setActiveTabPlayer] = useState(0);

    const updateBetDataWithCashout = () => {
        const updatedBetData =
            betData?.length > 0 &&
            betData?.map((bet) => {
                const matchingCashouts = cashoutData?.filter(
                    (cashout) =>
                        cashout?.bet_id === bet.bet_id &&
                        cashout?.user_id === bet?.bet_id?.split(":")[3]
                );
                if (matchingCashouts.length > 0) {
                    const lastCashout = matchingCashouts[matchingCashouts.length - 1];
                    return {
                        ...bet,
                        final_amount: lastCashout.final_amount,
                        max_mult: lastCashout.max_mult,
                        maxAutoCashout: lastCashout.maxAutoCashout,
                        plane_status: lastCashout.plane_status,
                    };
                }
                return bet;
            });

        setBetData(updatedBetData);
    };

    useEffect(() => {
        if (cashoutData?.length > 0) {
            updateBetDataWithCashout();
        } else {
            setBetData(betData);
        }
    }, [cashoutData]);

    return (
        <div className="player-container">
            {activeTabPlayer === 0 && (
                <div>
                    <table className="table-mobile">
                        <thead className="center-text">
                            <tr>
                                <th>Name</th>
                                <th>Odds</th>
                                <th>Mode</th>
                                <th>Bet/Win</th>
                            </tr>
                        </thead>
                        {planeStatus === "2" ? (
                            <tbody>
                                {crashedData?.length > 0 ? (
                                    crashedData.map((el, i) => (
                                        <tr key={i}>
                                            <td style={{ color: "red" }}>
                                                <div className="table-para">
                                                    <p>{el?.name}</p>
                                                </div>
                                            </td>
                                            <td style={{ color: "red" }}>{el?.max_mult + "x"}</td>
                                            <td style={{ color: "red", textTransform: "capitalize" }}>
                                                {el?.mode}
                                            </td>
                                            <td style={{ color: "red" }}>
                                                <div>{el?.bet_id?.split(":")[2]}</div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
                                            style={{ color: "red", textAlign: "center" }}
                                        >
                                            {/* /////// */}
                                            {/* No crash data available. */}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        ) : (
                            <tbody>
                                {betData?.length > 0 ? (
                                    betData?.map((el, i) => (
                                        <tr key={i}>
                                            <td
                                                style={{
                                                    color:
                                                        el?.plane_status === "cashout"
                                                            ? "#0fc943"
                                                            : "#72b6ff",
                                                }}
                                            >
                                                <div className="table-para">
                                                    <p>{el?.name}</p>
                                                </div>
                                            </td>
                                            <td
                                                style={{
                                                    color:
                                                        el?.plane_status === "cashout"
                                                            ? "#0fc943"
                                                            : "#72b6ff",
                                                }}
                                            >
                                                {el?.max_mult ? (
                                                    <>
                                                        {el?.maxAutoCashout === "null"
                                                            ? el?.max_mult
                                                            : el?.maxAutoCashout}
                                                        x
                                                    </>
                                                ) : (
                                                    "-"
                                                )}
                                            </td>
                                            <td
                                                style={{
                                                    color:
                                                        el?.plane_status === "cashout"
                                                            ? "#0fc943"
                                                            : "#72b6ff",
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                {el?.mode}
                                            </td>
                                            <td
                                                style={{
                                                    color:
                                                        el?.plane_status === "cashout"
                                                            ? "#0fc943"
                                                            : "#72b6ff",
                                                }}
                                            >


                                                {el?.plane_status === "cashout"
                                                    ? el?.final_amount || "-"
                                                    : el?.bet_id?.split(":")[2]}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" style={{ textAlign: "center" }}></td>
                                    </tr>
                                )}
                                {/* inr */}
                            </tbody>
                        )}
                    </table>
                </div>
            )}
            {activeTabPlayer === 1 && <ChatBox info={info} />}
            <div className="user-tab">
                {userData.map((el, i) => (
                    <div
                        className={`place-tab-1 ${activeTabPlayer === i ? "active-tab" : ""
                            }`}
                        key={i}
                        onClick={() => setActiveTabPlayer(i)}
                    >
                        <p style={{ fontWeight: "700" }}>{el?.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerDetails;

import React, { useEffect, useState } from 'react'
import { formatBalance } from '../../../../utils/hepler';

const BetModal = ({ betModal,betData,setBetModal }) => {
    useEffect(() => {
        let timer;
        if (betModal) {
            timer = setTimeout(() => {
                setBetModal(false)
            }, 3000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [betModal]);
    
    return (
        <>
            {
                betModal && (<div>
                    {
                        betData?.length > 0 ? betData?.map((bet, index) => (
                            <div className={index === 1 ? 'bet-placed-modal' : "bet-placed-modal-1"} key={index} style={{ fontWeight: "700" }}>Placed {bet?.bet_id?.split(":")[2]}</div>
                        )) : null
                    }
                </div>)
            }
        </>

        // {
        //     betData?.length > 0 ? betData?.map((bet, index) => (
        //         <div className={index === 1 ? 'bet-placed-modal' : "bet-placed-modal-1"} key={index} style={{ fontWeight: "700" }}>Placed {bet?.bet_id?.split(":")[2]}</div>
        //     )) : null
        // }
    )
}

export default BetModal
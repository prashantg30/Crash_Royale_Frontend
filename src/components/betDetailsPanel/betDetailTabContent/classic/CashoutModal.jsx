import React, { useEffect, useState } from 'react'
import { formatBalance } from '../../../../utils/hepler';
import '../../betDetails.css'
const CashoutModal = ({ openModal, setOpenModal }) => {
  const [timers, setTimers] = useState([]);
  useEffect(() => {
    timers.forEach(timer => clearTimeout(timer));
    setTimers([]);

    const newTimers = [];
    openModal?.length > 0 && openModal?.forEach((modal, index) => {
      if (modal.show) {
        const timer = setTimeout(() => {
          setOpenModal(prev => prev.map(m => (m.bet_id === modal.bet_id ? { ...m, show: false } : m)));
        }, 3000);
        newTimers.push(timer);
      }
    });
    setTimers(newTimers);

    return () => {
      newTimers.forEach(timer => clearTimeout(timer));
    };
  }, [openModal, setOpenModal]);

  return (
    <>
      {openModal?.length > 0 && openModal?.map((el, i) => (
        el.show && (
          <div className={`cashout modal-position-${el.buttonNumber}`} key={i} >
            Congrats! you won {formatBalance(el.finalAmount) || "0"}
            </div>


        )
      ))}
    </>
  )
}

export default CashoutModal
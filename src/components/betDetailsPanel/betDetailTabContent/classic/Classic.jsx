import React, { useEffect, useState } from "react";
import "../../betDetails.css";
import { socket } from "../../../../utils/socket/socketService";
import InputContainer from "../../inputContainer/InputContainer";
import ChipSelectbutton from "../../chipSelect/ChipSelectbutton";
import AutoCashout from "../../autocashout/AutoCashout";
import BetButton from "../../betButton/BetButton";
import InputContainerMobile from "../../inputContainer/InputContainerMobile";
import InsuranceMobile from "../../chipSelect/InsuranceMobile";
import AutoCashoutMobile from "../../autocashout/AutoCashOutMobile";
import BetButtonMobile from "../../betButton/BetButtonMobile";
import CashoutModal from "./CashoutModal";
const Classic = ({
  info,
  handlePlaceBet,
  amount,
  autoCash,setAutoCash,
  handleCashout,
  setAmount,
  planeStatus,
  disableButton,
  autoCashToggle,
  handleCancelBet,handleNextClick,
  showCancel,cashoutShow,
  autoMultiplier,
  setAutoMultiplier,
  nextRound,
  endDelay,
  amountMultiplier,
  betData,cashoutData,
}) => {

  return (
    <>
   
      <div className="place-bet-content">
        <InputContainer
          amount={amount}
          setAmount={setAmount}
          info={info}
          cashoutData={cashoutData}
          betData={betData}
          nextRound={nextRound}
          endDelay={endDelay}
          planeStatus={planeStatus}
          showCancel={showCancel}
          disableButton={disableButton}
        />
        <ChipSelectbutton
          amount={amount}
          setAmount={setAmount}
          info={info}
          betData={betData}
          nextRound={nextRound}
          planeStatus={planeStatus}
          disableButton={disableButton}
        />
        <BetButton
          planeStatus={planeStatus}
          handleCancelBet={handleCancelBet}
          handleCashout={handleCashout}
          handleNextClick={handleNextClick}
          cashoutShow={cashoutShow}
          handlePlaceBet={handlePlaceBet}
          nextRound={nextRound}
          cashoutData={cashoutData}
          betData={betData}
          endDelay={endDelay}
          showCancel={showCancel}
          amount={amount}
          amountMultiplier={amountMultiplier}
        />
        <AutoCashout
          autoCashToggle={autoCashToggle}
          autoCash={autoCash}
          autoMultiplier={autoMultiplier}
          setAutoCash={setAutoCash}
          setAutoMultiplier={setAutoMultiplier}
        />
      </div>
      <div className="place-bet-content-mobile">

        <div className="" style={{ width: "28%" }}>
          <InputContainerMobile
            amount={amount}
            setAmount={setAmount}
            info={info}
            cashoutData={cashoutData}
            betData={betData}
            nextRound={nextRound}
            endDelay={endDelay}
            planeStatus={planeStatus}
            showCancel={showCancel}
          />
        </div>
        <div className="" >
          <InsuranceMobile />
        </div>
        <div className="" style={{ width: "32%" }}>
          <AutoCashoutMobile
            autoCashToggle={autoCashToggle}
            autoCash={autoCash}
            autoMultiplier={autoMultiplier}
            setAutoCash={setAutoCash}
            setAutoMultiplier={setAutoMultiplier}
          />
        </div>
        <div className="" style={{ width: "40%" }}>
          <BetButtonMobile
            planeStatus={planeStatus}
            handleCancelBet={handleCancelBet}
            handleCashout={handleCashout}
            handleNextClick={handleNextClick}
            cashoutShow={cashoutShow}
            handlePlaceBet={handlePlaceBet}
            nextRound={nextRound}
            cashoutData={cashoutData}
            betData={betData}
            endDelay={endDelay}
            showCancel={showCancel}
            amount={amount}
            amountMultiplier={amountMultiplier}
          />
        </div>
      </div>
    </>
  );
};

export default Classic;
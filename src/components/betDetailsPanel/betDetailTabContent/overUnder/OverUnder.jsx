import React, { useEffect, useState } from "react";
import "../../betDetails.css";
import InputContainer from "../../inputContainer/InputContainer";
import ChipSelectbutton from "../../chipSelect/ChipSelectbutton";
import CrashPoint from "./CrashPoint";
import OverUnderBetButton from "./OverUnderBetButton";
import InputContainerMobile from "../../inputContainer/InputContainerMobile";
import CrashPointMobile from "./CrashPointMobile";
import InsuranceMobile from "../../chipSelect/InsuranceMobile";
import OverUnderBetButtonMobile from "./OverUnderBetButtonMobile";
const OverUnder = ({
  info,
  handlePlaceBet,
  amount,
  endDelay,
  cashoutShow,
  showCancel,
  nextRound,cashoutData,
  betData,
  disableButton,
  setCalcValue,
  calcValue,
  overUnderResult,
  planeMutiplier,
  planeStatus,
  handleCancelBet,
  handleCashout,
  handleNextClick,
  setAmount,
}) => {
  console.log(overUnderResult)
  

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
        <OverUnderBetButton
          showCancel={showCancel}
          betData={betData}
          handleCancelBet={handleCancelBet}
          handlePlaceBet={handlePlaceBet}
          planeStatus={planeStatus}
          endDelay={endDelay}
          cashoutData={cashoutData}
          disableButton={disableButton}
          handleCashout={handleCashout}
          cashoutShow={cashoutShow}
          handleNextClick={handleNextClick}
          amount={amount}
          nextRound={nextRound}
          overUnderResult={overUnderResult}
          calcValue={calcValue}
        />

        <CrashPoint
          planeMutiplier={planeMutiplier}
          setCalcValue={setCalcValue}
          calcValue={calcValue}
          name="5x"
          betData={betData}
          planeStatus={planeStatus}
          handleCashout={handleCashout}
          nextRound={nextRound}
          disableButton={disableButton}

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
        <div className="" style={{}}>
          <InsuranceMobile />
        </div>
        <div className="" style={{ width: "32%" }}>
          <CrashPointMobile
            planeMutiplier={planeMutiplier}
            setCalcValue={setCalcValue}
            calcValue={calcValue}
            name="5x"
            betData={betData}
            planeStatus={planeStatus}
            handleCashout={handleCashout}
            nextRound={nextRound}
          />
        </div>
        <div className="" style={{ width: "40%" }}>
          <OverUnderBetButtonMobile
            showCancel={showCancel}
            betData={betData}
            handleCancelBet={handleCancelBet}
            handlePlaceBet={handlePlaceBet}
            planeStatus={planeStatus}
            endDelay={endDelay}
            cashoutData={cashoutData}
            handleCashout={handleCashout}
            cashoutShow={cashoutShow}
            handleNextClick={handleNextClick}
            amount={amount}
            nextRound={nextRound}
            overUnderResult={overUnderResult}
            calcValue={calcValue}
          />

        </div>
      </div>


    </>
  );
};

export default OverUnder;

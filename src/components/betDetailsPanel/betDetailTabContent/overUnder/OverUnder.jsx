import React from "react";
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
  nextRound,
  cashoutData,
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
  // Determine whether the buttons should be disabled
  const isButtonDisabled = disableButton || calcValue <= 0; // example condition
  
  return (
    <>
      {/* Desktop Version */}
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
          disableButton={isButtonDisabled}
        />
        <ChipSelectbutton
          amount={amount}
          setAmount={setAmount}
          info={info}
          betData={betData}
          nextRound={nextRound}
          planeStatus={planeStatus}
          disableButton={isButtonDisabled}
          
        />
        <OverUnderBetButton
          showCancel={showCancel}
          betData={betData}
          handleCancelBet={handleCancelBet}
          handlePlaceBet={handlePlaceBet}
          planeStatus={planeStatus}
          endDelay={endDelay}
          cashoutData={cashoutData}
          disableButton={isButtonDisabled} // Disable button logic
          handleCashout={handleCashout}
          cashoutShow={cashoutShow}
          handleNextClick={handleNextClick}
          amount={amount}
          nextRound={nextRound}
          overUnderResult={overUnderResult}
          calcValue={calcValue}
          className={isButtonDisabled ? 'disabled-button' : ''} // Apply the disabled class
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
          disableButton={isButtonDisabled}
        />
      </div>

      {/* Mobile Version */}
      <div className="place-bet-content-mobile">
        <div style={{ width: "28%" }}>
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
            disableButton={isButtonDisabled}
          />
        </div>
        <div>
          <InsuranceMobile />
        </div>
        <div style={{ width: "32%" }}>
          <CrashPointMobile
            planeMutiplier={planeMutiplier}
            setCalcValue={setCalcValue}
            calcValue={calcValue}
            name="5x"
            betData={betData}
            planeStatus={planeStatus}
            handleCashout={handleCashout}
            nextRound={nextRound}
            disableButton={isButtonDisabled}
          />
        </div>
        <div style={{ width: "40%" }}>
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
            className={isButtonDisabled ? 'disabled-button' : ''} // Apply the disabled class for mobile
          />
        </div>
      </div>
    </>
  );
};

export default OverUnder;

import React from "react";
import "../../betDetails.css";
import InputContainer from "../../inputContainer/InputContainer";
import ChipSelectbutton from "../../chipSelect/ChipSelectbutton";
import AutoCashout from "../../autocashout/AutoCashout";
import BetButton from "../../betButton/BetButton";
import InputContainerMobile from "../../inputContainer/InputContainerMobile";
import InsuranceMobile from "../../chipSelect/InsuranceMobile";
import AutoCashoutMobile from "../../autocashout/AutoCashOutMobile";
import BetButtonMobile from "../../betButton/BetButtonMobile";

const Classic = ({
  info,
  handlePlaceBet,
  amount,
  autoCash,
  setAutoCash,
  handleCashout,
  setAmount,
  planeStatus,
  disableButton,
  autoCashToggle,
  handleCancelBet,
  handleNextClick,
  showCancel,
  cashoutShow,
  autoMultiplier,
  setAutoMultiplier,
  nextRound,
  endDelay,
  amountMultiplier,
  betData,
  cashoutData,
}) => {
  const isAutoMultiplierEmpty = !autoMultiplier || autoMultiplier === "";

  const isButtonDisabled = disableButton || isAutoMultiplierEmpty;

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
          autoMultiplier={autoMultiplier}
          info={info}
          betData={betData}
          nextRound={nextRound}
          planeStatus={planeStatus}
          disableButton={isButtonDisabled}
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
          disableButton={isButtonDisabled}
          className={isButtonDisabled ? 'disabled-button' : ''}
        />
        <AutoCashout
          autoCashToggle={autoCashToggle}
          autoCash={autoCash}
          autoMultiplier={autoMultiplier}
          setAutoCash={setAutoCash}
          setAutoMultiplier={setAutoMultiplier}
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
          <AutoCashoutMobile
            autoCashToggle={autoCashToggle}
            autoCash={autoCash}
            autoMultiplier={autoMultiplier}
            setAutoCash={setAutoCash}
            setAutoMultiplier={setAutoMultiplier}
          />
        </div>
        <div style={{ width: "40%" }}>
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
            disableButton={isButtonDisabled}
            className={isButtonDisabled ? 'disabled-button' : ''}
          />
        </div>
      </div>
    </>
  );
};

export default Classic;

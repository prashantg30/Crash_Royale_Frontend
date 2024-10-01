import React, { useEffect, useState } from 'react';
import '../../betDetails.css';
import InputContainer from '../../inputContainer/InputContainer';
import ChipSelectbutton from '../../chipSelect/ChipSelectbutton';
import RangeInput from './RangeInput';
import RangePlacebet from './RangePlacebet';
import InputContainerMobile from '../../inputContainer/InputContainerMobile';
import InsuranceMobile from '../../chipSelect/InsuranceMobile';
import RangePlacedMobile from './RangePlacedMobile';
import RangeInputMobile from './RangeInputMobile';

const Range = ({
  info, amount, setAmount, cashoutData, betData, showCancel, nextRound, handlePlaceBet,
  handleCancelBet, handleCashout, handleNextClick, disableButton, planeStatus,
  endDelay, fromValueRange, toValueRange, winMultiplier, cashoutShow,
  setFromValueRange, setToValueRange
}) => {

  const isFromValueRangeEmpty = !fromValueRange || fromValueRange === '';

  // Combine disableButton logic
  const isButtonDisabled = disableButton || isFromValueRangeEmpty;

  return (
    <>
      {/* Desktop View */}
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
          fromValueRange={fromValueRange}
        />
        <RangePlacebet
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
          winMultiplier={winMultiplier}
          fromValueRange={fromValueRange}
          toValueRange={toValueRange}
        />
        <RangeInput
          fromValueRange={fromValueRange}
          setToValueRange={setToValueRange}
          toValueRange={toValueRange}
          setFromValueRange={setFromValueRange}
          betData={betData}
          planeStatus={planeStatus}
          handleCashout={handleCashout}
          nextRound={nextRound}
          disableButton={isButtonDisabled}
        />
      </div>

      {/* Mobile View */}
      <div className="place-bet-content-mobile">
        <div className="mobile-input-container" style={{ width: '28%' }}>
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
        <div className="mobile-insurance-container">
          <InsuranceMobile />
        </div>
        <div className="mobile-range-input-container" style={{ width: '32%' }}>
          <RangeInputMobile
            fromValueRange={fromValueRange}
            setToValueRange={setToValueRange}
            toValueRange={toValueRange}
            setFromValueRange={setFromValueRange}
            betData={betData}
            planeStatus={planeStatus}
            handleCashout={handleCashout}
            nextRound={nextRound}
          />
        </div>
        <div className="mobile-range-placed-container" style={{ width: '40%' }}>
          <RangePlacedMobile
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
            winMultiplier={winMultiplier}
            fromValueRange={fromValueRange}
            toValueRange={toValueRange}
          />
        </div>
      </div>
    </>
  );
};

export default Range;

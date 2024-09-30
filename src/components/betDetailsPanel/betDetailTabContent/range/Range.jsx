import React, { useEffect, useState } from 'react'
import '../../betDetails.css'
import InputContainer from '../../inputContainer/InputContainer'
import ChipSelectbutton from '../../chipSelect/ChipSelectbutton'
import RangeInput from './RangeInput'
import RangePlacebet from './RangePlacebet'
import { socket } from '../../../../utils/socket/socketService'
import { calculateRange } from '../../../../utils/calculator'
import InputContainerMobile from '../../inputContainer/InputContainerMobile'
import InsuranceMobile from '../../chipSelect/InsuranceMobile'
import RangePlacedMobile from './RangePlacedMobile'
import RangeInputMobile from './RangeInputMobile'
const Range = ({
  info, amount, setAmount,cashoutData,betData,showCancel,nextRound,handlePlaceBet,
  handleCancelBet,handleCashout,handleNextClick,disableButton,planeStatus,
  endDelay,fromValueRange,toValueRange,winMultiplier,cashoutShow,
  setFromValueRange,     setToValueRange

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
          disableButton={disableButton} />

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
            setFromValueRange={  setFromValueRange}
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
        <div className="" >
          <InsuranceMobile />
        </div>
        <div className="" style={{ width: "32%" }}>
          <RangeInputMobile
            fromValueRange={fromValueRange}       setToValueRange={setToValueRange} toValueRange={toValueRange}   setFromValueRange={  setFromValueRange}
            betData={betData} planeStatus={planeStatus} handleCashout={handleCashout} nextRound={nextRound}

          />
        </div>
        <div className="" style={{ width: "40%" }}>
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
  )
}

export default Range
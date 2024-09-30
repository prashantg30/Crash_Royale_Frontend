import React, { useEffect, useRef } from "react";
import "../betDetails.css";
import { svgIcon } from "../../../utils/StaticData";
import "../autocashout/AutoCashout";
const InputContainer = ({
  amount,
  setAmount,
  info,
  betData,
  planeStatus,
  nextRound,
  showCancel,
  disableButton,
}) => {

  const inputRef = useRef(null);
  const MIN_AMOUNT = 1;

  const MAX_AMOUNT = Math.min(20000, info.balance);
  const handleIncrease = () => {
    setAmount((prevAmount) => +prevAmount + 1);
  };

  const handleDecrease = () => {
    if (+amount > 0) {
      setAmount((prevAmount) =>
        Math.max(parseFloat(prevAmount - 1, MIN_AMOUNT))
      );
    }
  };
  const handledoubleIncrease = () => {
    setAmount((prevAmount) => {
      const newAmount = parseFloat(prevAmount) * 2;
      return newAmount > MAX_AMOUNT ? MAX_AMOUNT : newAmount;
    });
  };
  const handlehalfDecrease = () => {
    if (+amount > MIN_AMOUNT) {
      setAmount((prevAmount) => {
        const newAmount = (prevAmount / 2).toFixed(2);
        return newAmount < MIN_AMOUNT ? MIN_AMOUNT.toFixed(2) : newAmount;
      });
    }
  };
  const handleAmountChange = (event) => {
    let inputValue = event.target.value;

    // Validate if the input is a number with up to two decimal places
    const regex = /^\d*\.?\d{0,2}$/;

    if (regex.test(inputValue)) {
      let numericValue = inputValue;

      // Ensure the numeric value does not exceed MAX_AMOUNT
      if (numericValue > MAX_AMOUNT) {
        numericValue = MAX_AMOUNT;
      }

      setAmount(numericValue.toString());
    } else if (inputValue === "") {
      setAmount("");
    }
  };



  const handleMinAmount = () => {
    setAmount(MIN_AMOUNT);
  };

  const handleMaxAmount = () => {
    setAmount(MAX_AMOUNT);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div
      className="place-bet-header-container"
      style={{
        opacity: disableButton ? "0.5" : "",
        cursor: disableButton ? "default" : "",
      }}
    >
      <div className="min-max-container">
        <button
          className="mix-max-text"
          onClick={handleMinAmount}
          // disabled={disableButton || +amount === MIN_AMOUNT}
          // style={{
          //   opacity: disableButton || +amount === MIN_AMOUNT ? "0.5" : "",
          //   cursor: disableButton || +amount === MIN_AMOUNT ? "default" : "",
          // }}
        >
          Min
        </button>
        <div className="border"></div>
        <div className="btn-container">
          <button
            className="mix-max-text"
            // disabled={disableButton || (+amount > 1 && +amount < 2)}
            type="button"
            onClick={handlehalfDecrease}
            // style={{
            //   opacity:
            //     disableButton ||
            //     (+amount > 1 && +amount < 2) ||
            //     +amount === MIN_AMOUNT
            //       ? "0.5"
            //       : "",
            //   cursor:
            //     disableButton || (+amount > 1 && +amount < 2) ? "default" : "",
            // }}
            style={{
              // opacity:
              //   disableButton || +amount === MIN_AMOUNT || +amount === 0
              //     ? "0.5"
              //     : "",
              // cursor:
              //   disableButton || +amount === MIN_AMOUNT || +amount === 0
              //     ? "default"
              //     : "",
            }}
          >
            1/2
          </button>
          <button
            className="min-max-btn"
            onClick={handleDecrease}
            // disabled={disableButton || +amount <= MIN_AMOUNT}
            style={{
              // opacity:
              //   disableButton || +amount === MIN_AMOUNT || +amount === 0
              //     ? "0.5"
              //     : "",
              // cursor:
              //   disableButton || +amount === MIN_AMOUNT || +amount === 0
              //     ? "default"
              //     : "",
            }}
          >
            {svgIcon.minusIcon}
          </button>
        </div>
      </div>
      <div
        className="bet-cont"
        style={{

          overflowX: "auto",
          whiteSpace: "nowrap"

          // opacity:
          //   disableButton || +amount >= MAX_AMOUNT || +amount >= MAX_AMOUNT / 2
          //     ? "0.5"
          //     : "",
          // cursor:
          //   disableButton || +amount >= MAX_AMOUNT || +amount >= MAX_AMOUNT / 2
          //     ? "default"
          //     : "",
        }}
      >
        <label htmlFor="" className="label">
          Bet Amount
        </label>
        <div className="input-container">
          <input
            type="number"
            name=""
            id=""
            disabled={disableButton}
            step="0.01"
            value={amount}
            onChange={(e) => handleAmountChange(e)}
            ref={inputRef}

          />
        </div>
      </div>
      <div className="min-max-container">
        <div className="btn-container">
          <button
            className="min-max-btn"
            onClick={handleIncrease}
            // disabled={disableButton || +amount >= MAX_AMOUNT}
            style={{
              // opacity: disableButton || +amount >= MAX_AMOUNT ? "0.5" : "",
              // cursor: disableButton || +amount >= MAX_AMOUNT ? "default" : "",
            }}
          >
            {svgIcon.plusIcon}
          </button>
          <button
            className="mix-max-text"
            type="button"
            onClick={handledoubleIncrease}
            // disabled={
            //   disableButton ||
            //   +amount >= MAX_AMOUNT ||
            //   +amount >= MAX_AMOUNT / 2
            // }
            style={{
              // opacity:
              //   disableButton ||
              //     +amount >= MAX_AMOUNT ||
              //     +amount >= MAX_AMOUNT / 2
              //     ? "0.5"
              //     : "",
              // cursor:
              //   disableButton ||
              //     +amount >= MAX_AMOUNT ||
              //     +amount >= MAX_AMOUNT / 2
              //     ? "default"
              //     : "",
            }}
          >
            2x
          </button>
          <div className="border"></div>
          <button
            // disabled={disableButton || +amount === MAX_AMOUNT}
            className="mix-max-text"
            style={{
              // opacity: disableButton || +amount === MAX_AMOUNT ? "0.5" : "",
              // cursor: disableButton || +amount === MAX_AMOUNT ? "default" : "",
            }}
            onClick={handleMaxAmount}
          >
            Max
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;

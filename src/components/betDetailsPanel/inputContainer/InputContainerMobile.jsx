import React from "react";
import "../betDetails.css";
import { svgIcon } from "../../../utils/StaticData";
import "../autocashout/AutoCashout";
const InputContainerMobile = ({
  amount,
  setAmount,
  info,
  betData,
  planeStatus,
  nextRound,
  showCancel,
}) => {
  const isInputDisabled =
    // showCancel[0] || showCancel[1] || nextRound[0] || nextRound[1];
    showCancel[1] || nextRound[0];
  const disbaledButton =
    (planeStatus === "1" && betData?.length > 0) ||
    isInputDisabled ||
    (planeStatus === "2" && nextRound[0]) ||
    nextRound[1];
  const MIN_AMOUNT = 1;

  const MAX_AMOUNT = Math.min(1000, info.balance);
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
  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <div className="">
          <div
            style={{
              border: "1px solid rgb(60, 53, 83)",
              borderRadius: "0.5rem",
              padding: "0.3rem",
            }}
          >
            <div
              className="place-bet-header-container-mobile"
              style={{
                opacity: disbaledButton ? "0.5" : "",
                cursor: disbaledButton ? "default" : "",
              }}
            >
              <button
                className="min-max-btn"
                onClick={handleDecrease}
                disabled={disbaledButton || +amount <= MIN_AMOUNT}
                style={{
                  opacity:
                    disbaledButton || +amount === MIN_AMOUNT || +amount === 0
                      ? "0.5"
                      : "",
                  cursor:
                    disbaledButton || +amount === MIN_AMOUNT || +amount === 0
                      ? "default"
                      : "",
                }}
              >
                {svgIcon.minusIcon}
              </button>

              <div
                className="bet-cont"
                style={{
                  // opacity:
                  //   disbaledButton ||
                  //   +amount >= MAX_AMOUNT ||
                  //   +amount >= MAX_AMOUNT / 2
                  //     ? "0.5"
                  //     : "",
                  // cursor:
                  //   disbaledButton ||
                  //   +amount >= MAX_AMOUNT ||
                  //   +amount >= MAX_AMOUNT / 2
                  //     ? "default"
                  //     : "",

                  overflowX: "auto",
                  whiteSpace: "nowrap",
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
                    disabled={disbaledButton}
                    step="0.01"
                    value={amount}
                    onChange={(e) => handleAmountChange(e)}
                  />
                </div>
              </div>
              <div className="min-max-container">
                <div className="btn-container">
                  <button
                    className="min-max-btn"
                    onClick={handleIncrease}
                    disabled={disbaledButton || +amount >= MAX_AMOUNT}
                    style={{
                      opacity:
                        disbaledButton || +amount >= MAX_AMOUNT ? "0.5" : "",
                      cursor:
                        disbaledButton || +amount >= MAX_AMOUNT
                          ? "default"
                          : "",
                    }}
                  >
                    {svgIcon.plusIcon}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className=""
          style={{
            border: "1px solid rgb(60, 53, 83)",
            borderRadius: "10px",
            textAlign: "center",
            // backgroundColor: "black",
          }}
        >
          <div className="min-max-container-mobile" style={{ margin: "4px" }}>
            <button
              className="mix-max-text"
              onClick={handleMinAmount}
              disabled={disbaledButton || +amount === MIN_AMOUNT}
              style={{
                opacity: disbaledButton || +amount === MIN_AMOUNT ? "0.5" : "",
                cursor:
                  disbaledButton || +amount === MIN_AMOUNT ? "default" : "",
              }}
            >
              Min
            </button>
            <div className="border"></div>
            <div className="btn-container">
              <button
                className="mix-max-text"
                disabled={disbaledButton || (+amount > 1 && +amount < 2)}
                type="button"
                onClick={handlehalfDecrease}
                // style={{
                //   opacity:
                //     disbaledButton ||
                //     (+amount > 1 && +amount < 2) ||
                //     +amount === MIN_AMOUNT
                //       ? "0.5"
                //       : "",
                //   cursor:
                //     disbaledButton || (+amount > 1 && +amount < 2) ? "default" : "",
                // }}
                style={{
                  opacity:
                    disbaledButton || +amount === MIN_AMOUNT || +amount === 0
                      ? "0.5"
                      : "",
                  cursor:
                    disbaledButton || +amount === MIN_AMOUNT || +amount === 0
                      ? "default"
                      : "",
                  marginRight: "14px",
                }}
              >
                1/2
              </button>
              <div className="border"></div>
              <button
                className="mix-max-text"
                type="button"
                onClick={handledoubleIncrease}
                disabled={
                  disbaledButton ||
                  +amount >= MAX_AMOUNT ||
                  +amount >= MAX_AMOUNT / 2
                }
                style={{
                  opacity:
                    disbaledButton ||
                    +amount >= MAX_AMOUNT ||
                    +amount >= MAX_AMOUNT / 2
                      ? "0.5"
                      : "",
                  cursor:
                    disbaledButton ||
                    +amount >= MAX_AMOUNT ||
                    +amount >= MAX_AMOUNT / 2
                      ? "default"
                      : "",
                  marginRight: "6px",
                }}
              >
                2x
              </button>
              <div className="border"></div>
              <button
                disabled={disbaledButton || +amount === MAX_AMOUNT}
                className="mix-max-text"
                style={{
                  opacity:
                    disbaledButton || +amount === MAX_AMOUNT ? "0.5" : "",
                  cursor:
                    disbaledButton || +amount === MAX_AMOUNT ? "default" : "",
                }}
                onClick={handleMaxAmount}
              >
                Max
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputContainerMobile;

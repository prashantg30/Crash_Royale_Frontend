import React from "react";
import "../../betDetails.css";

const CrashPoint = ({
  calcValue,
  setCalcValue,
  betData,
  planeStatus,
  nextRound,
}) => {
  const maxCalcValue = 24;
  const disbaledButton =
    (planeStatus === "0" && betData?.length > 0) ||
    (planeStatus == 1 && betData?.length > 0) ||
    nextRound[0];

  const incrementCalcValue = () => {
    setCalcValue((prevMulti) => {
      let [integerPart, decimalPart] = prevMulti
        .split(".")
        .map((part) => part || "1");

      integerPart = Number(integerPart);
      decimalPart = Number(decimalPart);

      if (isNaN(integerPart)) integerPart = 0;
      if (isNaN(decimalPart)) decimalPart = 0;

      if (decimalPart >= 9) {
        integerPart += 1;
        decimalPart = 0;
      } else {
        decimalPart += 1;
      }

      const newValue = parseFloat(`${integerPart}.${decimalPart}`);
      return newValue > maxCalcValue
        ? maxCalcValue.toString()
        : `${integerPart}${decimalPart > 0 ? `.${decimalPart}` : ""}`;
    });
  };

  const decrementCalcValue = () => {
    setCalcValue((prevMulti) => {
      let [integerPart, decimalPart] = prevMulti
        .split(".")
        .map((part) => part || "0");

      integerPart = Number(integerPart);
      decimalPart = Number(decimalPart);

      if (isNaN(integerPart)) integerPart = 0;
      if (isNaN(decimalPart)) decimalPart = 0;

      if (decimalPart <= 0) {
        if (integerPart > 1) {
          integerPart -= 1;
          decimalPart = 9;
        }
      } else {
        decimalPart -= 1;
      }

      const newValue = Math.max(integerPart + decimalPart / 100, 1.01);
      return `${Math.floor(newValue)}${
        Math.round((newValue % 1) * 100) > 0
          ? `.${Math.round((newValue % 1) * 100)}`
          : ""
      }`;
    });
  };

  const handleMultiplierClick = (multiplier) => {
    const newValue = parseFloat(multiplier);
    setCalcValue(
      newValue > maxCalcValue ? maxCalcValue.toString() : multiplier
    );
  };

  const handleInputChange = (setter) => (e) => {
    let inputValue = e.target.value;
    if (inputValue.startsWith(".")) {
      inputValue = "0" + inputValue;
    }
    if (inputValue.startsWith("0") && !inputValue.startsWith("0.")) {
      inputValue = inputValue.replace(/^0+/, "");
    }
    const match = inputValue.match(/^\d{0,2}(\.\d{0,2})?$/);
    if (match) {
      inputValue = match[0];
      if (inputValue === "" || parseFloat(inputValue) < 1) {
        inputValue = "";
      }
      if (parseFloat(inputValue) > maxCalcValue) {
        inputValue = maxCalcValue.toString();
      }
      setter(inputValue.replace(/\.0+$/, "")); // Remove trailing .0
    } else {
      setter("1");
    }
  };

  return (
    <div
      className="bet-button-tab-1"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <div className="bet-btn-content">
        <button
          className="btn-tab"
          style={{ cursor: disbaledButton ? "default" : "" }}
          disabled={disbaledButton}
          onClick={() => handleMultiplierClick("1.5")}
          type="button"
        >
          <p>1.5x</p>
        </button>
        <button
          className="btn-tab"
          style={{
            cursor:
              (planeStatus === "0" && betData?.length > 0) ||
              (planeStatus === "1" && betData?.length > 0) ||
              nextRound[0]
                ? "default"
                : "",
          }}
          disabled={disbaledButton}
          onClick={() => handleMultiplierClick("2")}
          type="button"
        >
          <p>2x</p>
        </button>
      </div>
      <div className="cash-auto">
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            <button
              type="button"
              onClick={decrementCalcValue}
              style={{ cursor: disbaledButton ? "default" : "" }}
              disabled={disbaledButton}
              className="btn minus"
            >
              <p className="icon-font">-</p>
            </button>
          </div>
        </div>
        <div className="input-container input-cash">
          <label
            htmlFor=""
            className="label"
            style={{ fontSize: "10px", marginTop: "0.8rem" }}
          >
            Crash point
          </label>
          <input
            type="text"
            name=""
            value={calcValue}
            style={{ cursor: disbaledButton ? "default" : "" }}
            disabled={disbaledButton}
            onChange={handleInputChange(setCalcValue)}
            id=""
          />
        </div>
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            <button
              onClick={incrementCalcValue}
              style={{ cursor: disbaledButton ? "default" : "" }}
              disabled={disbaledButton}
              type="button"
              className="btn plus"
            >
              <p className="icon-font">+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bet-btn-content">
        <button
          className="btn-tab"
          style={{ cursor: disbaledButton ? "default" : "" }}
          disabled={disbaledButton}
          type="button"
          onClick={() => handleMultiplierClick("3")}
        >
          <p>3x</p>
        </button>
        <button
          className="btn-tab"
          style={{ cursor: disbaledButton ? "default" : "" }}
          disabled={disbaledButton}
          type="button"
          onClick={() => handleMultiplierClick("5")}
        >
          <p>5x</p>
        </button>
      </div>
    </div>
  );
};

export default CrashPoint;
import React from "react";
import "../../betDetails.css";

const CrashPoint = ({
  calcValue,
  setCalcValue,
  disableButton
}) => {
  const maxCalcValue = 24;
  const minCalcValue = 1.01;

  // Helper function to ensure value is within bounds
  const clampValue = (value) => Math.min(Math.max(value, minCalcValue), maxCalcValue);

  const incrementCalcValue = () => {
    setCalcValue((prevMulti) => {
      let [integerPart, decimalPart] = prevMulti.split(".").map(Number);

      integerPart = integerPart || 0;
      decimalPart = decimalPart || 0;

      if (decimalPart >= 9) {
        integerPart += 1;
        decimalPart = 0;
      } else {
        decimalPart += 1;
      }

      const newValue = parseFloat(`${integerPart}.${decimalPart}`);
      return clampValue(newValue).toFixed(2);
    });
  };

  const decrementCalcValue = () => {
    setCalcValue((prevMulti) => {
      let [integerPart, decimalPart] = prevMulti.split(".").map(Number);

      integerPart = integerPart || 0;
      decimalPart = decimalPart || 0;

      if (decimalPart <= 0) {
        if (integerPart > 1) {
          integerPart -= 1;
          decimalPart = 9;
        }
      } else {
        decimalPart -= 1;
      }

      const newValue = parseFloat(`${integerPart}.${decimalPart}`);
      return clampValue(newValue).toFixed(2);
    });
  };

  const handleMultiplierClick = (multiplier) => {
    const newValue = clampValue(parseFloat(multiplier));
    setCalcValue(newValue.toString());
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Input sanitization for valid number format
    if (inputValue.startsWith(".")) inputValue = "0" + inputValue;
    if (inputValue.startsWith("0") && !inputValue.startsWith("0.")) {
      inputValue = inputValue.replace(/^0+/, "");
    }

    const match = inputValue.match(/^\d{0,2}(\.\d{0,2})?$/);
    if (match) {
      let parsedValue = parseFloat(match[0]);
      if (isNaN(parsedValue)) parsedValue = minCalcValue;
      if (parsedValue > maxCalcValue) parsedValue = maxCalcValue;
      setCalcValue(parsedValue.toString());
    }
  };

  return (
    <div
      className="bet-button-tab-1"
      style={{
        overflowX: "auto", whiteSpace: "nowrap",
        opacity: disableButton ? 0.5 : 1,
        cursor: disableButton ? "default" : "pointer"
      }}
    >
      <div className="bet-btn-content">
        <button
          className="btn-tab"
          disabled={disableButton}
          onClick={() => handleMultiplierClick("1.5")}
          type="button"
        >
          <p>1.5x</p>
        </button>
        <button
          className="btn-tab"
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
              className="btn minus"
            >
              <p className="icon-font">-</p>
            </button>
          </div>
        </div>

        <div className="input-container input-cash">
          <label
            htmlFor="crash-point"
            className="label"
            style={{ fontSize: "10px", marginTop: "0.8rem" }}
          >
            Crash point
          </label>
          <input
            type="text"
            id="crash-point"
            value={calcValue}
            onChange={handleInputChange}
            style={{ cursor: disableButton ? "default" : "text" }}
          />
        </div>

        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            <button
              type="button"
              onClick={incrementCalcValue}
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
          onClick={() => handleMultiplierClick("3")}
          type="button"
        >
          <p>3x</p>
        </button>
        <button
          className="btn-tab"
          onClick={() => handleMultiplierClick("5")}
          type="button"
        >
          <p>5x</p>
        </button>
      </div>
    </div>
  );
};

export default CrashPoint;

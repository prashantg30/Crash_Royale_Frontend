import React from "react";

const RangeInputMobile = ({
  fromValue,
  toValue,
  setFromValue,
  setToValue,
  betData,
  planeStatus,
  nextRound,
}) => {
  const maxCalcValue = 24;
  const disabledButton =
    (planeStatus === "0" && betData?.length > 0) ||
    (planeStatus === "1" && betData?.length > 0) ||
    nextRound[0];

  const incrementCalcValue = (setter, currentValue) => {
    setter((prevValue) => {
      let newValue = parseFloat(currentValue || prevValue);
      if (isNaN(newValue) || newValue < 1.01) newValue = 1.01; // Ensure starting value is valid
      newValue += 1;
      return newValue >= maxCalcValue
        ? maxCalcValue.toFixed(2)
        : newValue.toFixed(2);
    });
  };

  const decrementCalcValue = (setter, currentValue) => {
    setter((prevValue) => {
      let newValue = parseFloat(currentValue || prevValue);
      if (isNaN(newValue) || newValue <= 1.01) newValue = 1.01;
      else newValue = Math.max(newValue - 1, 1.01);

      return newValue.toFixed(2);
    });
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
      if (inputValue === "" || parseFloat(inputValue) < 1.01) {
        inputValue = ""; // Keep it empty during typing, will validate on blur
      }
      if (parseFloat(inputValue) > maxCalcValue) {
        inputValue = maxCalcValue.toString();
      }
      setter(inputValue.replace(/\.0+$/, "")); // Remove trailing .0
    } else {
      setter(""); // Set to empty to trigger validation on blur
    }
  };

  const handleBlur = (setter, currentValue) => {
    let newValue = parseFloat(currentValue);
    if (isNaN(newValue) || newValue < 1.01) {
      setter("1.01");
    } else {
      setter(newValue.toFixed(2));
    }
  };

  return (
    <div
      className="bet-button-tab-1"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <div
        className=""
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <div
          className="cash-auto"
          style={{
            border: "1px solid rgb(60, 53, 83)",
            padding: "4px",
            borderRadius: "10px",
          }}
        >
          <div className="min-max-container min-padding">
            <div className="btn-container-cash">
              <button
                type="button"
                style={{ cursor: disabledButton ? "default" : "" }}
                disabled={disabledButton}
                onClick={() => decrementCalcValue(setFromValue, fromValue)}
                className="btn minus"
              >
                <p className="icon-font">-</p>
              </button>
            </div>
          </div>
          <div className="input-container input-cash">
            <input
              type="text"
              style={{
                cursor: disabledButton ? "default" : "",
                fontSize: "20px",
              }}
              disabled={disabledButton}
              value={fromValue}
              onChange={handleInputChange(setFromValue)}
              onBlur={() => handleBlur(setFromValue, fromValue)}
            />
          </div>
          <div className="min-max-container min-padding">
            <div className="btn-container-cash">
              <button
                style={{ cursor: disabledButton ? "default" : "" }}
                disabled={disabledButton}
                onClick={() => incrementCalcValue(setFromValue, fromValue)}
                type="button"
                className="btn plus"
              >
                <p className="icon-font">+</p>
              </button>
            </div>
          </div>
        </div>

        <div
          className="cash-auto"
          style={{
            border: "1px solid rgb(60, 53, 83)",
            padding: "4px",
            borderRadius: "10px",
          }}
        >
          <div className="min-max-container min-padding">
            <div className="btn-container-cash">
              <button
                type="button"
                style={{ cursor: disabledButton ? "default" : "" }}
                disabled={disabledButton}
                onClick={() => decrementCalcValue(setToValue, toValue)}
                className="btn minus"
              >
                <p className="icon-font">-</p>
              </button>
            </div>
          </div>
          <div className="input-container input-cash">
            <input
              type="text"
              value={toValue}
              style={{
                cursor: disabledButton ? "default" : "",
                fontSize: "20px",
              }}
              disabled={disabledButton}
              onChange={handleInputChange(setToValue)}
              onBlur={() => handleBlur(setToValue, toValue)}
            />
          </div>
          <div className="min-max-container min-padding">
            <div className="btn-container-cash">
              <button
                style={{ cursor: disabledButton ? "default" : "" }}
                disabled={disabledButton}
                onClick={() => incrementCalcValue(setToValue, toValue)}
                type="button"
                className="btn plus"
              >
                <p className="icon-font">+</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeInputMobile;

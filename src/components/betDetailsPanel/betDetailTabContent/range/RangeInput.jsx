import React from "react";

const RangeInput = ({
   fromValueRange,
   toValueRange,
  setFromValueRange,
  setToValueRange,
  disableButton
}) => {
  const maxCalcValue = 24;
  const minCalcValue = 1.01;

  const incrementCalcValue = (setter, currentValue) => {
    setter((prevValue) => {
      let newValue = parseFloat(currentValue || prevValue);
      if (isNaN(newValue) || newValue < minCalcValue) newValue = minCalcValue;
      newValue += 1;
      return newValue >= maxCalcValue
        ? maxCalcValue.toFixed(2)
        : newValue.toFixed(2);
    });
  };

  const decrementCalcValue = (setter, currentValue) => {
    setter((prevValue) => {
      let newValue = parseFloat(currentValue || prevValue);
      if (isNaN(newValue) || newValue <= minCalcValue) newValue = minCalcValue;
      else newValue = Math.max(newValue - 1, minCalcValue);
      return newValue.toFixed(2);
    });
  };

  const handleInputChange = (setter) => (e) => {
    let inputValue = e.target.value;
    if (inputValue.startsWith(".")) inputValue = "0" + inputValue;
    if (inputValue.startsWith("0") && !inputValue.startsWith("0.")) {
      inputValue = inputValue.replace(/^0+/, "");
    }
    const match = inputValue.match(/^\d{0,2}(\.\d{0,2})?$/);
    if (match) {
      inputValue = match[0];
      if (inputValue === "" || parseFloat(inputValue) < minCalcValue) {
        inputValue = ""; // Allow empty input while typing
      }
      if (parseFloat(inputValue) > maxCalcValue) {
        inputValue = maxCalcValue.toString();
      }
      setter(inputValue.replace(/\.0+$/, "")); // Remove trailing .0
    } else {
      setter(""); // Trigger validation on blur
    }
  };

  const handleBlur = (setter, currentValue) => {
    let newValue = parseFloat(currentValue);
    if (isNaN(newValue) || newValue < minCalcValue) {
      setter(minCalcValue.toFixed(2));
    } else {
      setter(newValue.toFixed(2));
    }
  };

  const renderButton = (onClick, label, disabled) => (
    <button
      type="button"
      style={{ cursor: disableButton ? "default" : "" }}
      disabled={disableButton}
      onClick={onClick}
      className={`btn ${label === "+" ? "plus" : "minus"}`}
    >
      <p className="icon-font">{label}</p>
    </button>
  );

  return (
    <div
      className="bet-button-tab-1"
      style={{ overflowX: "auto", whiteSpace: "nowrap",  
         opacity: disableButton ? 0.5 : 1,
        cursor: disableButton ? "default" : "pointer" }}

    >
      {/* FromValue Section */}
      <div className="cash-auto">
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            {renderButton(
              () => decrementCalcValue( setFromValueRange,  fromValueRange),
              "-",
              disableButton
            )}
          </div>
        </div>
        <div className="input-container input-cash">
          <input
            type="text"
            style={{ cursor: disableButton ? "default" : "", fontSize: "20px" }}
            value={ fromValueRange}
            onChange={handleInputChange( setFromValueRange)}
            onBlur={() => handleBlur( setFromValueRange,  fromValueRange)}
          />
        </div>
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            {renderButton(
              () => incrementCalcValue(setFromValueRange,  fromValueRange),
              "+",
              disableButton
            )}
          </div>
        </div>
      </div>

      {/* ToValue Section */}
      <div className="cash-auto">
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            {renderButton(
              () => decrementCalcValue(setToValueRange,  toValueRange),
              "-",
              disableButton
            )}
          </div>
        </div>
        <div className="input-container input-cash">
          <input
            type="text"
            value={toValueRange}
            style={{ cursor: disableButton ? "default" : "", fontSize: "20px" }}
            onChange={handleInputChange(setToValueRange)}
            onBlur={() => handleBlur(setToValueRange, toValueRange)}
          />
        </div>
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            {renderButton(
              () => incrementCalcValue(setToValueRange, toValueRange),
              "+",
              disableButton
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeInput;

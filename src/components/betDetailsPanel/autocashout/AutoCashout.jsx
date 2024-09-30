import React, { useEffect } from "react";
import "../betDetails.css";

const AutoCashout = ({
  name,
  autoCash,
  autoMultiplier,
  autoCashToggle,
  setAutoMultiplier,
}) => {
  useEffect(() => {
    setAutoMultiplier("2.00"); 
  }, [setAutoMultiplier]);

  const handleIncrease = () => {
    setAutoMultiplier((prevMulti) => {
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

      return `${integerPart}.${decimalPart.toString().padStart(2, "0")}`;
    });
  };

  const handleDecrease = () => {
    setAutoMultiplier((prevMulti) => {
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

      return `${Math.floor(newValue)}.${Math.round((newValue % 1) * 100)
        .toString()
        .padStart(1, "0")}`;
    });
  };

  const handleMultiplierClick = (multiplier) => {
    if (autoCash) {
      setAutoMultiplier(multiplier);
    }
  };

  const handleAutoCashMultiplier = (event) => {
    let inputValue = event.target.value;
    if (inputValue.startsWith(".")) {
      inputValue = "0" + inputValue;
    }
    if (inputValue.startsWith("0") && !inputValue.startsWith("0.")) {
      inputValue = inputValue.replace(/^0+/, "");
    }
    const match = inputValue.match(/^\d{0,3}(\.\d{0,2})?$/);

    if (match) {
      inputValue = match[0];
      if (inputValue === "" || parseFloat(inputValue) < 1) {
        inputValue = "";
      }
      setAutoMultiplier(inputValue);
    }
  };

  const handleFocus = () => {
    if (!autoMultiplier) {
      setAutoMultiplier("1.01");
    }
  };

  const buttonStyle = {
    color: autoCash ? "" : "#7e779e",
  };

  return (
    <div
      className="bet-button-tab-1"
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        opacity: autoCash ? "" : "0.5",
      }}
    >
      <div className="bet-btn-content">
        <button
          className="btn-tab"
          onClick={() => handleMultiplierClick("1.5")}
          type="button"
          disabled={!autoCash}
        >
          <p style={buttonStyle}>1.5x</p>
        </button>
        <button
          className="btn-tab"
          onClick={() => handleMultiplierClick("2")}
          type="button"
          disabled={!autoCash}
        >
          <p style={buttonStyle}>2x</p>
        </button>
      </div>
      <div className="cash-auto">
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            <button
              type="button"
              onClick={handleDecrease}
              className="btn minus"
              disabled={!autoCash}
            >
              <p className="icon-font">-</p>
            </button>
          </div>
        </div>
        <div
          className="input-container input-cash"
          style={{ background: !autoCash ? "transparent" : "" }}
        >
          <label
            className="label"
            style={{
              color: "rgb(131, 124, 156)",
              marginTop: ".8rem",
              fontSize: "10px",
            }}
          >
            Auto Cashout
          </label>
          <input
            type="text"
            value={autoMultiplier}
            onChange={handleAutoCashMultiplier}
            onFocus={handleFocus} // Add onFocus here
            disabled={!autoCash}
            style={{ color: buttonStyle.color, fontWeight: "800" }}
          />
        </div>
        <div className="min-max-container min-padding">
          <div className="btn-container-cash">
            <button
              onClick={handleIncrease}
              disabled={!autoCash}
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
          onClick={() => handleMultiplierClick("3")}
          type="button"
          disabled={!autoCash}
        >
          <p style={buttonStyle}>3x</p>
        </button>
        <button
          className={`btn-tab ${autoCash ? "on" : "off"}`}
          onClick={autoCashToggle}
        >
          <div
            className="squre-upper"
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#1f1933",
              position: "absolute",
              width: "9px",
              height: "9px",
              top: "-2px",
              right: "-3px",
              borderRadius: "15px",
            }}
          >
            <div
              className={`square ${autoCash ? "active-square" : ""}`}
              style={{ display: "flex" }}
            ></div>
          </div>

          <p style={buttonStyle}>{autoCash ? "ON" : "OFF"}</p>
        </button>
      </div>
    </div>
  );
};

export default AutoCashout;
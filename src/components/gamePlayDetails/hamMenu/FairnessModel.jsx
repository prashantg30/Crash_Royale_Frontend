import React, { useRef, useEffect, useState } from "react";
import { svgIcon } from "../../../utils/StaticData";
import "./fairness.css";
import RoundHistory from "../roundhistory/RoundHistory";

const FairnessModel = ({ setIsModalOpen, maxOdds, planeStatus }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleFocus = () => {
    setIsFocused(true); // Set focus state to true
  };

  const handleBlur = () => {
    setIsFocused(false); // Set focus state to false
  };

  return (
    <div className="modal-background">
      <div className="modal-3">
        <div className="modal-header-2">
          <div className="cross-icon-container-1">
            <div className="info-icon">
              <p>Fairness</p>
            </div>
            <div className="cross-icon" onClick={() => handleClose(false)}>
              {svgIcon.blackIcon}
            </div>
          </div>
        </div>

        <div className="fairness-container">
          <div className="round-history">
            <RoundHistory maxOdds={maxOdds} planeStatus={planeStatus} />
          </div>
          <div className="fairness-input">
            {/* Change label color based on focus */}
            <label
              htmlFor="hash"
              style={{
                color: isFocused ? "#fb6514" : "#3c3553",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Hash
            </label>
            <div>
              <input
                type="text"
                id="hash"
                placeholder="Enter hash"
                ref={inputRef}
                autoComplete="off"
                defaultValue=""
                onFocus={handleFocus} // Trigger focus event
                onBlur={handleBlur} // Trigger blur event
              />
            </div>
          </div>

          <div className="hash-btn-container">
            <button>MD5</button>
            <button>Multiplier</button>
            <button>Calculate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairnessModel;
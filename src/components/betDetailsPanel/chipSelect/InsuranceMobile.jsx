import React, { useEffect, useState } from "react";
import { betAmountValue, svgIcon } from "../../../utils/StaticData";
// import "../betDetails.css";
import "./chipPop.css";

const InsuranceMobile = ({ amount, setAmount, info }) => {
  const [lastClickedValue, setLastClickedValue] = useState(null);
  const [autoModal, setAutoModal] = useState(false); // Use boolean for active state
  const [isActive, setIsActive] = useState(false); // State to manage active status
  const MIN_AMOUNT = 1;
  const MAX_AMOUNT = Math.min(4000, Number(info?.balance) || 0);

  const handleAmountButtonClick = (value) => {
    const numericValue = Number(value);
    if (amount === "" || parseInt(value) !== parseInt(lastClickedValue)) {
      setAmount(Math.min(numericValue, MAX_AMOUNT));
    } else {
      setAmount((prevAmount) => {
        const newAmount = Number(prevAmount) + numericValue;
        return Math.min(newAmount, MAX_AMOUNT);
      });
    }
    setLastClickedValue(value);
  };

  const handleInsuranceClick = () => {
    setIsActive((prevState) => !prevState); // Toggle active state
    setAutoModal(true); // Show popup
  };

  useEffect(() => {
    let timer;
    if (autoModal) {
      timer = setTimeout(() => {
        setAutoModal(false); // Hide popup after 2 seconds
      }, 2000);
    }
    return () => clearTimeout(timer); 
  }, [autoModal]);

  return (
    // <div className="bet-button-tab-mobile">
    <div className="bet-button-tab-mobile">
      <div
        className={`btn-tab-mobile insurance-btn ${isActive ? "active" : "inactive"
          }`}
        onClick={handleInsuranceClick}
        style={{ height: "100%" }}
      >
        <h3
          className={isActive ? "active-icon" : "inactive-icon"}
        // style={{ marginTop: "5px" }}
        >
          {isActive ? svgIcon.activeIcon : svgIcon.insuranceIcon}
        </h3>
      </div>

      {autoModal && (
        <div
          className={`bet-placed-modal-2 cashout ${isActive ? "show-up" : "show-down"
            }`}
          style={{
            background: isActive ? "#07932c" : "#5c5474",
            color: "white",
          }}
        >
          {isActive ? "Insurance" : "Insurance Deactivated"}
        </div>
      )}
    </div>
    // </div>
  );
};

export default InsuranceMobile;

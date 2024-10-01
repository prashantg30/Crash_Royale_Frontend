import React, { useState } from "react";
import "./round.css";

const RoundModal = ({ onClose, selectedOdd, selectedButton }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const formateTime = (dateString) => {
    const parsedDate = new Date(dateString);
    return parsedDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const handleCopy = () => {
    // navigator.clipboard.writeText("MD5_HASH_VALUE");
    setIsCopied(true);

    // Optionally, reset the button after some time
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal-content-round">
        <div className="round-content">
          <div className="round-section">
            <p className="round-name">Round</p>
            <p className="round-num">
              <span>#</span>
              {selectedOdd?.lobby_id}
            </p>
            <div className="date-round">
              <p
                className="round-name"
                style={{ fontWeight: "700", color: "rgb(209, 205, 226)" }}
              >
                {selectedOdd?.created_at.slice(0, 10)}
              </p>
            </div>
          </div>

          <div className="round-section">
            <p
              className="round-name"
              style={{
                color:
                  parseInt(selectedOdd?.max_mult) > 2 ? "green" : "#cd5c5c",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Crash
            </p>
            <p
              className="round-num"
              style={{
                color:
                  parseInt(selectedOdd?.max_mult) > 2 ? "green" : "#cd5c5c",
              }}
            >
              {selectedButton === "" ? selectedOdd.max_mult : "??"}x
            </p>
            <div className="date-round">
              <p
                className="round-name"
                style={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "rgb(209, 205, 226)",
                }}
              >
                {formateTime(selectedOdd?.created_at)}
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="round-button">
            <button
              type=""
              className="hash"
              style={{ opacity: selectedButton === "" ? 1 : 0.1 }}
            >
              Hash
            </button>
            <button
              type=""
              className="md5"
              style={{ color: "#0c70db", fontWeight: "700" }}
              onClick={handleCopy}
            >
              {isCopied ? "Copied!" : "MD5"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundModal;
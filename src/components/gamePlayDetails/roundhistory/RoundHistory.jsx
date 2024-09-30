import React, { useState } from "react";
import RoundModal from "../roundhistory/RoundModel";

const RoundHistory = ({ maxOdds, planeStatus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOdd, setSelectedOdd] = useState(null);

  const handleClick = (el) => {
    setSelectedOdd(el);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOdd(null);
  };

  // Determine if MD5 or max_mult value should be displayed
  const shouldShowMD5 =
    maxOdds || maxOdds.length === 0 || maxOdds[0].max_mult <= 2;

  return (
    <div>
      <div className="bet-graph-btn-container">
        <div
          className="bet-graph-tab"
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {planeStatus == 0 || planeStatus == 1 ? (
            <div
              className="bet-tab"
              style={{
                backgroundColor: "#1570EF",
                color: "rgb(255, 255, 255)",
                fontWeight: "600",
                fontSize: "12px",
                boxShadow: "-5px 0px 10px rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => handleClick(maxOdds[0])}
            >
              MD5
            </div>
          ) : null}

          {maxOdds?.length > 0 &&
            maxOdds.map((el, i) => (
              <div
                className="bet-tab"
                key={i}
                style={{
                  backgroundColor: el?.max_mult > 2 ? "#0aad36" : "#7f779e",
                  color: el?.max_mult > 2 ? "#1d1929" : "#dcdae0",
                  fontWeight: "600",
                  boxShadow: "-5px 0px 10px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => handleClick(el)}
              >
                {el?.max_mult + "x"}
              </div>
            ))}
        </div>
      </div>

      {isModalOpen && (
        <RoundModal onClose={closeModal} selectedOdd={selectedOdd} />
      )}
    </div>
  );
};

export default RoundHistory;
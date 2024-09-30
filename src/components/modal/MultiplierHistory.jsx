import React, { useEffect, useState } from "react";
import { svgIcon } from "../../utils/StaticData";
import "../modal/modal.css";
import { socket } from "../../utils/socket/socketService";
import { formatDate, formateTime } from "../../utils/dateTime";
import RoundModal from "../gamePlayDetails/roundhistory/RoundModel";

const MultiplierHistory = ({ setOpenRoundModal, info, maxOdds }) => {
  const [myBetData, setMyBetData] = useState([]);
  const [tabActive, setTabActive] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOdd, setSelectedOdd] = useState(null);

  // const fetchMyBets = async () => {
  //     const data = await getCaller(`mybets?userId=${info.id}&operator_id=${info.operator_id}&limit=10`);
  //     setMyBetData(data.data || []);
  // };

  useEffect(() => {
    // fetchMyBets();

    socket.emit("message", `BT:MB:${info.id}:${info.operator_id}`);
    socket.on("mybet", (data) => {
      try {
        const newMyBet = JSON.parse(data);
        setMyBetData(newMyBet);
      } catch (err) {
        console.error("Error parsing mybet data:", err);
      }
    });

    return () => {
      socket.off("mybet");
    };
  }, [info.id, info.operator_id]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenRoundModal(false);
    }
  };

  const handleRound = (el) => {
    setSelectedOdd(el);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOdd(null);
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-header-1">
          <div className="cross-icon-container">
            <div
              className="cross-icon"
              onClick={() => setOpenRoundModal(false)}
            >
              {svgIcon.crossIcon}
            </div>
          </div>
          <div className="round-btn-center">
            <div className="round-tab-container">
              <div
                className={`round-tab ${tabActive === 0 ? "active-round-tab" : ""
                  }`}
                onClick={() => setTabActive(0)}
              >
                {svgIcon.historyIcon1}
                <p>Result</p>
              </div>
              <div
                className={`round-tab ${tabActive === 1 ? "active-round-tab" : ""
                  }`}
                onClick={() => setTabActive(1)}
              >
                {svgIcon.historyIcon2}
                <p>History</p>
              </div>
            </div>
          </div>
        </div>

        {tabActive === 0 && maxOdds?.length > 0 && (
          <div className="modal-content-1">
            <div className="multi-value-container">

              <div className="multi-value-tab"
                onClick={() => handleRound(maxOdds[0])}
                style={{
                  backgroundColor: "#1570ef",
                  color: "#ffffff",
                  fontWeight: "600"
                }}>
                MD5
              </div>
              {maxOdds.map((el, i) => (
                <div
                  className="multi-value-tab"
                  key={i}
                  onClick={() => handleRound(el)}
                  style={{
                    backgroundColor: el?.max_mult > 2 ? "#0aad36" : "#7f779e",
                    color: el?.max_mult > 2 ? "#1d1929" : "#dcdae0",
                    fontWeight: "600",
                  }}
                >
                  {el?.max_mult}x
                </div>
              ))}
            </div>
          </div>
        )}

        {tabActive === 0 && maxOdds?.length === 0 && (
          <p
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <p>{svgIcon.emojiIcon}</p>
            No odds available
          </p>
        )}

        {tabActive === 1 && (
          <div>
            <div style={{ height: "370px", overflowY: "auto" }}>
              {myBetData?.length > 0 ? (
                myBetData.map((el, i) => (
                  <div className="under-date-container" key={i}>
                    <div className="under-date">
                      <h2 className="under-h2">Range</h2>
                      <p className="under-p1" style={{ color: "white" }}>
                        {formatDate(el?.created_at)} -{" "}
                        {formateTime(el?.created_at)}
                      </p>
                    </div>
                    <div>
                      <div className="bet-over">
                        <div className="bet-1">
                          <p>Bet</p>
                          <p style={{ marginLeft: "1rem" }}>Cashout</p>
                          <p
                            style={{
                              color:
                                el?.status === "cashout"
                                  ? "rgb(34, 229, 75)"
                                  : "#ff6768",
                            }}
                          >
                            Crash
                          </p>
                        </div>
                        <div className="bet-2">
                          <p>{el?.bet_amount}</p>
                          <div
                            className="max-mult-bet"
                            style={{ display: "flex" }}
                          >
                            <p>{el?.max_mult}x</p>
                            <p style={{ marginTop: "2px", marginLeft: "4px" }}>
                              {svgIcon.mlogo}
                            </p>
                          </div>
                          <p
                            style={{
                              color:
                                el?.status === "cashout"
                                  ? "rgb(34, 229, 75)"
                                  : "#ff6768",
                            }}
                          >
                            {el?.round_max_mult}
                          </p>
                        </div>
                      </div>
                      <div className="usd-btn">
                        <button
                          type="button"
                          style={{
                            backgroundColor:
                              el?.status === "cashout"
                                ? "rgb(85, 245, 112)"
                                : "#1f1933",
                            color:
                              el?.status === "cashout" ? "#2a243a" : "#ff6768",
                            cursor: "text",
                          }}
                        >
                          {el?.status === "cashout"
                            ? (+el.bet_amount * +el.max_mult)?.toFixed(2)
                            : +el.bet_amount}{" "}
                          {el?.status === "cashout" ? "Win" : "Lost"}
                        </button>
                      </div>
                      <div className="md-container">
                        <button>MD5</button>
                        <button>Hash</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "12px",
                  }}
                >
                  <p>{svgIcon.emojiIcon}</p>
                  No bet data available
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <RoundModal onClose={closeModal} selectedOdd={selectedOdd} />
      )}
    </div>
  );
};

export default MultiplierHistory;

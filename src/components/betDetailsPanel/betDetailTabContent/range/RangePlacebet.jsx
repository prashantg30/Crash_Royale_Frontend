import React from "react";

const RangePlacebet = ({
  planeStatus,
  betData,
  handleCancelBet,
  handlePlaceBet,
  toValue,
  showCancel,
  fromValue,
  endDelay,
  winMultiplier,
  nextRound,
  handleNextClick,
  amount,
}) => {
  const isRangeInvalid =
    parseFloat(fromValue) >= parseFloat(toValue) ||
    toValue === "" ||
    fromValue === "";

  return (
    <>
      {isRangeInvalid || amount == 0 || isNaN(amount) ? (
        <>
          {planeStatus == 2 ? null : (
            <div className="crash-plane-btn">
              <button
                className="disabled-button"
                style={{
                  cursor: "not-allowed", background: isRangeInvalid ? "#ff6768" : "#ff6768",
                }} disabled >
                <p
                  className="front"
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#fff",
                  }}
                >
                  {isRangeInvalid
                    ? "Range not allowed"
                    : +amount === 0
                      ? "Min bet amount is 1"
                      : "Invalid input"}
                </p>
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className="bet-btn-flex"
            style={{
              padding:
                planeStatus === "2" ||
                  (planeStatus === "1" && betData.length > 0)
                  ? "0"
                  : "",
            }}
          >
            {planeStatus === "0" && +endDelay >= 6 && +endDelay <= 7 ? (
              <div className="bets-are-closed">
                <button className="" style={{ cursor: "not-allowed" }}>
                  <p
                    className="front"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "black",
                    }}
                  >
                    Bets are closed
                  </p>
                </button>
              </div>
            ) : (
              <>
                <div
                  className="btn-bet"
                  style={{
                    width: "100%",
                    paddingTop:
                      planeStatus === "2" ||
                        (planeStatus === "1" && betData.length > 0)
                        ? 0
                        : "",
                  }}
                >
                  {planeStatus === "0" && !showCancel[4] ? (
                    <button
                      className="button-place bet-place-btn"
                      onClick={() => handlePlaceBet(4)}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                        }}
                      >
                        Place Bet{" "}
                        <span
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          [{winMultiplier !== null && winMultiplier}x]
                        </span>
                      </span>
                    </button>
                  ) : planeStatus === "0" && showCancel[4] ? (
                    <button
                      className="button-place cancel-bet"
                      onClick={() => handleCancelBet(4)}
                    >
                      <p className="front">Cancel Bet ({amount})</p>
                    </button>
                  ) : null}
                  {planeStatus === "1" && !(betData?.length > 0) && (
                    <button
                      className="button-place bet-place-btn"
                      style={{
                        background: nextRound[4] ? "#716ff8" : "",
                        border: nextRound[4] ? "1px solid #716ff8" : "",
                      }}
                      onClick={() => handleNextClick(4)}
                    >
                      {nextRound[4] ? (
                        <div className="front">
                          <div className="cancel-next">
                            <span style={{ fontWeight: "700" }}>
                              {amount}
                            </span>
                            <span style={{ fontWeight: "700" }}>Placed</span>
                            <span
                              style={{ fontSize: "12px", fontWeight: "700" }}
                            >
                              (Next Round)
                            </span>
                            <span
                              style={{
                                fontSize: "10px",
                                color: "#ff6768",
                                fontWeight: "700",
                              }}
                            >
                              cancel
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="front">
                          <span
                            style={{ fontSize: "14px", fontWeight: "700" }}
                          >
                            Place Bet{" "}
                            <span
                              style={{ fontSize: "12px", margin: "0.2rem" }}
                            >
                              [{winMultiplier !== null && winMultiplier}x]
                            </span>
                          </span>
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
      {planeStatus === "1" && betData?.length > 0 ? (
        <div
          className="bet-btn-flex"
          style={{
            padding:
              planeStatus === "1" && betData.length > 0
                ? "0.5rem 0.5rem 0.3rem 0.5rem" : "",
          }} >
          {showCancel[4] ? (
            <div
              className="btn-bet"
              style={{
                width: showCancel[4] ? "100%" : "", paddingTop: planeStatus === "2" ||
                  (planeStatus === "1" && betData?.length > 0)
                  ? 0 : "",
              }} >
              <button
                type="button"
                className="button-place cash-btn"
                style={{
                  boxShadow: "none",
                  opacity: ".5",
                  background: "#0c70db",
                  border: "none",
                  cursor: "not-allowed",
                }}
                disabled
              >
                <p className="front">Playing</p>
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {(planeStatus == 1 && betData?.length && !showCancel[4]) ? (
        <div
          className="bet-btn-flex"
          >
          <div
            className="btn-bet"
            style={{
              width: !showCancel[4] ? "100%" : "", paddingTop: planeStatus === "2" ||
                (planeStatus === "1" && betData?.length > 0)
                ? 0 : "",
            }} >
            <button
              type="button"
              className="button-place cash-btn"
              style={{
                boxShadow: "none",
                opacity: ".5",
                background: "#0c70db",
                border: "none",
                cursor: "not-allowed",
              }}
              disabled
            >
              <p className="front">Playing</p>
            </button>
          </div>

        </div>
      ) : null}

      {planeStatus === "2" ? (
        <div className="crash-plane-btn">
          <button className="" style={{ cursor: "not-allowed" }}>
            <p
              className="front"
              style={{ fontWeight: "800", color: "#bfbfbf" }}
            >
              Crashed
            </p>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default RangePlacebet;

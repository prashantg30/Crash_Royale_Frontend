import React from "react";

const OverUnderBetButtonMobile = ({
  planeStatus,
  betData,
  handleCancelBet,
  handlePlaceBet,
  handleNextClick,
  showCancel,
  nextRound,
  endDelay,
  amount,
  cashoutShow,
  overUnderResult,
  calcValue,
  cashoutData,
}) => {
  // Determine if betting is closed
  const isBetsClosed = +endDelay >= 6 && +endDelay <= 7 && planeStatus === "0";

  // Determine if the crash point value is invalid or the amount is zero
  const isCrashPointInvalid = +calcValue <= 1.01;
  const isAmountInvalid = +amount === 0 || isNaN(amount);

  // Determine if the plane has crashed
  const isCrashed = planeStatus === "2";

  return (
    <>
      <div className="over-border" style={{}}>
        {/* Show message for invalid bet amount */}
        {isAmountInvalid && !isBetsClosed && !isCrashed && (
          <div className="crash-plane-btn" style={{}}>
            <button
              className=""
              style={{ cursor: "not-allowed", backgroundColor:"#ff6768"  }}
            >
              <p
                className="front"
                style={{ fontWeight: 700, fontSize: "16px", color: "#f9f9f9" }}
              >
                Min bet amount is 1
              </p>
            </button>
          </div>
        )}

        {/* Show message for invalid crash point */}
        {!isAmountInvalid &&
          isCrashPointInvalid &&
          !isBetsClosed &&
          !isCrashed && (
            <div className="crash-plane-btn" style={{ padding: "2px" }}>
              <button
                className=""
                style={{
                  cursor: "not-allowed",
                }}
              >
                <p
                  className="font"
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#f9f9f9",
                  }}
                >
                  Under cannot be 1.01 or less
                </p>
              </button>
            </div>
          )}

        {/* Show "Bets are closed" message if betting is closed */}
        {isBetsClosed && (
          <div className="bets-are-closed" style={{ padding: "2px" }}>
            <button
              className="betclosed"
              style={{
                cursor: "not-allowed",
                // padding: "0.5rem 0.5rem 0.3rem 0.5rem",
              }}
            >
              <p
                className="front"
                style={{ color: "#f9f9f9", fontSize: "16px", fontSize: "600" }}
              >
                Bets are closed
              </p>
            </button>
          </div>
        )}

        {/* Show betting buttons if betting is not closed and no invalid conditions */}
        {!isBetsClosed &&
          !isCrashPointInvalid &&
          !isAmountInvalid &&
          !isCrashed && (
            <div
              className="bet-btn-flex-mobile"
              style={{
                padding:
                  planeStatus === "2" ||
                  (planeStatus === "1" && betData.length > 0)
                    ? "0"
                    : "",
              }}
            >
              <div
                className="btn-bet"
                style={{
                  paddingTop:
                    planeStatus === "2" ||
                    (planeStatus === "1" && betData.length > 0)
                      ? 0
                      : "",
                }}
              >
                {planeStatus === "0" && !showCancel[0] ? (
                  <button
                    className="button-place bet-place-btn"
                    style={{
                      opacity: showCancel[1] ? "0.5" : "",
                      cursor: showCancel[1] ? "default" : "",
                    }}
                    disabled={showCancel[1]}
                    onClick={() => handlePlaceBet(0)}
                  >
                    <p className="front">Over [{overUnderResult.over}x]</p>
                  </button>
                ) : planeStatus === "0" && showCancel[0] ? (
                  <button
                    className="button-place cancel-bet"
                    onClick={() => handleCancelBet(0)}
                  >
                    <p className="cancel-bet-para">
                      Cancel Bet <span>Over [{overUnderResult.over}x]</span>
                    </p>
                  </button>
                ) : null}
                {planeStatus === "1" && !betData.length && (
                  <button
                    className="button-place bet-place-btn"
                    disabled={nextRound[1]}
                    style={{
                      background: nextRound[0] ? "#fb6514" : "",
                      border: nextRound[0] ? "1px solid #fb6514" : "",
                      boxShadow: nextRound[0] ? "red 0px -2px 0px inset" : "",
                      opacity: nextRound[1] ? "0.5" : "",
                      cursor: nextRound[1] ? "default" : "",
                    }}
                    onClick={() => handleNextClick(0)}
                  >
                    {nextRound[0] ? (
                      <p className="cancel-bet-para">
                        Cancel Bet <span>Over [{overUnderResult.over}x]</span>
                      </p>
                    ) : (
                      <div className="front">
                        <span>Over [{overUnderResult.over}x]</span>
                      </div>
                    )}
                  </button>
                )}
                {planeStatus === "1" && betData.length && showCancel[0] ? (
                  <button
                    className="button-place bet-place-btn"
                    style={{ background: "#0c70db", opacity: "0.5" }}
                  >
                    Playing
                  </button>
                ) : null}
              </div>
              <div
                className="btn-bet"
                style={{
                  paddingTop:
                    planeStatus === "2" ||
                    (planeStatus === "1" && betData.length > 0)
                      ? 0
                      : "",
                }}
              >
                {planeStatus === "0" && !showCancel[1] ? (
                  <button
                    className="button-place under-bet"
                    style={{
                      opacity: showCancel[0] ? "0.5" : "",
                      cursor: showCancel[0] ? "default" : "",
                    }}
                    disabled={showCancel[0]}
                    onClick={() => handlePlaceBet(1)}
                  >
                    <p className="front">Under [{overUnderResult.under}x]</p>
                  </button>
                ) : planeStatus === "0" && showCancel[1] ? (
                  <button
                    className="button-place cancel-bet"
                    onClick={() => handleCancelBet(1)}
                  >
                    <p className="cancel-bet-para">
                      Cancel Bet <span>Under [{overUnderResult.under}x]</span>
                    </p>
                  </button>
                ) : null}
                {planeStatus === "1" && !betData.length && (
                  <button
                    className="button-place under-bet"
                    disabled={nextRound[1]}
                    style={{
                      background: nextRound[1] ? "#fb6514" : "",
                      border: nextRound[1] ? "1px solid #fb6514" : "",
                      boxShadow: nextRound[1] ? "red 0px -2px 0px inset" : "",
                      opacity: nextRound[1] ? "0.5" : "",
                      cursor: nextRound[1] ? "default" : "",
                    }}
                    onClick={() => handleNextClick(1)}
                  >
                    {nextRound[1] ? (
                      <p className="cancel-bet-para">
                        Cancel Bet <span>Under [{overUnderResult.under}x]</span>
                      </p>
                    ) : (
                      <div className="front">
                        <span>Under [{overUnderResult.under}x]</span>
                      </div>
                    )}
                  </button>
                )}
                {planeStatus === "1" && betData.length && showCancel[1] ? (
                  <button
                    className="button-place bet-place-btn"
                    style={{ background: "#0c70db", opacity: "0.5" }}
                  >
                    Playing
                  </button>
                ) : null}
              </div>
            </div>
          )}

        {/* Show "Crashed" message if the plane has crashed */}
        {isCrashed && (
          <div className="crash-plane-btn" style={{ padding: "2px" }}>
            <button
              className=""
              style={{ cursor: "not-allowed"}}
            >
              <p
                className="front"
                style={{ fontWeight: "800", color: "#bfbfbf" }}
              >
                Crashed
              </p>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default OverUnderBetButtonMobile;

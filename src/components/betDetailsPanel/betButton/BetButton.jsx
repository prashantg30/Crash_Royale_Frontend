import React from "react";

const BetButton = ({
  planeStatus,
  betData,
  cashoutData,
  handleCancelBet,
  handleCashout,
  handlePlaceBet,
  handleNextClick,
  amount,
  showCancel,
  nextRound,
  amountMultiplier,
  endDelay,
  cashoutShow,
}) => {
  console.log(betData);
  return (
    <>
      {!(+endDelay >= 6 && +endDelay <= 7) &&
        planeStatus != 2 &&
        (amount == 0 || isNaN(amount)) ? (
        <div className="crash-plane-btn">
          <button
            style={{ backgroundColor: "rgb(255, 103, 104)", cursor: "not-allowed" }}
            className=""
          >
            <span
              style={{
                fontWeight: 700,
                fontSize: "16px",
                width: "100%",
                height: "48",
                marginRight: "8px",
                fontFamily: "nunito Sans,sans-serif",
                color: "#f9f9f9",
              }}
            >
              Min bet amount is 1
            </span>
          </button>
        </div>
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
                <button className="">
                  <p
                    className="front"
                    style={{ color: "black", fontSize: "16px" }}
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
                      onClick={() => handlePlaceBet(0)}
                    >
                      <p className="front">Place Bet 1</p>
                    </button>
                  ) : planeStatus === "0" && showCancel[0] ? (
                    <button
                      className="button-place cancel-bet"
                      onClick={() => handleCancelBet(0)}
                    >
                      <p className="front" style={{ fontSize: "16px" }}>
                        Cancel Bet{" "}
                      </p>
                    </button>
                  ) : null}
                  {planeStatus === "1" && !betData.length > 0 && (
                    <button
                      className="button-place bet-place-btn"
                      style={{
                        background: nextRound[0] ? "#716ff8" : "",
                        border: nextRound[0] ? "1px solid #716ff8" : "",
                      }}
                      onClick={() => handleNextClick(0)}
                    >
                      {nextRound[0] ? (
                        <div
                          className="front"
                          style={{
                            fontSize: "12px",
                            fontWeight: "800",
                            color: "aliceblue",
                          }}
                        >
                          <span
                            style={{ fontSize: "15px", color: "#ffffff80" }}
                          >
                            {amount}
                          </span>
                          <div className="cancel-next">
                            <span
                              style={{
                                fontSize: "8px",
                                fontWeight: "600",
                                color: "#ffffff80",
                              }}
                            >
                              Placed (Next Round){" "}
                              <span
                                style={{
                                  fontSize: "8px",
                                  color: "#ff6768",
                                  fontWeight: "600",
                                }}
                              >
                                cancel
                              </span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="front">
                          <span>Place Bet 1</span>
                          <span style={{ fontSize: "11px", fontWeight: "600" }}>
                            (Next Round)
                          </span>
                        </div>
                      )}
                    </button>
                  )}
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
                      className="button-place bet-place-btn"
                      onClick={() => handlePlaceBet(1)}
                    >
                      <p className="front">Place Bet 2</p>
                    </button>
                  ) : planeStatus === "0" && showCancel[1] ? (
                    <button
                      className="button-place cancel-bet"
                      onClick={() => handleCancelBet(1)}
                    >
                      <p className="front" style={{ fontSize: "16px" }}>
                        Cancel Bet{" "}
                      </p>
                    </button>
                  ) : null}
                  {planeStatus === "1" && !betData.length > 0 && (
                    <button
                      className="button-place bet-place-btn"
                      style={{
                        background: nextRound[1] ? "#716ff8" : "",
                        border: nextRound[1] ? "1px solid #716ff8" : "",
                      }}
                      onClick={() => handleNextClick(1)}
                    >
                      {nextRound[1] ? (
                        <div
                          className="front"
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "aliceblue",
                          }}
                        >
                          <span
                            style={{ fontSize: "15px", color: "#ffffff80" }}
                          >
                            {amount}
                          </span>
                          <div className="cancel-next">
                            <span
                              style={{
                                fontSize: "8px",
                                fontWeight: "600",
                                color: "#ffffff80",
                              }}
                            >
                              Placed (Next Round){" "}
                              <span
                                style={{
                                  fontSize: "7px",
                                  color: "#ff6768",
                                  fontWeight: "600",
                                }}
                              >
                                cancel
                              </span>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="front">
                          <span className="front">Place Bet 2 </span>
                          <span style={{ fontSize: "11px", fontWeight: "600" }}>
                            (Next Round)
                          </span>
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
          {planeStatus === "1" && betData?.length > 0 ? (
            <div
              className="bet-btn-flex"
              style={{
                padding:
                  planeStatus === "1" && betData.length > 0
                    ? "0.5rem 0.5rem 0.3rem 0.5rem"
                    : "",
              }}
            >
              {showCancel[0] && cashoutShow[0] ? (
                <div
                  className="btn-bet"
                  style={{ width: showCancel[0] ? "100%" : "" }}
                >
                  <button
                    type="button"
                    className="button-place cash-btn"
                    onClick={() => handleCashout(0)}
                  >
                    <p className="front">
                      Cashout {parseFloat(amountMultiplier?.toFixed(2))}
                    </p>
                  </button>
                </div>
              ) : cashoutData[0]?.plane_status === "cashout" ? (
                <button type="button" className="button-place win-btn">
                  <p
                    className="front"
                    style={{ color: "#235a11", fontSize: "14px" }}
                  >
                    You won
                    <span style={{ fontSize: "16px" }}>
                      {cashoutData[0]?.final_amount || "0"}
                    </span>
                  </p>
                </button>
              ) : null}
              {showCancel[1] && cashoutShow[1] ? (
                <div
                  className="btn-bet"
                  style={{ width: showCancel[1] ? "100%" : "" }}
                >
                  <button
                    type="button"
                    className="button-place cash-btn"
                    onClick={() => handleCashout(1)}
                  >
                    <p className="front">
                      Cashout {parseFloat(amountMultiplier?.toFixed(2))}
                    </p>
                  </button>
                </div>
              ) : cashoutData[1]?.plane_status === "cashout" ? (
                <button type="button" className="button-place win-btn">
                  <p
                    className="front"
                    style={{ color: "#235a11", fontSize: "14px" }}
                  >
                    You won
                    <span style={{ fontSize: "16px" }}>
                      {cashoutData[1]?.final_amount || "0"}
                    </span>
                  </p>
                </button>
              ) : null}
            </div>
          ) : null}
          {planeStatus == 2 ? (
            <div className="crash-plane-btn">
              <button className="">
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
      )}
    </>
  );
};

export default BetButton;

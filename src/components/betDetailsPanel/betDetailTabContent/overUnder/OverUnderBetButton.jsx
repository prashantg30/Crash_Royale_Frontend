import React from "react";

const OverUnderBetButton = ({
  planeStatus,
  betData,
  handleCancelBet,
  handlePlaceBet,
  handleNextClick,
  showCancel,
  nextRound,
  endDelay,
  cashoutData,
  handleCashout,
  overUnderResult,
}) => {


  return (
    <>
      <div className="bet-btn-flex">
        {/* over button  */}
        {(planeStatus == 0 && !showCancel[2]) ? (
          <button disabled={showCancel[3]} style={{ cursor: showCancel[3] ? "default" : "" }} className='button-place bet-place-btn' type='button' onClick={() => handlePlaceBet(2)}>
            <p className="front">Over [{overUnderResult.over}x]</p>
          </button>
        ) : (
          planeStatus == 0 && showCancel[2] ? (
            <button className='button-place cancel-bet' type='button' onClick={() => handleCancelBet(2)}>
              <p className="cancel-bet-para">
                Cancel Bet <span>Over[{overUnderResult.over}x]</span>
              </p>
            </button>
          ) : null
        )}


        {/* under button  */}
        {(planeStatus == 0 && !showCancel[3]) ? (
          <button disabled={showCancel[2]} style={{ cursor: showCancel[2] ? "default" : "" }} className='button-place under-bet' type='button' onClick={() => handlePlaceBet(3)}>
            <p className="front">Under[{overUnderResult.under}x]</p>
          </button>
        ) : (
          planeStatus == 0 && showCancel[3] ? (
            <button className='button-place cancel-bet' type='button' onClick={() => handleCancelBet(3)}>
              <p className="cancel-bet-para">
                Cancel Bet <span>Under[{overUnderResult.under}x]</span>
              </p>
            </button>

          ) : null
        )}

        {/* over next button  */}
        {(planeStatus == 1 && !betData?.length) ? (
          <>
            {nextRound[2] ? (
              <button className='button-place cancel-bet' type='button' onClick={() => handleCancelBet(2)}>
                <p className="cancel-bet-para">
                  Cancel Bet <span>Over[{overUnderResult.over}x]</span>
                </p>
              </button>
            ) : (
              <button disabled={nextRound[3]} style={{ cursor: nextRound[3] ? "default" : "" }} className='button-place bet-place-btn' type='button' onClick={() => handleNextClick(2)}>
                <p className="front">Over[{overUnderResult.over}x]</p>
              </button>
            )}
          </>
        ) : null}

        {/* under next button  */}
        {(planeStatus == 1 && !betData?.length) ? (
          <>
            {nextRound[3] ? (
              <button className='button-place cancel-bet' type='button' onClick={() => handleCancelBet(3)}>
                <p className="cancel-bet-para">
                  Cancel Bet <span>Under[{overUnderResult.under}x]</span>
                </p>
              </button>
            ) : (
              <button disabled={nextRound[2]} style={{ cursor: nextRound[2] ? "default" : "" }} className='button-place under-bet' type='button' onClick={() => handleNextClick(3)}>
                <p className="front">Under[{overUnderResult.under}x]</p>
              </button>
            )}
          </>
        ) : null}


        {/* playing over button  */}
        {(planeStatus == 1 && betData?.length && showCancel[2]) ? (
          <button disabled={showCancel[3]} style={{ cursor: showCancel[3] ? "default" : "", opacity: showCancel[3] ? ".5" : "" }} type='button' className='button-place bet-place-btn cash-color' onClick={() => handleCashout(2)}>
            <p className='cash-text'>
              Playing
            </p>
          </button>
        ) : null}

        {/* playing under button  */}
        {(planeStatus == 1 && betData?.length && showCancel[3]) ? (
          <button type='button' disabled={showCancel[2]} style={{ cursor: showCancel[2] ? "default" : "", opacity: showCancel[2] ? ".5" : "" }} className='button-place bet-place-btn cash-color' onClick={() => handleCashout(3)}>
            <p className='cash-text'>
              Playing
            </p>
          </button>
        ) : null}

     
        {(planeStatus == 1 && betData?.length && !showCancel[2]) ? (
          <>
            {nextRound[2] ? (
              <button className='button-place cancel-bet' type='button' onClick={() => handleCancelBet(2)}>
                <p className="cancel-bet-para">
                  Cancel Bet <span>Over[{overUnderResult.over}x]</span>
                </p>
              </button>
            ) : (
              <button disabled={showCancel[3] || !showCancel[3]} style={{ cursor: showCancel[3] || !showCancel[3] ? "default" : "", opacity: showCancel[3] || !showCancel[3] ? ".5" : "" }} className='button-place bet-place-btn' type='button' onClick={() => handleNextClick(2)}>
              {
                !showCancel[2]?"playing":null
              }
              {
                showCancel[3]?"over":null
              }
              </button>
            )}
          </>
        ) : null}

       
        {(planeStatus == 1 && betData?.length && !showCancel[3]) ? (
          <>
            {nextRound[3] ? (
              <button className='button-place cancel-bet' type='button' onClick={() => handleCancelBet(3)}>
                <p className="cancel-bet-para">
                  Cancel Bet <span>Under[{overUnderResult.under}x]</span>
                </p>
              </button>
            ) : (
              <button disabled={showCancel[2] || !showCancel[2]} style={{ cursor: showCancel[2] || !showCancel[2] ? "default" : "", opacity: showCancel[2] || !showCancel[2] ? ".5" : "" }} className='button-place under-bet' type='button' onClick={() => handleNextClick(3)}>
                {
                !showCancel[3]?"playing":null
              }
              {
                showCancel[2]?"under":null
              }
              </button>
            )}
          </>
        ) : null}

        {planeStatus == 2 ? (
          <button className="over-crash-btn">
            <p
              className="front"
              style={{ fontWeight: "800", color: "#bfbfbf" }}
            >
              Crashed
            </p>
          </button>
        ) : null}
      </div>
    </>
  );
};

export default OverUnderBetButton;

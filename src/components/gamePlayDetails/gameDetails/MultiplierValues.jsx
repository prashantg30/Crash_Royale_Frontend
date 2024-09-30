import React, { useEffect, useState } from 'react';

const MultiplierValues = ({ planeStatus, planeMutiplier, endDelay }) => {
    const [counter, setCounter] = useState(7);
    useEffect(() => {
        let timer;
        if (planeStatus === "0") {
            timer = setInterval(() => {
                setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 0.01 : 0));
            }, 10);


        } else if (planeStatus === "1") {
            clearInterval(timer);
            setCounter(7); // Reset counter when planeStatus changes to 1
        }

        return () => clearInterval(timer);
    }, [planeStatus]);


    return (
        <div className="bet-display">
            <div className="crash-content">

                <h1 style={{ color: planeStatus === "2" && planeMutiplier <= 2 ? "#ff6768" : (planeStatus === "2" && planeMutiplier >= 2) ? "green" : "white" }}>
                    {
                        planeStatus === "0" ? "0.00x" : planeMutiplier + "x"
                    }
                </h1>
                {planeStatus === "0" ? (
                    <div className="place-container">
                        <p className="place-para">
                            {
                                planeStatus === "0" && (endDelay >= 6 && endDelay <= 7) ? "Bets are closed" : "Place your bet"
                            }
                        </p>
                        <div className="next">
                            <p>Next round in {counter.toFixed(2)}</p>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default MultiplierValues;

import React, { useEffect, useState } from 'react'
import './betDetails.css'
import { tabData } from '../../utils/StaticData'
import Classic from './betDetailTabContent/classic/Classic'
import OverUnder from './betDetailTabContent/overUnder/OverUnder'
import Range from './betDetailTabContent/range/Range'
import { socket } from '../../utils/socket/socketService'
import PlayerDetails from './player/PlayerDetails'
import CashoutModal from './betDetailTabContent/classic/CashoutModal'
import { calcOverunder, calculateRange } from '../../utils/calculator'
import BetModal from './betDetailTabContent/classic/BetModal'
const BetDetails = ({ info, planeData, amount, setAmount, queryParams }) => {
    const [activeTab, setActiveTab] = useState(0)
    const parsedBetData = planeData?.length > 0 ? planeData.split(':') : null;
    const planeStatus = parsedBetData?.length > 0 ? parsedBetData[2] : 0;
    const planeMutiplier = parsedBetData?.length > 0 ? parsedBetData[1] : 0;
    const [oneCashout, setOneCashout] = useState([])
    const [crashedData, setCrashedData] = useState([])
    const [cashoutData, setCashoutData] = useState([])
    const [showBalance, setShowBalace] = useState(false);
    const [openModal, setOpenModal] = useState([])
    const [autoCash, setAutoCash] = useState(false);
    const [betModal, setBetModal] = useState([])
    const [autoMultiplier, setAutoMultiplier] = useState("2");
    const [autoModal, setAutoModal] = useState(null)
    const [showCancel, setShowCancel] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false });
    const [cashoutShow, setCashoutShow] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false });
    const [betData, setBetData] = useState([]);
    const [calcValue, setCalcValue] = useState("2.00");
    const rtpMultiplier = 0.97;
    const maxWinningOdds = 36;
    const [fromValueRange, setFromValueRange] = useState("2.00");
    const [toValueRange, setToValueRange] = useState("3.00");
    const [winMultiplier, setWinMultiplier] = useState(null);
    const [overUnderResult, setOverUnderResult] = useState({ over: 0, under: 0 });
    const [nextRound, setNextRound] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false });
    const endDelay = parsedBetData?.length > 0 ? parsedBetData[1] : 0;
    // remove data after crashed
    const disableButton = (planeStatus == 0 && showCancel[0] || showCancel[1]) || (planeStatus == 1 && nextRound[0] || nextRound[1]) || (planeStatus == 2 && nextRound[0] || nextRound[1]) || (planeStatus == 1 && betData.length > 0 && showCancel);

    useEffect(() => {
        if (planeStatus == 2) {
            setBetData([]);
            setCashoutData([]);
            setShowCancel({ 0: false, 1: false, 2: false, 3: false, 4: false });
            return () => {
                socket.off("bet");
                socket.off("cashout");
                socket.off("singleCashout");
            };
        }
    }, [planeStatus]);

    useEffect(() => {
        if (planeStatus === "0") {
            if (nextRound[0]) {
                handlePlaceBet(0);
                setNextRound((prev) => ({ ...prev, 0: false }));
            }
            if (nextRound[1]) {
                handlePlaceBet(1);
                setNextRound((prev) => ({ ...prev, 1: false }));
            }
            if (nextRound[2]) {
                handlePlaceBet(2);
                setNextRound((prev) => ({ ...prev, 2: false }));
            }
            if (nextRound[3]) {
                handlePlaceBet(3);
                setNextRound((prev) => ({ ...prev, 3: false }));
            }
            if (nextRound[4]) {
                handlePlaceBet(4);
                setNextRound((prev) => ({ ...prev, 4: false }));
            }
        }
    }, [planeStatus]);

    useEffect(() => {
        const result = calculateRange(fromValueRange, toValueRange, rtpMultiplier, maxWinningOdds);
        setWinMultiplier(result);
    }, [fromValueRange, toValueRange]);


    useEffect(() => {
        const result = calcOverunder(calcValue, rtpMultiplier, maxWinningOdds);
        setOverUnderResult(result);
    }, [calcValue]);
    console.log(winMultiplier)

    // classic cashout 
    useEffect(() => {
        if (planeStatus === "1" && betData?.length > 0 && planeMutiplier >= autoMultiplier && autoCash) {
            if (cashoutShow[0]) {
                handleCashout(0);
            }
            // Or handleCashout(1) depending on which button should trigger the cashout
        }
        if (planeStatus === "1" && betData?.length > 0 && planeMutiplier >= autoMultiplier && autoCash) {
            if (cashoutShow[1]) {
                handleCashout(1);
            }
        }
    }, [planeStatus, betData, autoCash, autoMultiplier, planeMutiplier]);

    // over under cashout 
    useEffect(() => {
        if (activeTab == 1) {
            if (planeStatus === "1" && betData?.length > 0 && parseFloat(overUnderResult.over) === parseFloat(planeMutiplier)) {
                if (cashoutShow[2]) {
                    handleCashout(2);
                }
            }
            if (
                planeStatus === "1" && betData?.length > 0 && parseFloat(overUnderResult.under) === parseFloat(planeMutiplier)) {
                if (cashoutShow[3]) {
                    handleCashout(3);
                }
            }
        }
    }, [planeStatus, betData, overUnderResult.over, cashoutShow, overUnderResult.under, planeMutiplier,]);


    // range cashout 
    useEffect(() => {
        if (activeTab === 2) {
            if ((planeStatus === "1" && betData?.length > 0 && (winMultiplier <= planeMutiplier))) {
                if (cashoutShow[4]) {
                    handleCashout(4);
                }
            }
        }

    }, [planeStatus, betData, winMultiplier, cashoutShow, planeMutiplier]);

    useEffect(() => {
        socket.on("crash", (data) => {
            try {
                const newCrashed = JSON.parse(data);
                setCrashedData(newCrashed)
            }
            catch (err) {
            }
        })
    }, [])
    useEffect(() => {
        if (planeStatus == 0) {
            setCrashedData([])
        }
    }, [planeStatus])

   

    useEffect(() => {
        let timer;
        if (autoModal !== null) {
            timer = setTimeout(() => {
                setAutoModal(null);

            }, 2000);
        }
        return () => {
            clearTimeout(timer);
        };

    }, [autoModal]);


    useEffect(() => {
        const handleCashoutData = (data) => {
            try {
                setCashoutData(data);
            } catch (err) {
                console.error("Cashout data parsing error:", err);
            }
        };
        if (socket.listeners("cashout").length == 0) {
            socket.on("cashout", handleCashoutData);
        }
        // Cleanup on component unmount
    }, [cashoutData]);

    // place bet function 
    const handlePlaceBet = (buttonNumber) => {
        // if (messageEmittedBet) return;
        if ((planeStatus === "0" && +amount > info.balance) || +amount === 0) {
            return setShowBalace(true);
        }
        setShowCancel((prev) => ({ ...prev, [buttonNumber]: true }));
        setCashoutShow((prev) => ({ ...prev, [buttonNumber]: true }));
        // Emit the bet message
        const autoValue = autoCash ? autoMultiplier : null;
        let gameType = "classic";
        if (activeTab === 0) {
            gameType = "classic";
        } else if (activeTab === 1) {
            gameType = buttonNumber === 2 ? "over" : "under";
        } else if (activeTab === 2) {
            gameType = "range";
        }
        socket.emit("message", `BT:PB:${planeData}:${gameType}:${info.id}:${info.operator_id}:${queryParams.id}:${queryParams.game_id}:${autoValue}:${amount}:${buttonNumber}`);
        const handleBet = (data) => {
            console.log(data, "hello")
            try {
                setBetData(data);
             
            } catch (err) {
                console.error(err);
            }
        };
        setBetModal(true);
        socket.on("bet", handleBet);
    };

    const handleNextClick = (buttonNumber) => {
        planeData.split(" : ");
        let a = planeData?.split(":");
        a.pop();
        a.push("0");
        let b = a.join(":");
        setNextRound((prev) => ({ ...prev, [buttonNumber]: true }));
        if (nextRound[buttonNumber]) {
            handleCancelBet(buttonNumber);
        }
    };
    // cancel bet function
    const handleCancelBet = (buttonNumber) => {
        setShowCancel((prev) => ({ ...prev, [buttonNumber]: false }));
        setNextRound((prev) => ({ ...prev, [buttonNumber]: false }));
        betData?.length > 0 &&
            betData?.forEach((x) => {
                if (
                    buttonNumber == x?.bet_id?.split(":")[5] &&
                    info.id === x?.bet_id?.split(":")[3]
                ) {
                    socket.emit("message", `BT:CB:${planeStatus}:${x.bet_id}`);
                    setBetData([]);
                    return;
                }
            });
    };
    const autoCashToggle = () => {
        setAutoCash(!autoCash);
    };
    let amountMultiplier = amount * +planeMutiplier;

    const handleCashout = (buttonNumber) => {
        // if (messageEmitted) return;
        setCashoutShow((prev) => ({ ...prev, [buttonNumber]: false }));
        setShowCancel((prev) => ({ ...prev, [buttonNumber]: false }));
        const bet = betData.find((x) => {
            const betIdParts = x.bet_id.split(":");
            const betIndex = betIdParts[5];
            return buttonNumber == betIndex && info.id === x?.bet_id?.split(":")[3];
        });
        if (bet) {
            let autoValue =
                +autoMultiplier > +planeMutiplier ? null : +autoMultiplier;
            if (autoValue !== null) {
                autoValue = autoValue.toFixed(2);
            }
            socket.emit(
                "message",
                `BT:CO:${planeMutiplier}:${planeStatus}:${autoValue}:${bet.bet_id}`
            );
            const handleSingleCashout = (data) => {
                try {

                    setOneCashout(data)
                    setOpenModal(prev => [...prev, {
                        bet_id: bet.bet_id, show: true, buttonNumber, finalAmount: data[1] ? data[1].final_amount : data[0].final_amount,
                        max_mult: data[1] ? data[1].max_mult : data[0].max_mult,
                        maxAutoCashout: data[1] ? data[1].maxAutoCashout : data[0].maxAutoCashout
                    }]);


                } catch (err) {
                    console.error("Single cashout data parsing error:", err);
                }
            };
            socket.once("singleCashout", handleSingleCashout);
        }
        setNextRound((prev) => ({ ...prev, [buttonNumber]: false }));
        setCashoutData("");

    };

    console.log(betData)

    return (
        <>
            <div className='place-bet'>
                <div className="place-tab-container">
                    {
                        tabData.map((el, i) => (
                            <div key={i} className={`place-tab ${activeTab === i ? "active-tab" : ""}`} onClick={() => setActiveTab(i)}>
                                <p>{el.name}</p>
                            </div>
                        ))
                    }
                </div>
                {
                    activeTab === 0 && (
                        <Classic amount={amount}
                            setAmount={setAmount}
                            info={info}
                            planeStatus={planeStatus}
                            setAutoMultiplier={setAutoMultiplier}
                            showCancel={showCancel}
                            setShowCancel={setShowCancel}
                            setCashoutShow={setCashoutShow}
                            setAutoCash={setAutoCash}
                            amountMultiplier={amountMultiplier}
                            handleCancelBet={handleCancelBet}
                            handleNextClick={handleNextClick}
                            nextRound={nextRound}
                            endDelay={endDelay}
                            disableButton={disableButton}
                            cashoutData={cashoutData}
                            autoCash={autoCash}
                            autoCashToggle={autoCashToggle}
                            autoMultiplier={autoMultiplier}
                            betData={betData}
                            cashoutShow={cashoutShow}
                            handleCashout={handleCashout}
                            handlePlaceBet={handlePlaceBet}


                        />
                    )
                }
                {
                    activeTab === 1 && (<OverUnder
                        amount={amount}
                        handleCancelBet={handleCancelBet}
                        handleCashout={handleCashout}
                        handleNextClick={handleNextClick}
                        nextRound={nextRound}
                        showCancel={showCancel}
                        calcValue={calcValue}
                        cashoutData={cashoutData}
                        betData={betData}
                        planeStatus={planeStatus}
                        planeMutiplier={planeMutiplier}
                        cashoutShow={cashoutShow}
                        setCalcValue={setCalcValue}
                        overUnderResult={overUnderResult}
                        disableButton={disableButton}
                        endDelay={endDelay}
                        handlePlaceBet={handlePlaceBet}
                        setAmount={setAmount}
                        info={info} />)
                }
                {
                    activeTab === 2 && (<Range info={info}
                        cashoutData={cashoutData}
                        fromValueRange={fromValueRange}
                        toValueRange={toValueRange}
                        setFromValueRange={setFromValueRange}
                        setToValueRange={setToValueRange}
                        betData={betData}
                        cashoutShow={cashoutShow}
                        showCancel={showCancel}
                        nextRound={nextRound}
                        winMultiplier={winMultiplier}
                        planeStatus={planeStatus}
                        disableButton={disableButton}
                        handleCancelBet={handleCancelBet}
                        handleCashout={handleCashout}
                        handleNextClick={handleNextClick}
                        handlePlaceBet={handlePlaceBet}
                        endDelay={endDelay}

                        amount={amount}
                        setAmount={setAmount}
                    />)
                }
                <PlayerDetails
                    setBetData={setBetData}
                    betData={betData}
                    amount={amount}
                    crashedData={crashedData}
                    cashoutData={cashoutData}
                    planeStatus={planeStatus}
                    info={info}
                />

            </div>
            <BetModal betModal={betModal} betData={betData} setBetModal={setBetModal} />
            <CashoutModal openModal={openModal} setOpenModal={setOpenModal} />

            {autoModal !== null && (
                <div className={'bet-placed-modal-1 cashout'} style={{ background: autoModal ? "#07932c" : "#5c5474", color: "white" }}>
                    {autoModal ? "Auto Cashout" : "Auto Cashout Deactivated"}

                </div>
            )}



        </>
    )
}

export default BetDetails
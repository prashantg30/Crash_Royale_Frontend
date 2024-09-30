import React, { useEffect, useState } from "react";
import { socket } from "../utils/socket/socketService";
import BetDetails from "./betDetailsPanel/BetDetails";
import GamePlayDetails from "./gamePlayDetails/GamePlayDetails";
import { svgIcon } from "../utils/StaticData";
import { useLocation } from "react-router-dom";
import Loader from "./loader/Loader";
const Home = () => {
  const location = useLocation();
  const [planeData, setPlaneData] = useState("");
  const [amount, setAmount] = useState("1");
  const [info, setInfo] = useState({});
  const [socketConnected, setSocketConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [maxOdds, setMaxOdds] = useState([]);
  const [playerCount, setPlayerCount] = useState([]);
  const rawQuery = location.search.substring(1);
  const decodedQuery = decodeURIComponent(rawQuery);
  let queryParams = {};
  try {
    queryParams = JSON.parse(
      '{"' + decodedQuery.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  } catch (e) {
    queryParams = {};
  }
  const [showPopup, setShowPopup] = useState(false);



  useEffect(() => {
    socket.on("connect", () => {
      setSocketConnected(true);
    });

    socket.on("disconnect", () => {
      setSocketConnected(false);
    });

    socket.on("info", (data) => {
      setInfo(data);
      setLoading(false);
    });

    socket.on("plane", (data) => {
      setPlaneData(data);
    });
    socket.on("playerCount", (data) => {
      setPlayerCount(data);
    });
    socket.on("maxOdds", (data) => {
      try {
        setMaxOdds(data);
      } catch (err) { }
    });

    return () => {
      if (socket && socket.connected) {
        socket.off("dissconnect");
      }
      // socket.off("plane")
      // socket.off("maxOdds")
      // socket.off("plane");
      // socket.off("info");
    };
  }, []);
  useEffect(() => {
    if (Object.keys(info).length === 0) {
      let userInfo = `PL:INFO:${queryParams?.id}:${queryParams?.game_id}`;
      socket.emit("message", userInfo);
      socket.emit("message", "MXO");
    }
  }, []);


  if (loading || !socketConnected) {
    return <Loader />;
  }

  if (Object.keys(info)?.length === 0 && !loading) {
    return (
      <div className="overlay-1">
        <div className="modal-socket">
          <div className="">
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {svgIcon.socketIcon}
            </div>
            <div className="">
              <p className="please-check">Please Login Through Valid Source</p>
              <span className="please-para">User does not exist</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <>
          <BetDetails
            planeData={planeData}
            info={info}
            amount={amount}
            queryParams={queryParams}
            setAmount={setAmount}
          />
          <GamePlayDetails
            planeData={planeData}
            info={info}
            amount={amount}
            maxOdds={maxOdds}
            setAmount={setAmount}
            playerCount={playerCount}
          />
        </>
      </div>
    </>
  );
};

export default Home;
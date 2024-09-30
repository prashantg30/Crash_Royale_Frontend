import React, { useEffect, useState, useRef } from "react";
import "../gamePlayDetails/gamePlayDetails.css";
import Animation from "../animation/Animation";
import RoundHistory from "./roundhistory/RoundHistory";
import MultiplierValues from "./gameDetails/MultiplierValues";
import { headerMenuData, svgIcon } from "../../utils/StaticData";
import MultiplierHistory from "../modal/MultiplierHistory";
import HamburgerMenuModal from "./hamMenu/HamburgerMenuModal";
import FairnessModel from "./hamMenu/FairnessModel";
import bg_music from "../../sounds/bg_music.mp3";

const GamePlayDetails = ({ planeData, info, amount, maxOdds, playerCount }) => {
  const parsedBetData = planeData?.length > 0 ? planeData.split(":") : null;
  const planeStatus = parsedBetData?.length > 0 ? parsedBetData[2] : 0;
  const planeMutiplier = parsedBetData?.length > 0 ? parsedBetData[1] : 0;
  const endDelay = parsedBetData?.length > 0 ? parsedBetData[1] : 0;

  const [openRoundModal, setOpenRoundModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [howtoPlayModal, setHowToPlayModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false); // Initially set sound to off
  const audioRef = useRef(new Audio(bg_music)); // Use useRef for the audio element

  useEffect(() => {
    // Set audio to loop for continuous play
    audioRef.current.loop = true;

    const intervalID = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalID);
      audioRef.current.pause(); // Stop music when the component unmounts
    };
  }, []);

  const handleSoundToggle = () => {
    setIsSoundOn((prev) => !prev); // Toggle sound state

    if (!isSoundOn) {
      // Play audio if sound is being turned on
      audioRef.current
        .play()
        .then(() => {
          console.log("Audio playing");
        })
        .catch((error) => {
          console.log("Error playing audio:", error);
        });
    } else {
      // Pause audio if sound is being turned off
      audioRef.current.pause();
    }
  };

  const handleRoundHistory = () => {
    setOpenRoundModal(true);
  };

  const handelClose = (i) => {
    setMenuOpen(false);
    if (i === 0) {
      setMenuOpen(false);
    }
    if (i === 3) {
      setIsModalOpen(!isModalOpen);
      setHowToPlayModal(false);
    }
    if (i === 4) {
      setHowToPlayModal(true);
    }
  };

  return (
    <>
      <div className={`show-bet-graph-container`}>
        <div className="bet-info-container">
          <div className="bet-graph-head">
            <div className="user-amount">
              <p
                className="text"
                style={{
                  color: "#a39eb4",
                  fontWeight: "700",
                  cursor: "default",
                }}
              >
                {svgIcon.balanceIcon} {info?.balance ? info?.balance : 0}
              </p>
            </div>

            <div className="logo-name-section" style={{ cursor: "default" }}>
              <p>{svgIcon.AdminLogo}</p>
              <p>{info?.name}</p>
            </div>
            <div className="timer-container" style={{ cursor: "default" }}>
              <p>{svgIcon.timer}</p>
              <p className="text" style={{ fontSize: "13px" }}>
                {time}
              </p>
            </div>
          </div>
          <div className="header-value" style={{ position: "relative" }}>
            <div className="round-histoy">
              <RoundHistory maxOdds={maxOdds} planeStatus={planeStatus} />
            </div>

            <div className="menu-container">
              <div className="menu-box" onClick={handleRoundHistory}>
                {svgIcon.history}
              </div>
              <div className="menu-box" onClick={() => setMenuOpen(!menuOpen)}>
                {svgIcon.menu}
              </div>

              {menuOpen && (
                <div className="header-menu">
                  {headerMenuData(isSoundOn)?.map((el, i) => (
                    <div
                      className="header-menu-box"
                      key={i}
                      onClick={() => {
                        if (i === 2) {
                          handleSoundToggle(); // Handle sound toggle on sound icon click
                        }
                        handelClose(i);
                      }}
                    >
                      {el?.icon}
                    </div>
                  ))}
                </div>
              )}
              {openRoundModal && (
                <MultiplierHistory
                  maxOdds={maxOdds}
                  setOpenRoundModal={setOpenRoundModal}
                  info={info}
                />
              )}
              {howtoPlayModal && (
                <HamburgerMenuModal
                  setHowToPlayModal={setHowToPlayModal}
                  howtoPlayModal={howtoPlayModal}
                  setIsModalOpen={setIsModalOpen}
                />
              )}

              {isModalOpen && (
                <FairnessModel
                  setIsModalOpen={setIsModalOpen}
                  setHowToPlayModal={setHowToPlayModal}
                  maxOdds={maxOdds}
                  planeStatus={planeStatus}
                />
              )}
            </div>
          </div>

          <div className="image-container">
            <div className="img-box">
              <img src={svgIcon.image} alt="" />
            </div>
            <div className="user-amount">
              {svgIcon.user}{" "}
              <p
                style={{
                  color: "rgb(213, 210, 223)",
                  fontWeight: "700",
                  cursor: "default",
                }}
              >
                {playerCount}
              </p>
            </div>
            <div className="user-amount" style={{ cursor: "default" }}>
              {svgIcon.doller} <p>{+amount ? +amount : 0}</p>
            </div>
          </div>
          <MultiplierValues
            endDelay={endDelay}
            planeStatus={planeStatus}
            planeMutiplier={planeMutiplier}
          />
        </div>
        <div className="animation-container">
          <Animation planeStatus={planeStatus} />
        </div>
      </div>
    </>
  );
};

export default GamePlayDetails;

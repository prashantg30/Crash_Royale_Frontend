import React, { useState } from 'react'
import { buttonLabels, svgIcon } from '../../../utils/StaticData';
import '../hamMenu/hammenu.css'
import '../hamMenu/howtoplay.css'
import HowToPlay from './HowToPlay';
import GameBoard from './GameBoard';
import GameTabs from './GameTabs';
import PlayerAction from './PlayerAction';
import GameMode from './GameMode';
import Optimal from './Optimal';

const HamburgerMenuModal = ({ setHowToPlayModal, howtoPlayModal }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setHowToPlayModal(false)
    }
  };

  const handleHowToPlayClick = (i) => {
    setOpenModal(i)
  };

  const renderModalContent = () => {
    switch (openModal) {
      case 0:
        return <HowToPlay setHowPlay={setOpenModal} howPlay={openModal} />;
      case 1:
        return <GameBoard setGameBoard={setOpenModal} gameBoard={openModal} />;

      case 2:
        return <GameTabs setGameBoard={setOpenModal} gameBoard={openModal} />;

      case 3:
        return <PlayerAction setGameBoard={setOpenModal} gameBoard={openModal} />;

      case 4:
        return <GameMode setGameBoard={setOpenModal} gameBoard={openModal} />;

      case 5:
        return <Optimal setGameBoard={setOpenModal} gameBoard={openModal} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className='overlay' onClick={handleOverlayClick}>
        <div className="modal modal-2">
          <div className="modal-header">
            <div className="cross-icon-container-1">
              <div className='info-icon'>
                <div className='info-icon-wrapper'>
                  <p style={{ cursor: "pointer" }}>{svgIcon.infoIcon}</p>
                  {/* <p>{svgIcon.hoverInfo}</p> */}
                </div>
                <p>Information Modal</p>
              </div>
              <div className="cross-icon1" onClick={() => setHowToPlayModal(false)}>
                {svgIcon.closeIconwhite}
              </div>
            </div>

          </div>

          <div className="play-section">
            <p>Please go in each and every section to get ready for playing</p>
            <div className='' style={{ marginTop: "1rem" }}>
              {buttonLabels.map((label, index) => (
                <div className='button-style' key={index} onClick={() => handleHowToPlayClick(index)}>

                  {label} <span className="icon-right">{svgIcon.rightIcon}</span>

                </div>
              ))}
            </div>
            <div className='version'>
              <p>RNG Version: 1.0.0</p>
              <p>Game Version: 1.8.5</p>
              <p>Max RTP: 99%</p>
            </div>
          </div>




        </div>
      </div>
      {openModal !== null && (
        <>
          {renderModalContent()}
        </>



      )}
    </>
  )
}

export default HamburgerMenuModal



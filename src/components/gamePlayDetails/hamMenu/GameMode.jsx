import React, { useState } from 'react';
import { gameModeData, svgIcon } from '../../../utils/StaticData';
import Classic from './Classic';
import OverUnder from './OverUnder';
import Range from './Range';


const GameMode = ({ setGameBoard, howPlay }) => {
    const [openModal, setOpenModal] = useState(null);

    const handleHowToPlayClick = (i) => {
        setOpenModal(i);
    };

    const renderModalContent = () => {
        switch (openModal) {
            case 0:
                return <Classic setHowPlay={setOpenModal} howPlay={openModal} />;
            case 1:
                return <OverUnder setHowPlay={setOpenModal} gameBoard={openModal} />;
            case 2:
                return <Range setHowPlay={setOpenModal} gameBoard={openModal} />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className='overlay'>
                <div className='modal modal-2'>
                    <div className="modal-header">
                        <div className="cross-icon-container-1">
                            <div className='info-icon'>
                                <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setGameBoard(false)}
                                >
                                    {svgIcon.backIcon}
                                </div>
                                <p>Game Mode</p>
                            </div>
                            <div onClick={() => setGameBoard(false)}>
                                {svgIcon.closeIconwhite}
                            </div>
                        </div>
                    </div>

                    <div className="play-section">
                        <p>Please go in each and every section to get ready for playing</p>
                        {gameModeData.map((label, index) => (
                            <div
                                className='button-style'
                                key={index}
                                onClick={() => handleHowToPlayClick(index)}
                            >
                                {label} <span className="icon-right">{svgIcon.rightIcon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {openModal !== null && (
                <>
                    {renderModalContent()}
                </>
            )}
        </>
    );
};

export default GameMode;

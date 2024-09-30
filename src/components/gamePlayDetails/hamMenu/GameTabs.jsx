import React from 'react';
import { svgIcon } from '../../../utils/StaticData';
import '../hamMenu/howtoplay.css'

const GameTabs = ({ setGameBoard }) => {
    const data = [
        {
            name: "Alex",
            odds: "-",
            Mode: "Classic",
            bet: 20
        },
        {
            name: "Luna",
            odds: "-",
            Mode: "Classic",
            bet: 35
        },
        {
            name: "Jerick",
            odds: "-",
            Mode: "Classic",
            bet: 50
        },
        {
            name: "Lili 1985",
            odds: "-",
            Mode: "Over",
            bet: 10
        },
        {
            name: "Jack spoke",
            odds: "-",
            Mode: "Range",
            bet: 25
        },
        {
            name: "Jorden",
            odds: "-",
            Mode: "Classic",
            bet: 20
        },
        {
            name: "Pew Pew",
            odds: "-",
            Mode: "Classic",
            bet: 10
        },
        {
            name: "Khaled",
            odds: "-",
            Mode: "Classic",
            bet: "1k"
        },

        {
            name: "Young Dollar",
            odds: "-",
            Mode: "Under",
            bet: 25
        },
        {
            name: "Looper",
            odds: "-",
            Mode: "Under",
            bet: 15
        },
    ];

    return (
        <div className='overlay'>
            <div className='modal modal-2'>
                <div className="modal-header">
                    <div className="cross-icon-container-1">
                        <div className='info-icon'>
                            <div className="" style={{ cursor: 'pointer' }} onClick={() => setGameBoard(false)}>
                                {svgIcon.backIcon}
                            </div>
                            <p>Game Tabs</p>
                        </div>
                        <div className="cross-icon1" onClick={() => setGameBoard(false)}>
                            {svgIcon.closeIconwhite}
                        </div>
                    </div>
                </div>
                <div className="modal-content1">
                    <p className='gameboard-para'>Playing</p>
                    <div className='table-info-game'>
                        <table >
                            <thead>
                                <tr>
                                    <th style={{ fontSize: "12px", fontWeight: "600", color: "#837c9c", padding: "7px" }}>Name</th>
                                    <th style={{ fontSize: "12px", fontWeight: "600", color: "#837c9c" }}>Odds</th>
                                    <th style={{ fontSize: "12px", fontWeight: "600", color: "#837c9c" }}>Mode</th>
                                    <th style={{ fontSize: "12px", fontWeight: "600", color: "#837c9c", textAlign: "left" }}>Bet / win</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ textAlign: "left" }}>{item.name}</td>
                                        <td>{item.odds}</td>
                                        <td>{item.Mode}</td>
                                        <td>

                                            {item.bet}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> <br /> <br />

                    <p className='howtoplay-para'>This tab shows a list of current active players and their bets</p>  <br />

                    <p className='gameboard-para'>Chat</p> <br />

                    <div className="howtoplay-img-container">
                        <img src={svgIcon.chat} alt="" />
                    </div> <br /> <br />

                    <p className="howtoplay-para">Active players can chat with each other in this tab.</p> <br />

                </div>
            </div>
        </div>
    );
}

export default GameTabs;

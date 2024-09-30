import React from 'react'
import { svgIcon } from '../../../utils/StaticData'

const PlayerAction = ({ setGameBoard }) => {
    return (
        <div className='overlay'>
            <div className='modal modal-2'>
                <div className="modal-header">
                    <div className="cross-icon-container-1">
                        <div className='info-icon'>

                            <div className="" style={{ cursor: "pointer" }} onClick={() => setGameBoard(false)}>
                                {svgIcon.backIcon}
                            </div>
                            <p>Player Actions</p>
                        </div>
                        <div className="cross-icon1" onClick={() => setGameBoard(false)}>
                            {svgIcon.closeIconwhite}
                        </div>
                    </div>
                </div>
                <div className="modal-content1">
                    <div className='bet-section'>
                        <p className='gameboard-para'>Place Bet Button</p>
                        <br />
                        <div className='howtoplay-para'>
                            <p>Handles any actions related to player bets. It has multiple states:</p>
                            <p>Place Bet</p>
                            <p>Place Bet (Next Round)</p>
                            <p>Cancel</p>
                            <p>Cashout - (Only in Classic Mode)</p>
                        </div>
                    </div>
                    <div className='' style={{ width: "100%", paddingLeft: "1rem", paddingRight: "1rem", marginTop: "20px" }}>
                        <button className='bets-btn'>Place Bet (Next Round)</button>
                        <button className='bets-btn'>Place Bet [1.24x]</button>
                        <button className='bets-btn'>Place Bet</button>
                        <button className='bets-btn-orange'>Cancel Bet</button>
                        <button className='bets-btn-green'>Cashout 1,000</button>
                    </div>

                    <div className='gameboard-para' style={{ marginTop: "3rem" }}>
                        <p style={{fontWeight:"700"}}>Bet Max Amount</p>
                        <br />

                        <div className="info_crash_max">
                            <button className="btn color-orange text">Min</button>
                            <button className="btn color-orange text">1/2</button>
                            <div className="show-wrap">
                                <button className="btn btn-calc">-</button>
                            </div>
                            <div className="amount">
                                <p className="input">1</p>
                            </div>
                            <div className="show-wrap">
                                <button className="btn btn-calc" >+</button>
                            </div>
                            <button className="btn color-orange text">2x</button>
                            <button className="btn color-orange text circle-show">Max</button>
                        </div>

                        <br />
                        <br />
                    </div>
                    <p className='howtoplay-para'>Takes the player’s current balance or up to 1,000 and uses it as the bet amount.</p> <br /> <br />

                    <div className='gameboard-para'>
                        <p>2x</p>
                        <br />
                        <div className="info_crash_max">
                            <button className="btn color-orange text">Min</button>
                            <button className="btn color-orange text">1/2</button>
                            <div className="show-wrap">
                                <button className="btn btn-calc">-</button>
                            </div>
                            <div className="amount">
                                <p className="input">1</p>
                            </div>
                            <div className="show-wrap">
                                <button className="btn btn-calc" >+</button>
                            </div>
                            <button className="btn color-orange text circle-show">2x</button>
                            <button className="btn color-orange text">Max</button>
                        </div>

                        <br />
                        <br />
                    </div>
                    <p className='howtoplay-para'>Takes the current bet amount and doubles it.</p> <br /> <br />


                    <div className='gameboard-para'>
                        <p>1/2</p>
                        <br />
                        <br />
                        <div className="info_crash_max">
                            <button className="btn color-orange text">Min</button>
                            <button className="btn color-orange text circle-show">1/2</button>
                            <div className="show-wrap">
                                <button className="btn btn-calc">-</button>
                            </div>
                            <div className="amount">
                                <p className="input">1</p>
                            </div>
                            <div className="show-wrap">
                                <button className="btn btn-calc" >+</button>
                            </div>
                            <button className="btn color-orange text">2x</button>
                            <button className="btn color-orange text">Max</button>
                        </div>

                        <br />
                        <br />
                    </div>
                    <p className='howtoplay-para'>Takes the current bet amount and divides it by half.</p> <br />


                    <div className='gameboard-para'>
                        <p>Min</p>
                        <br />
                        <div className="info_crash_max">
                            <button className="btn color-orange text circle-show">Min</button>
                            <button className="btn color-orange text">1/2</button>
                            <div className="show-wrap">
                                <button className="btn btn-calc">-</button>
                            </div>
                            <div className="amount">
                                <p className="input">1</p>
                            </div>
                            <div className="show-wrap">
                                <button className="btn btn-calc" >+</button>
                            </div>
                            <button className="btn color-orange text">2x</button>
                            <button className="btn color-orange text">Max</button>
                        </div>

                        <br />
                        <br />
                    </div>
                    <p className='howtoplay-para'>The player places the minimum determined amount as the bet.</p> <br /> <br />

                    <div className='gameboard-para'>
                        <p>Plus and Minus</p>
                        <br />
                        <div className="info_crash_max">
                            <button className="btn color-orange text">Min</button>
                            <button className="btn color-orange text">1/2</button>
                            <div className="show-wrap">
                                <button className="btn btn-calc circle-show">-</button>
                            </div>
                            <div className="amount">
                                <p className="input">1</p>
                            </div>
                            <div className="show-wrap">
                                <button className="btn btn-calc circle-show" >+</button>
                            </div>
                            <button className="btn color-orange text">2x</button>
                            <button className="btn color-orange text">Max</button>
                        </div>

                        <br />
                        <br />
                    </div>
                    <p className='howtoplay-para'>These buttons adjust the bet amount by 1, increasing or decreasing it accordingly.</p> <br /> <br />


                    <div className='gameboard-para'>
                        <p>Insurance</p> <br />
                        <div className="howtoplay-img-container2">
                            <img src={svgIcon.insurance} alt="" />
                        </div> <br /> <br />
                    </div>
                    <p className='howtoplay-para'>Provides cashback against an immediate crash to 0. If the crash point is not 0x, 10% of the player's bet amount is deducted for insurance on winning and cashed back bets. For winning bets, the deduction is calculated based on the player's bet amount multiplied by the winning multiplier.</p> <br /> <br />

                    <div className='gameboard-para'>
                        <p>Chips</p> <br />
                        <div className="howtoplay-img-container2">
                            <img src={svgIcon.chips} alt="" />
                        </div> <br />
                    </div>
                    <p className='howtoplay-para'>In this section of the game, there are chips. By clicking on each chip, you can place that amount as a bet.</p> <br />
                </div>
            </div>
        </div>
    )
}

export default PlayerAction

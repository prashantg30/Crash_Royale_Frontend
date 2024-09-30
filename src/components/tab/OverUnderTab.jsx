import React from 'react'
import { svgIcon } from '../../utils/StaticData'
const OverUnderTab = () => {
    return (
        <div className='scrollable-content'>
            <p className='howtoplay-para'>There are two buttons in this mode, Over and Under. Players first define a Crash Point number and predict if the Multiplier will be over or under that value. </p> <br /> <br />
            <div className="howtoplay-img-container3">
                <img src={svgIcon.over} alt="" />
            </div> <br /> <br />

            <p className="howtoplay-para">Players make their prediction by clicking the "Over" or "Under" button, indicating whether they believe the Multiplier will exceed or fall below their selected crash point.</p> <br />
            <p className="howtoplay-para">The potential payout multiplier depends on the crash point the player selects. Adjusting the crash point multiplier via the crash point input area will update the winning multipliers displayed on the Over and Under options. Opting for a higher risk by choosing Over for the higher crash point, or choosing Under for the lower crash points increases the potential payout.</p>
            <p className='howtoplay-para'>If the player wins, they will receive their win amount, calculated by multiplying their bet amount by the displayed winning odds on the button.</p> <br />

            <p className="howtoplay-para">The minimum Odds a player can define is 1.02 and the maximum is 24.</p> <br />

            <div className="over-under-btn">
                <button>Over(1.2x)</button>
                <button className='under-btn'>Under(2.0x)</button>
            </div>
        </div>
    )
}

export default OverUnderTab

import React from 'react'
import { svgIcon } from '../../utils/StaticData'
const RangeTab = () => {
    return (
        <div className='scrollable-content'>
            <div className='howtoplay-para'>
                <p>For range, players define two values: ‘From’ and ‘To’. The former value represents the starting range, the latter represents the ending range.</p>
                In range, the minimum value a player can define for both Crash Points is 1.01 and the maximum is 24.<br />
                The maximum Winning Multiplier for Range mode is 36x
                <div className='howtoplay-img-container' style={{ marginTop: "3rem" }}>
                    <img src={svgIcon.rangeImage} alt="" />
                </div>
                <div className='' style={{ marginTop: "3rem" }}>
                    <p>The potential payout multiplier depends on the Min and Max crash points the player select. Adjusting the Min and Max via the Min and Max crash point inputs will update the winning multipliers displayed on the Place Bet button. Opting for a higher risk by choosing a smaller range increases the potential payout.If the player wins, they will receive their win amount, calculated by multiplying their bet amount by the displayed winning odds on the button.</p>
                </div>
                <div className=''>
                    <button className='bets-btn-1'>Place Bet [1.24x]</button>
                </div>
            </div>

        </div>
    )
}

export default RangeTab

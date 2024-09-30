import React from 'react'
import './tab.css'
import '../gamePlayDetails/hamMenu/howtoplay.css'
import { svgIcon } from '../../utils/StaticData'

const ClassicTab = () => {
    return (
        <div className='scrollable-content'>
            <p className='howtoplay-para'>As the round progresses in classic mode, the bet amount will be multiplied based on the Multiplier value: </p>
            <p className='howtoplay-para'>(Bet Amount * Multiplier).</p>
            <p className='howtoplay-para'>Players are free to either manually or automatically cashout.</p> <br /> <br />

            <h2 className='gameboard-para'>Manual Cashout</h2> <br />
            <p className='howtoplay-para'>
                Once the round starts in classic mode, the <span className='highlight-text'>Cashout button</span> will be available for players to manually cashout if they wish to do so. The cashout button displays the current win amount and players can use it to collect their winnings.
            </p>
            <br />
            <button className='bets-btn-green'>Cashout 1,000</button>
            <br />
            <br />
            <br />
            <h2 className='gameboard-para'>Auto Cashout</h2> <br />

            <p className='howtoplay-para'>The "ON" or "OFF"&nbsp; button in the bet panel determines whether auto cashout is enabled. Players can click this button and start defining the crash point value, the number you think the Multiplier will reach. <br />
                Once the round starts, if Multiplier reaches the defined Crash Point value, the bet winnings are automatically cashed out to the player and added to their balance. <br /> <br />For Manual Cashout, it is imperative for players to actively press the Cashout button
                before the round ends to secure their earnings. If the Auto Cashout is OFF and players fail to cash out manually,
                they will forfeit any potential winnings even if the multiplier goes beyond their selected Crash Point. Conversely,
                if Auto Cashout is ON, the system will automatically cash out when the multiplier reaches the predetermined Crash Point value set by the player.<br /><br />
                Despite having auto cashout enabled, players retain the option to manually cash out. This means that even if the multiplier fails to reach the predetermined Crash Point, players can still secure their winnings by clicking the cashout button.
            </p>
            <br />
            <br />
            <p className='gameboard-para'>Note:</p>
            <br />

            <p className='howtoplay-para'>Please be aware that the crash game is an instant game where manual cash-out is an option. However, network interruptions, such as slow connections, switching between WiFi and mobile data, using or changing VPN status, or any other network-related issues, can hinder the ability to cash out on time or cause unexpected game behavior. To safeguard your bet in case of these issues, it is advisable to enable the AutoCashout feature.</p>

            <div className='howtoplay-img-container3'>
                <img src={svgIcon.underImage} alt="" />
            </div>
            <br />
            <p className='howtoplay-para'>If the Multiplier crashes below Crash Point, the player loses and nothing is returned to their balance.</p>
            <br />
            <p className='howtoplay-para'>While Auto Cashout is enabled, players can still manually cash out with the Cashout button.</p>
            <br />
            <p className='howtoplay-para'>In Classic, the maximum Crash Point a player can define is 999.99 and the minimum is 1.01.</p>
            <br/>
            <br/>
            <div className='howtoplay-img-container3'>
                <img src={svgIcon.autocat} alt="" />
            </div>
        </div>
    )
}

export default ClassicTab

import React from 'react'
import '../hamMenu/howtoplay.css'
import { svgIcon } from '../../../utils/StaticData'
const HowToPlay = ({ setHowPlay, howPlay }) => {
  return (
    <div className='overlay'>
      <div className='modal modal-2'>
        <div className="modal-header">
          <div className="cross-icon-container-1">
            <div className='info-icon'>

              <div className="" style={{ cursor: 'pointer' }} onClick={() => setHowPlay(false)}>
                {svgIcon.backIcon}
              </div>
              <p>How To Play</p>
            </div>
            <div className="cross-icon1" onClick={() => setHowPlay(false)}>
              {svgIcon.closeIconwhite}
            </div>
          </div>

        </div>
        <div className="modal-content1">
          <div className="howtoplay-img-container">
            <img src={svgIcon.imageGame} alt="" />
          </div> <br /> <br />
          <div>
            <p className='howtoplay-para'>Crash Royale is a guessing game based on random numbers.</p> <br /> <br />
            <p className='howtoplay-para'>This game consists of unlimited rounds for players to progress through.</p> <br /> <br />
            <p className='howtoplay-para'>The game board consists of a line graph that represents how the Multiplier rises over the course of the round.</p> <br /> <br />
            <p className='howtoplay-para'>Play the game by placing bets and predicting when the  <span>Multiplier</span> value will crash, also known as the crash point.</p> <br /> <br />
            <p className='howtoplay-para'>The game makes use of  <span>Random Number Generators (RNG)</span>  to calculate the <strong>Multiplier’s</strong>  crash point.</p> <br /> <br />
            <p className='howtoplay-para'>When a player wins a round, their bet winnings are added to their balance.</p> <br /> <br />

            <h2 className='howtoplay-h2'>General Rules:</h2> <br /> <br />
            <p className='howtoplay-para'>Players should be over<span> 18 years old</span>  to participate.</p> <br /> <br />
            <p className='howtoplay-para'>The minimum bet amount is <span>1.</span></p> <br /> <br />
            <p className='howtoplay-para'>The <span>countdown</span> will run for <span>7 seconds.</span></p> <br /> <br />
            <p className='howtoplay-para'>Bets are closed <span>1 seconds</span> before the round starts.</p>  <br /> <br />
            <p className='howtoplay-para'><span>1,000</span> is the maximum amount per bet</p> <br /> <br />
            <p className='howtoplay-para'>In the event of <span>malfunction</span>  of the game’s hardware/software, all affected bets and payouts are rendered void and all affected <span>bets refunded</span></p> <br /> <br />

            <p className='howtoplay-para-bold'>Possible Scenarios</p> <br /> <br />

            <p className='howtoplay-para-bold'>Win</p> <br />

            <p className='howtoplay-para'>When placing a bet in the game, players have the opportunity to win. The winnings can vary based on different game modes and their corresponding payout structures.</p> <br /> <br />
            <p className='howtoplay-para'>If players have insurance enabled, it's important to note that 10% will be deducted from their bet winnings and the remaining amount will be returned to their balance.</p> <br /> <br />

            <p className='howtoplay-para-bold'>Loss</p> <br />
            <p className='howtoplay-para'>In this scenario, no winnings are awarded, and the player's bet is not refunded.</p> <br /> <br />

            <p className='howtoplay-para-bold'>Cashback</p> <br />
            <p className='howtoplay-para'>In some cases, players may receive their initial bet amount back as cashback. This typically occurs if the multiplier crashes at the exact point specified by the player, resulting in the player receiving their bet amount as a consolation prize. This applies to all game modes.</p> <br /> <br />

            <p className='howtoplay-para-bold'>Canceled</p> <br />
            <p className='howtoplay-para'>
              Players also have the option to cancel their bet before bets are closed. In such cases, the player's initial bet amount will be returned to their balance.</p> <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToPlay
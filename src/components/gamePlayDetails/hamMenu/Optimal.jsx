import React from 'react'
import { svgIcon } from '../../../utils/StaticData'

const Optimal = ({ setGameBoard }) => {
    return (
        <div className='overlay'>
            <div className='modal modal-2'>
                <div className="modal-header">
                    <div className="cross-icon-container-1">
                        <div className='info-icon'>

                            <div className="" style={{ cursor: "pointer" }} onClick={() => setGameBoard(false)}>
                                {svgIcon.backIcon}
                            </div>
                            <p>Optimal Strategy RTP</p>
                        </div>
                        <div className="cross-icon1" onClick={() => setGameBoard(false)}>
                            {svgIcon.closeIconwhite}
                        </div>
                    </div>

                </div>
                <div className="modal-content1">

                    <p className='howtoplay-para'>The optimal strategy RTP for Crash Royale is calculated based on the average expected return to the player when employing the optimal strategy. The RTP value may vary based on individual player decisions and gameplay. However, by following the optimal strategy, players can maximize their chances of achieving the highest RTP possible.</p>  <br />

                    <p className='howtoplay-h2'>Guidance on Optimal Strategy</p> <br />
                    <p className="howtoplay-para">To improve your chances of maximizing your winnings in the game, we recommend following these guidelines:</p> <br />

                    <p className='howtoplay-h2'>Evaluate Multiplier Trends</p>
                    <p className='howtoplay-para'>Observe the multiplier trends displayed on the screen before placing your bet. Understanding the historical behavior of multipliers can help you make informed decisions regarding when to cash out.</p> <br />

                    <p className="howtoplay-h2">Assess Risk and Reward</p>
                    <p className='howtoplay-para'>Consider the risk and potential reward associated with each bet. Higher multipliers offer greater potential winnings but also carry a higher risk of crashing. Analyze the multiplier's progression and make calculated decisions accordingly.</p> <br />

                    <p className='howtoplay-h2'>Set a Cashing Out Strategy</p>
                    <p className="howtoplay-para">Define a cashing out strategy that aligns with your risk tolerance and objectives. Some players prefer to cash out early to secure smaller, consistent profits, while others may take calculated risks by riding the wave and cashing out at higher multipliers.</p> <br />

                    <p className="howtoplay-h2">Selecting Small Multipliers for Lower Risk</p>
                    <p className="howtoplay-para">In Crash Royale , choosing smaller multipliers can help lower your risk. As the multiplier increases, the probability of the game crashing on higher numbers also increases. If you prefer a more conservative approach with less risk, consider cashing out at smaller multipliers. While this strategy may yield smaller winnings, it provides a higher likelihood of preserving your initial bet.</p> <br />

                    <p className="howtoplay-h2">Avoid Chasing Losses</p>
                    <p className="howtoplay-para">If you encounter a loss, resist the urge to chase it by placing larger bets. Emotion-driven decisions can lead to further losses. Instead, remain disciplined and stick to your predetermined strategy.</p> <br />

                    <p className="howtoplay-para">To ensure transparency and fairness, players should be aware that pursuing higher multipliers may result in a decreased RTP, with the range potentially starting at 0%.</p> <br />
                    <p className="howtoplay-para">Please note that while following the optimal strategy can improve your chances of favorable outcomes, Crash Royale ultimately involves an element of chance. The game's outcome relies on random factors, and no strategy can guarantee consistent winnings.</p> <br />
                </div>
            </div>
        </div>
    )
}

export default Optimal

import React from 'react'
import { svgIcon } from '../../../utils/StaticData'
import Tab from '../../tab/Tab'

const Classic = ({ setHowPlay,howPlay }) => {
    return (
        <div className='overlay'>
            <div className='modal modal-2'>
                <div className="modal-header">
                    <div className="cross-icon-container-1">
                        <div className='info-icon'>

                            <div className="" style={{ cursor: "pointer" }} onClick={() => setHowPlay(false)}>
                                {svgIcon.backIcon}
                            </div>
                            <p>Classic</p>
                        </div>
                        <div className="" onClick={() => setHowPlay(false)}>
                            {svgIcon.closeIconwhite}
                        </div>
                    </div>
                </div>
                <div className='' style={{marginTop:"0.8rem"}}>
                    <Tab howPlay={howPlay} />
                </div>
            </div>
        </div>

    )
}

export default Classic

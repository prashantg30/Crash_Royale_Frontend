import React from 'react'
import { svgIcon } from '../../../utils/StaticData'

const OverUnder = ({ setHowPlay }) => {
    return (
        <div className='overlay'>
            <div className='modal modal-2'>
                <div className="modal-header">
                    <div className="cross-icon-container-1">
                        <div className='info-icon'>

                            <div className="" style={{ cursor: "pointer" }} onClick={() => setHowPlay(false)}>
                                {svgIcon.backIcon}
                            </div>
                            <p>Over/Under</p>
                        </div>
                        <div className="" onClick={() => setHowPlay(false)}>
                            {svgIcon.closeIconwhite}
                        </div>
                    </div>
                </div>
                <div className="modal-content1">
                </div>
            </div>
        </div>
    )
}

export default OverUnder

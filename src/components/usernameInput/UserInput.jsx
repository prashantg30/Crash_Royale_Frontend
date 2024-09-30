import React, { useState } from 'react'
import useSocket from '../../utils/socket/socketService';

const UserInput = () => {

    const [showModal, setShowModal] = useState(true); // State to control modal visibility
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
      
        setShowModal(false);
    };

  return (
  <div className="">
      {showModal && (
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter Value:
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )}
  </div>

  )
}

export default UserInput
import React, { useEffect, useRef, useState } from 'react';
import '../player/player.css';
import { svgIcon } from '../../../utils/StaticData';
import { socket } from '../../../utils/socket/socketService';

const ChatBox = ({ info }) => {
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [charCount, setCharCount] = useState(160);
  const [totalCount, setTotalCount] = useState({});
  const chatListRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    socket.emit("message", `CHAT:${info.id}:${info.operator_id}`);

    socket.on("chat", (data) => {
      setChatData(data?.chatData || []);
      scrollToBottom();
    });

    socket.on("totalUserChat", (data) => {
      setTotalCount(data);
    });

    return () => {
      socket.off('chat');
      socket.off('totalUserChat');
    };
  }, [info.id, info.operator_id]);

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      socket.emit("message", `CHAT:${info.id}:${info.operator_id}:${newMessage}`);
      setChatData((prevChatData) => [...prevChatData, { user_id: info.id, msg: newMessage }]);
      setNewMessage('');
      setCharCount(160);
      scrollToBottom();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e) => {
    const message = e.target.value;
    if (message.length <= 160) {
      setNewMessage(message);
      setCharCount(160 - message.length);
    }
  };

  const scrollToBottom = () => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <p className='player-online'>Players Online: {totalCount?.totaleUser}</p>
      </div>
      <div className="chat-list-content" ref={chatListRef}>
        {chatData.length > 0 ? (
          chatData.map((el, i) => (
            <div key={i} className={`list-chat ${el.user_id === info.id ? 'my-chat' : 'other-chat'}`}>
              {el.user_id !== info.id && <p className="chat-user-id">{el.user_id.slice(0, 5)}</p>}
              <p>{el.msg !== 'null' ? el.msg : ''}</p>
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
      </div>
      <div className="chat-send">
        <form onSubmit={handleSubmit}>
          <div className="chat-input">
            <input
              type="text"
              value={newMessage}
              onKeyDown={handleKeyDown}
              onChange={handleInputChange}
              placeholder='Type here'
              ref={inputRef}
            />
            <button type='submit' className='send-btn' disabled={!newMessage.trim()}>
              {svgIcon.sendIcon}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;

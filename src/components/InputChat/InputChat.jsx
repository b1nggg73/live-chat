import React from 'react';
import './InputChat.scss';
import sendFile from '../../img/inputChat/sendFile.svg';
import microphone from '../../img/inputChat/microphone.svg';
import sendSmiles from '../../img/inputChat/sendSmiles.svg';

const InputChat = () => {
  return (
    <div className="input-chat">
      <div className="send-file">
        <img src={sendFile} alt="" />
      </div>
      <div className="microphone">
        <img src={microphone} alt="" />
      </div>
      <input className="main-input" type="text" placeholder="Message in #general" />
      <div className="send-smiles">
        <img src={sendSmiles} alt="" />
      </div>
    </div>
  );
};

export default InputChat;

import React from 'react';
import './InputChat.scss';
import sendFile from '../../img/inputChat/sendFile.svg';
import microphone from '../../img/inputChat/microphone.svg';
import sendSmiles from '../../img/inputChat/sendSmiles.svg';
import MainInput from './MainInput/MainInput';

const InputChat = ({ setPosts, posts }) => {
  return (
    <div className="input-chat">
      <div className="send-file">
        <img src={sendFile} alt="" />
      </div>
      <div className="microphone">
        <img src={microphone} alt="" />
      </div>
      <MainInput posts={posts} setPosts={setPosts} />
      <div className="send-smiles">
        <img src={sendSmiles} alt="" />
      </div>
    </div>
  );
};

export default InputChat;

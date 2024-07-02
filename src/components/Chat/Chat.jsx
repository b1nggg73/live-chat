import React from 'react';
import './Chat.scss';
import InputChat from '../InputChat/InputChat';
import InfoAboutChat from '../InfoAboutChat/InfoAboutChat';
import WrapperChat from '../WrapperChat/WrapperChat';

const Chat = () => {
  return (
    <div className="chat">
      <InfoAboutChat></InfoAboutChat>
      <WrapperChat></WrapperChat>
      <InputChat></InputChat>
    </div>
  );
};

export default Chat;

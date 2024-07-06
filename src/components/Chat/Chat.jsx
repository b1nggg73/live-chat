import React from 'react';
import './Chat.scss';
import InputChat from '../InputChat/InputChat';
import InfoAboutChat from '../InfoAboutChat/InfoAboutChat';
import WrapperChat from '../WrapperChat/WrapperChat';

const Chat = ({ posts, setPosts }) => {
  return (
    <div className="chat">
      <InfoAboutChat></InfoAboutChat>
      <WrapperChat posts={posts}></WrapperChat>
      <InputChat posts={posts} setPosts={setPosts}></InputChat>
    </div>
  );
};

export default Chat;

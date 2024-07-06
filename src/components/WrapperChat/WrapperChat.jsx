import React from 'react';
import './WrapperChat.scss';
import Posts from '../Posts/Posts';

const WrapperChat = ({ posts }) => {
  return (
    <div className="wrapper-chat">
      <Posts posts={posts} />
    </div>
  );
};

export default WrapperChat;

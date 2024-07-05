import React from 'react';
import btnFavorite from '../../img/infoAboutChat/btnFavorite.svg';
import usersCounts from '../../img/infoAboutChat/usersCounts.svg';
import notification from '../../img/infoAboutChat/notification.svg';
import setting from '../../img/infoAboutChat/setting.svg';
import './InfoAboutChat.scss';

const InfoAboutChat = () => {
  return (
    <div className="info-about-chat">
      <div className="info-about-chat-left">
        <div className="name-chat">#general</div>
        <div className="btn-favorite">
          <img src={btnFavorite} alt="" />
        </div>
      </div>
      <div className="info-about-chat-right">
        <div className="usersCounts">
          <img src={usersCounts} alt="" />
          <div className="numbersCounts">1,093</div>
        </div>
        <input className="searchMessages" type="text" placeholder="Search..." />
        <div className="notification">
          <img src={notification} alt="" />
        </div>
        <div className="setting">
          <img src={setting} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfoAboutChat;

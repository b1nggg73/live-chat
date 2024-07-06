import React from 'react';
import './Post.scss';
import profileUser from '../../img/wrapperChat/profile-user.png';

const Post = ({ message, dateHours, dateMinutes }) => {
  return (
    <div className="post">
      <div className="profile-user">
        <img src={profileUser} alt="" />
      </div>
      <div className="post-info">
        <div className="user-info">
          <div className="user-name">Unknown</div>
          <div className="dispatch-time">
            {dateHours}:{dateMinutes}
          </div>
        </div>
        <div className="post-message">{message}</div>
      </div>
    </div>
  );
};

export default Post;

import React from 'react';
import './Post.scss';
import profileUser from '../../img/wrapperChat/profile-user.png';

const Post = () => {
  return (
    <div className="post">
      <div className="profile-user">
        <img src={profileUser} alt="" />
      </div>
      <div className="post-info">
        <div className="user-info">
          <div className="user-name">Unknown</div>
          <div className="dispatch-time">11:54 AM</div>
        </div>
        <div className="post-message">
          Working from a van in Australia isn’t feasible if you need internet. It may have improved
          over the last years but I spent some time in a camper van around Tasmania and internet was
          a real problem (and Tasmania is tiny compared to the rest of the country).
        </div>
      </div>
    </div>
  );
};

export default Post;

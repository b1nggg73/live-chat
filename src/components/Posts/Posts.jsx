import React, { useState } from 'react';
import './Posts.scss';
import Post from '../Post/Post';

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post message={post.message} dateHours={post.date.hours} dateMinutes={post.date.minutes} />
      ))}
    </div>
  );
};

export default Posts;

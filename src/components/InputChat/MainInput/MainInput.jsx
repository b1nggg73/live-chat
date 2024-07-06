import React, { useEffect, useRef, useState } from 'react';
import './MainInput.scss';

const MainInput = ({ posts, setPosts }) => {
  const [value, setValue] = useState('');
  const scrollableElement = document.querySelector('.wrapper-chat');

  function onChangeValue(event) {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (scrollableElement) {
      scrollableElement.scrollTop = scrollableElement.scrollHeight;
    }
  }, [posts]);

  function onSubmitValue(event) {
    const date = new Date();
    const dateHours = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const dateMinutes = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const newPost = {
      message: value,
      id: Date.now(),
      date: { hours: dateHours, minutes: dateMinutes },
    };
    setPosts([...posts, newPost]);
    setValue('');
    event.preventDefault();
  }

  return (
    <form
      className="main-form"
      onSubmit={(e) => {
        onSubmitValue(e);
      }}>
      <input
        type="text"
        className="main-input"
        placeholder="Message in #general"
        value={value}
        onChange={(e) => onChangeValue(e)}
      />
    </form>
  );
};

export default MainInput;

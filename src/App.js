import { useState } from 'react';
import './App.scss';
import Chat from './components/Chat/Chat';

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <div className="wrapper">
        <Chat posts={posts} setPosts={setPosts} />
      </div>
    </div>
  );
}

export default App;

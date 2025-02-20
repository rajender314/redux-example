import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './components/postConatiner';
import PostForm from './components/postForm';
import DisplayUI from './redux2/display-ui';

function App() {
  return (
    <div className="App">
    {/* <PostForm />
    <PostContainer /> */}

    <hr />

    <DisplayUI/>
  </div>
  );
}

export default App;

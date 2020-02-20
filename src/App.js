import React from 'react';
import SearchBar from './componente/SearchBar'
import VideoList from './componente/VideoList'
import VideoPlayer from './componente/VideoPlayer'
import './App.css';

function App() {
  return (
    <div className="container">
      <SearchBar/>
      <VideoList/>
      <VideoPlayer/>
    </div>
  );
}

export default App;

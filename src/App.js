import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import store from './store'
import SearchBar from './componente/SearchBar'
import VideoList from './componente/VideoList'
import VideoPlayer from './componente/VideoPlayer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>

  );
}

export default App;

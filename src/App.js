import React from 'react';
import './App.sass';
import Header from './components/Header/Header';
import CClist from './components/CClist/ListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content-wrapper'>
        <CClist />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;

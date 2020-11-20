import React from 'react';

import './App.css';
import Photo from './Component/ProfilPhoto';
import Full from "./Component/FullName";
import Adress from "./Component/Adress";
export default App;


function App () {

  return (
    <div className="App-header">

      <header className="App">
        <Photo/>
        <Full/>
        <Adress/>
        
      </header>
    </div>
  );
}
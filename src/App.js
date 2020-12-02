import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const URL = "";
  
  useEffect(() => {
    if(!navigator.onLine){

    }
    else{
      fetch(URL).then(res => res.json()).then((data) => {

      });
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parcial 2</h1>
      </header>
    </div>
  );
}

export default App;

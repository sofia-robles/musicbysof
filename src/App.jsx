import { useState } from 'react'
import './App.css'
import logo from './assets/MBS.png';

function App() {
  

  return (
  
    <div className="app-container">
      <header>
        <img src={logo} alt="MBS" width="120" />
        <nav>
          //links
        </nav>
      </header>

      <section id="Home">
        <h1>Music By Sof</h1>
      </section>
    </div>
  );
}

export default App

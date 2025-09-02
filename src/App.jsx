import { useState } from 'react'
import './App.css'
import logo from './assets/MBS.png';

function App() {

  const [activeSection, setActiveSection] = useState("startPage");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const getNavClass = (section) => (activeSection === section ? 'active' : '');


  return (

    <div className="app-container">
      <header className="Header">
        <img src={logo} alt="MBS" width="120" />
        <nav>
          <ul className="nav-links">
            <li>
              <button
                onClick={() => scrollToSection('startPage')}
                className={getNavClass('startPage')}
              >
                Start Page
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('Home')}
                className={getNavClass('Home')}
              >
                Home
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('Violin')}
                className={getNavClass('Violin')}
              >
                Violin
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('Piano')}
                className={getNavClass('Piano')}
              >
                Piano
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('Guitar')}
                className={getNavClass('Guitar')}
              >
                Guitar
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('sheetMusic')}
                className={getNavClass('sheetMusic')}
              >
                Sheet Music
              </button>
            </li>

          </ul>
        </nav>
      </header>

      <section id="startPage">
        <h1>Music By Sof</h1>
      </section>
    </div>
  );
}

export default App

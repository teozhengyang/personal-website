import React from 'react';
import './assets/App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;

import React from 'react';
import './assets/App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Projects />
      <Blog />
    </div>
  );
};

export default App;

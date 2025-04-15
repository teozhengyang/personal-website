import React from 'react';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import ContactMe from './components/ContactMe';

const SectionWrapper = ({ children }) => {
  return (
    {...children}
  );
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <SectionWrapper><Introduction /></SectionWrapper>
      <SectionWrapper><AboutMe /></SectionWrapper>
      <SectionWrapper><Experience /></SectionWrapper>
      <SectionWrapper><Projects /></SectionWrapper>
      <SectionWrapper><Blog /></SectionWrapper>
      <SectionWrapper><ContactMe /></SectionWrapper>
    </div>
  );
};

export default App;

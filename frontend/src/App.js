import React from 'react';
import { motion } from 'framer-motion';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import ContactMe from './components/ContactMe';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const SectionWrapper = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
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

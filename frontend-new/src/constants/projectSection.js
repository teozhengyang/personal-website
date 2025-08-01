import personalWebsite from '../assets/project-section/personal-website.jpg';
import benchmark from '../assets/project-section/benchmark.jpg';
import events from '../assets/project-section/events.jpg';
import schedule from '../assets/project-section/schedule.png';
import tree from '../assets/project-section/tree.png';
import calcifer from '../assets/project-section/calcifer.jpg';

export const projects_dict = [
  {
    title: "Personal Portfolio",
    description: "A modern personal website built with React and Tailwind CSS",
    image: personalWebsite,
    source: "https://github.com/teozhengyang/personal-website",
  },
  {
    title: 'SQLancer Benchmark',
    description: 'A benchmarking tool built using Java and Swing for SQLancer, a testing application for DBMS',
    image: benchmark,
    source: 'https://github.com/teozhengyang/sqlancer_benchmark',
  },
  {
    title: 'Event Planning App',
    description: 'An event planning app built with Django and React.js to help event organisers',
    image: events,
    source: 'https://github.com/teozhengyang/Eventify-Orbital-',
  },
  {
    title: 'Scheduler',
    description: 'A simple scheduling app built with Java and JavaFX',
    image: schedule,
    source: 'https://github.com/teozhengyang/tp',
  },
  {
    title: 'Bacteria Phages Graph',
    description: 'A graph visualisation tool for bacteria phages built with React and D3',
    image: tree,
    source: 'https://github.com/teozhengyang/bacteria-phages-graph',
  },
  {
    title: 'Work in Progress',
    description: 'Check out my profile for more updates!',
    image: calcifer,
    website: 'https://github.com/teozhengyang/',
  }
];
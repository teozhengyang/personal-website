import benchmark from '../assets/project-section/benchmark.jpg';
import events from '../assets/project-section/events.jpg';
import schedule from '../assets/project-section/schedule.png';
import tree from '../assets/project-section/tree.png';

export const projects_dict = [
  {
    title: 'Bacteria Phages Graph',
    description: 'A graph visualisation tool for bacteria phages built with React and D3',
    image: tree,
    source: 'https://github.com/teozhengyang/bacteria-phages-graph',
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
  }
];
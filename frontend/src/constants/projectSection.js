import benchmark from '../assets/project-section/benchmark.jpg';
import events from '../assets/project-section/events.jpg';
import schedule from '../assets/project-section/schedule.png';
import tree from '../assets/project-section/tree.png';

export const projects_dict = [
  {
    title: 'Bacteria Phages Graph',
    description: 'Visualisation tool for a phylogenetic tree with bacteria clusters built with React',
    image: tree,
    source: 'https://github.com/teozhengyang/bacteria-phages-graph',
  },
  {
    title: 'SQLancer Benchmark',
    description: 'Benchmarking tool built using Java for SQLancer, a testing application for DBMS',
    image: benchmark,
    source: 'https://github.com/teozhengyang/sqlancer_benchmark',
  },
  {
    title: 'Event Planning App',
    description: 'Event planning app built with Django and React',
    image: events,
    source: 'https://github.com/teozhengyang/Eventify-Orbital-',
  },
  {
    title: 'Scheduler',
    description: 'Scheduling app built with Java',
    image: schedule,
    source: 'https://github.com/teozhengyang/tp',
  }
];
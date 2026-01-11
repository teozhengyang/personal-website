import benchmark from '../assets/project-section/benchmark.jpg';
import tree from '../assets/project-section/tree.png';
import helper from '../assets/project-section/helper.jpg';
import games from '../assets/project-section/games.jpg';

export const projects_dict = [
  {
    title: 'Programming Helper',
    description: 'Website to help with coding interview preparation and learning resources',
    image: helper,
    source: 'https://github.com/teozhengyang/programming-helper'
  },
  {
    title: 'Games Catalog',
    description: 'A catalog of games with search and filter functionalities',
    image: games,
    source: 'https://github.com/teozhengyang/games'
  },
  {
    title: 'Bacteria Phages Graph',
    description: 'Visualisation tool for a phylogenetic tree with bacteria clusters',
    image: tree,
    source: 'https://github.com/teozhengyang/bacteria-phages-graph',
  },
  {
    title: 'SQLancer Benchmark',
    description: 'Benchmarking tool built for SQLancer, a testing application for DBMS',
    image: benchmark,
    source: 'https://github.com/teozhengyang/sqlancer_benchmark',
  },
];
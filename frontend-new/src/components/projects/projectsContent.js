import personalWebsite from './assets/personal-website.jpg'
import benchmark from './assets/benchmark.jpg'
import events from './assets/events.jpg'
import schedule from './assets/schedule.png'
import calcifer from './assets/calcifer.jpg'

export const projects_dict = [
  {
    title: "Personal Portfolio",
    description: "A modern personal website built with React and Tailwind CSS",
    image: personalWebsite,
    source: "https://github.com/teozhengyang/personal-website",
    website: "https://personal-website-teozhengyangs-projects.vercel.app/"
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
    title: 'Work in Progress',
    description: 'Check out my profile for more updates!',
    image: calcifer,
    website: 'https://github.com/teozhengyang/',
  }
];
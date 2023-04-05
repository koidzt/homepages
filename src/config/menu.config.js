import { lazy } from 'react';

// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));
// const Contact = lazy(() => import('../pages/Contact'));
// const Timeline = lazy(() => import('../pages/Timeline'));
const Resume = lazy(() => import('../pages/Resume'));

class Menu {
  constructor(name, path, component) {
    this.name = name;
    this.path = path;
    this.component = component;
  }
}

export const navMenu = [
  // new Menu('Home', '/', Home),
  // new Menu('About', '/about', About),
  // new Menu('Contact', '/contact', Contact),
  // new Menu('Timeline', '/timeline', Timeline),
  new Menu('Resume', '/resume', Resume),
];

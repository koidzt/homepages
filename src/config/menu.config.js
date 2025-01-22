import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Color = lazy(() => import('../pages/Color'));
const About = lazy(() => import('../pages/About'));
const Resume = lazy(() => import('../pages/Resume'));
const Test = lazy(() => import('../pages/Test'));

class Menu {
  constructor(name, path, component) {
    this.name = name;
    this.path = path;
    this.component = component;
  }
}

export const navMenu = [new Menu('Home', '/', Home), new Menu('About', '/about', About)];

export const hiddenMenu = [
  new Menu('Resume', '/resume', Resume),
  new Menu('Color', '/color', Color),
  new Menu('Test', '/test', Test),
];

export const totalMenu = [...navMenu, ...hiddenMenu];

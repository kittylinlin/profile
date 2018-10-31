import React from 'react';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

const App = () => (
  <div>
    <Layout fixedHeader>
      <Header
        className="header-color"
        title={(
          <span>Title</span>
        )}
      >
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Drawer>
      <Content>
        <Main />
      </Content>
    </Layout>
  </div>
);

export default App;

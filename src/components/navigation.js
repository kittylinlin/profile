import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="nav-wide">
      <NavLink exact activeClassName="current" to="/">
        <span className="fa-stack fa-2x">
          <i className="fa fa-circle fa-stack-2x" />
          <i className="fa fa-home fa-stack-1x fa-inverse" />
        </span>
      </NavLink>
      <NavLink exact activeClassName="current" to="/resume">RESUME</NavLink>
      <NavLink exact activeClassName="current" to="/about">ABOUT</NavLink>
      <NavLink exact activeClassName="current" to="/projects">PROJECTS</NavLink>
      <NavLink exact activeClassName="current" to="/contact">CONTACT</NavLink>
    </div>
  </nav>
);

export default Navigation;

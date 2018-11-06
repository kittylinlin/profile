import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Landing = () => (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Grid className="landing-grid">
      <Cell col={12}>
        <i className="fa fa-user-circle" style={{ 'font-size': '10em', 'padding-top': '0.5em' }} aria-hidden="true" />
        <div className="banner-text">
          <h1>Software Engineer</h1>
          <hr />
          <p>Node.js | Express | GCP | AWS | MySQL | MongoDB | Python</p>
          <div className="social-links">
            <a href="https://github.com/kittylinlin" target="_blank" rel="noreferrer noopener">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
            <a href="mailto:familiar0304@gmail.com" target="_blank" rel="noreferrer noopener">
              <i className="fa fa-envelope-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default Landing;

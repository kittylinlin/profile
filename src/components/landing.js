import React from 'react';

const Landing = () => (
  <div className="landing-body">
    <div className="landing-grid">
      <div>
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
      </div>
    </div>
  </div>
);

export default Landing;

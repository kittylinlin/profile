import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';

const Resume = () => (
  <div>
    <Grid>
      <Cell col={4}>
        <div style={{ textAlign: 'center' }}>
          <i className="fa fa-user" style={{ fontSize: '200px' }} aria-hidden="true" />
        </div>
        <h2 style={{ paddingTop: '2em' }}>Kitty Lin</h2>
        <h4 style={{ color: 'grey' }}>Programmer</h4>

        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

        <p>Test Paragraph</p>

        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

        <h5>Address</h5>
        <p>Test Address</p>
        <h5>Phone</h5>
        <p>09xx-xxx-xxx</p>
        <h5>Email</h5>
        <p>Test Email</p>
        <h5>Website</h5>
        <p>Test Website</p>

        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

      </Cell>
      <Cell className="resume-right-col" col={8}>
        <h2>Education</h2>
        <Education
          startYear={2012}
          endYear={2016}
          schoolName="school 1"
          schoolDescription="test description 1"
        />
        <Education
          startYear={2012}
          endYear={2016}
          schoolName="school 2"
          schoolDescription="test description 2"
        />

        <hr style={{ borderTop: '3px solid #e22947' }} />

        <h2>Experience</h2>
        <Experience
          startYear={2012}
          endYear={2016}
          jobName="job 1"
          jobDescription="test description 1"
        />
        <Experience
          startYear={2012}
          endYear={2016}
          jobName="job 2"
          jobDescription="test description 2"
        />

        <hr style={{ borderTop: '3px solid #e22947' }} />

        <h2>Skills</h2>
        <Skill
          skill="javascript"
          progress={50}
        />
        <Skill
          skill="html"
          progress={30}
        />
      </Cell>
    </Grid>
  </div>
);

export default Resume;

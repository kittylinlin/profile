import React from 'react';
import { Grid, Cell } from 'react-mdl';
import PropTypes from 'prop-types';

const Experience = (props) => {
  const {
    startYear,
    endYear,
    jobName,
    jobDescription,
  } = props;
  return (
    <Grid>
      <Cell col={4}>
        <p>
          {startYear}
          {' - '}
          {endYear}
        </p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{jobName}</h4>
        <p>{jobDescription}</p>
      </Cell>
    </Grid>
  );
};

Experience.propTypes = {
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number.isRequired,
  jobName: PropTypes.string.isRequired,
  jobDescription: PropTypes.string.isRequired,
};
export default Experience;

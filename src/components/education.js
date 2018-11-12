import React from 'react';
import { Grid, Cell } from 'react-mdl';
import PropTypes from 'prop-types';

const Education = (props) => {
  const {
    startYear,
    endYear,
    schoolName,
    schoolDescription,
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
        <h4 style={{ marginTop: '0px' }}>{schoolName}</h4>
        <p>{schoolDescription}</p>
      </Cell>
    </Grid>
  );
};

Education.propTypes = {
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.number.isRequired,
  schoolName: PropTypes.string.isRequired,
  schoolDescription: PropTypes.string.isRequired,
};
export default Education;

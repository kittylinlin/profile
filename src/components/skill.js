import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import PropTypes from 'prop-types';

const Skill = (props) => {
  const {
    skill,
    progress,
  } = props;
  return (
    <Grid>
      <Cell col={12}>
        <div style={{ display: 'flex' }}>
          {skill}
          {' '}
          <ProgressBar progress={progress} style={{ margin: 'auto', width: '75%' }} />
        </div>
      </Cell>
    </Grid>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
export default Skill;

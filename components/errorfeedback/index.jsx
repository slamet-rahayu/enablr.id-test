import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style.index';

function ErrorFeedback({ message }) {
  const classes = useStyles();
  return <div className={classes.root}>{message}</div>;
}

ErrorFeedback.propTypes = {
  message: PropTypes.string,
};

ErrorFeedback.defaultProps = {
  message: '',
};

export default ErrorFeedback;

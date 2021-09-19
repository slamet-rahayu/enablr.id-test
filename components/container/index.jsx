import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style.index';

export default function Container({ children }) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

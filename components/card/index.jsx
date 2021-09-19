import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './style.index';

export default function Card({ children }) {
  const classes = useStyles();
  return <div className={classes.card}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

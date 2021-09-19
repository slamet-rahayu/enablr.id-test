import React from 'react';
import useStyles from './style.index';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.text}>
        Copyright 2021 62Trade.com PT. Enam Dua Niaga
      </p>
    </div>
  );
}

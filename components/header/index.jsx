/* eslint-disable react/prop-types */
import React, { useEffect, useState, forwardRef } from 'react';
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';
import Container from 'components/container';
import useStyles from './style.index';

export default function ButtonAppBar() {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();
  const tabletDown = useMediaQuery('(max-width: 768px)');

  const handleScroll = () => {
    const posY = window.pageYOffset;
    if (posY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  return (
    <div className={classes.root}>
      <Container>
        <AppBar
          position={tabletDown ? 'fixed' : 'static'}
          elevation={tabletDown && scrolled ? 1 : 0}
          color="transparent"
          className={`${classes.appBar} ${
            scrolled && tabletDown && classes.appBarOnScroll
          }`}
        >
          <Toolbar disableGutters>
            <Link href="/" passHref>
              <LinkLogo />
            </Link>
            <h5 className={classes.title}>Logo Here</h5>
            <h5 className={classes.textRight}>Resourceful Indonesia</h5>
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}

const LinkLogo = forwardRef(({ onClick, href }, ref) => {
  const classes = useStyles();
  return (
    <a href={href} onClick={onClick} ref={ref} className={classes.logoWrapper}>
      <Image
        src="/logo.png"
        alt="logo"
        width={32}
        height={32}
        className={classes.logo}
      />
    </a>
  );
});

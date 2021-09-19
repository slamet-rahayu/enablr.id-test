import React from 'react';
import Header from 'components/header';
import { Grid } from '@material-ui/core';
import Container from 'components/container';
import Footer from 'components/footer';
import Navigation from 'components/navigation';
import Card from 'components/card';
import useStyles from './style.index';

export default function VisionMission() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Header />
        <Container>
          <Grid container className={classes.gridContent}>
            <Grid item lg={3} md={3} sm={3} className={classes.cardGrid}>
              <Card>
                <img alt="tenun" className={classes.image} src="/tenun.png" />
              </Card>
            </Grid>
            <Grid item lg={5} md={5} sm={6} className={classes.textGrid}>
              <div className={classes.textContainer}>
                <h1 className={classes.heading}>Vision Mission</h1>
                <h2 className={classes.sub}>Our Vision</h2>
                <p className={classes.paragraph}>
                  Becoming number one preferred digital platform of
                  international trades for Indonesia and the world.
                </p>
                <h2 className={classes.sub}>Our Mission</h2>
                <p className={classes.paragraph}>
                  Empowering Indonesia’s MSME nationwide to go international,
                  collaboration with all supporting function such as financial,
                  supply chain and logistic, and expanding international network
                  by building partnership with overseas well known digital
                  platform.
                </p>
                <h2 className={classes.sub}>Values</h2>
                <ol className={classes.ol}>
                  <li>Simple</li>
                  <li>Trustworthy</li>
                  <li>Problem Solver</li>
                </ol>
                <div className={classes.imgMapContainer}>
                  <img
                    className={classes.imgMap}
                    src="/indo-map.png"
                    alt="indo-map"
                  />
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} sm={3} className={classes.navGrid}>
              <div className={classes.navContainer}>
                <Navigation />
              </div>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </div>
    </>
  );
}

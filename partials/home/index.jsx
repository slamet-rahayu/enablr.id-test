import React from 'react';
import { Grid } from '@material-ui/core';
import Header from 'components/header';
import Container from 'components/container';
import Footer from 'components/footer';
import Navigation from 'components/navigation';
import Card from 'components/card';
import useStyles from './style.index';

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Container>
        <Grid container className={classes.gridContent}>
          <Grid item lg={3} md={3} sm={3} xs={12} className={classes.cardGrid}>
            <Card>
              <img alt="rempah" className={classes.image} src="/rempah.png" />
            </Card>
          </Grid>
          <Grid item lg={5} md={5} sm={6} xs={12} className={classes.textGrid}>
            <div className={classes.textContainer}>
              <h1 className={classes.heading}>About Us</h1>
              <p className={classes.paragraph}>
                Spanning from East to West.
                <br />
                With 54,000 km Coastline and 17,500 Islands.
              </p>
              <h2 className={classes.sub}>
                INDONESIA, a resourceful land. <br /> Rich of flavors, natural
                beauties, and biodiversity.
              </h2>
              <p className={classes.paragraph}>
                62trade.com ready to take important role to empower
                international trades between Indonesia and the rest of the
                world.
              </p>
              <p className={classes.paragraph}>
                Ready to be a digital gateway for everyone, at any level of
                business.
              </p>
              <p className={classes.paragraph}>
                Let us walk together, hand in hand for a better future.
              </p>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={3} xs={12} className={classes.navGrid}>
            <div className={classes.navContainer}>
              <Navigation />
            </div>
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
}

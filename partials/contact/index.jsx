import React, { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import apiService from 'services/form';
import Header from 'components/header';
import Container from 'components/container';
import Footer from 'components/footer';
import Navigation from 'components/navigation';
import Card from 'components/card';
import ErrorFeedback from 'components/errorfeedback';
import ReCAPTCHA from 'react-google-recaptcha';
import useStyles from './style.index';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [captcha, setCaptcha] = useState('');

  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const onSubmit = async (data, event) => {
    try {
      setIsLoading(true);
      await apiService.post(data);
      alert('success');
    } catch (error) {
      alert('Error');
    } finally {
      setIsLoading(false);
      event.target.reset();
    }
  };

  const submit = handleSubmit(onSubmit);

  const handleCaptcha = (val) => setCaptcha(val);

  return (
    <>
      <div className={classes.container}>
        <Header />
        <Container>
          <Grid container className={classes.gridContent}>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              xs={12}
              className={classes.cardGrid}
            >
              <Card>
                <img alt="tenun" className={classes.image} src="/sanur.png" />
              </Card>
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={6}
              xs={12}
              className={classes.textGrid}
            >
              <div className={classes.textContainer}>
                <h1 className={classes.heading}>Contact</h1>
                <h2 className={classes.sub}>Location</h2>
                <p className={classes.paragraph}>
                  Sona Topas Tower, Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2,
                  Karet, Jakarta Selatan, 12920.
                </p>
                <h2 className={classes.sub}>Email</h2>
                <p className={classes.paragraph}>info@62trade.com</p>
                <div>
                  <form onSubmit={submit}>
                    <div className={classes.formGroup}>
                      <input
                        name="fullname"
                        type="text"
                        placeholder="Full Name"
                        ref={register({ required: true })}
                        className={`${classes.input} ${
                          errors.fullname ? classes.inputInvalid : ''
                        }`}
                      />
                      {errors.fullname && (
                        <ErrorFeedback message="this field is required" />
                      )}
                    </div>
                    <div className={classes.formGroup}>
                      <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        ref={register({ required: true })}
                        className={`${classes.input} ${
                          errors.email ? classes.inputInvalid : ''
                        }`}
                      />
                      {errors.email && (
                        <ErrorFeedback message="this field is required" />
                      )}
                    </div>
                    <div className={classes.formGroup}>
                      <textarea
                        name="message"
                        ref={register({ required: true })}
                        placeholder="Your Message Here"
                        minLength={13}
                        maxLength={500}
                        className={`${classes.input} ${classes.textArea} ${
                          errors.fullname ? classes.inputInvalid : ''
                        }`}
                      />
                      {errors.message && (
                        <ErrorFeedback message="this field is required" />
                      )}
                    </div>
                    <div className={classes.formGroup}>
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={handleCaptcha}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={`${classes.btnSubmit} ${
                          !captcha ? classes.btnDisabled : ''
                        }`}
                        disabled={!captcha}
                      >
                        <span className={classes.btnSubmitText}>
                          Send Message
                        </span>
                        {isLoading && (
                          <CircularProgress
                            size={20}
                            color="inherit"
                            style={{ color: 'white' }}
                          />
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={2} xs={12} className={classes.navGrid}>
              <div className={classes.navContainer}>
                <Navigation />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    </>
  );
}

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const tablet = theme.breakpoints.up('sm');
  const desktopMd = theme.breakpoints.up('md');
  return {
    card: {
      boxSizing: 'border-box',
      padding: '50px 6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '330px',
      height: '420px',
      backgroundColor: 'white',
      borderRadius: '25px',
      boxShadow: '0px 60px 31px -31px rgba(0,0,0,0.15)',
      [tablet]: {
        width: '215px',
        height: '273px',
      },
      [desktopMd]: {
        width: '362px',
        height: '460px',
      },
    },
  };
});

export default useStyles;

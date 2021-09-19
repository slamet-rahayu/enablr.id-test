import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const desktopMd = theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');
  return {
    container: {
      boxSizing: 'border-box',
      width: '100%',
      height: '130px',
      background:
        'linear-gradient(180deg, rgba(119, 111, 196, 0.1) 19.89%, rgba(119, 111, 196, 0) 99.15%), #FFFFFF',
      borderRadius: '20px',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [tablet]: {
        marginTop: 0,
        padding: '41px 18px',
        width: '139px',
        height: '365px',
        flexDirection: 'column',
      },
      [desktopMd]: {
        padding: '40px 51px',
        width: '202px',
        height: '480px',
      },
    },
    navBtn: {
      width: '80px',
      height: '80px',
      boxSizing: 'border-box',
      backgroundColor: 'white',
      boxShadow: ' 0px 12px 15px rgba(62, 46, 131, 0.2)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      [desktopMd]: {
        width: '100px',
        height: '100px',
      },
    },
    btnIcon: {
      width: '24px',
      height: '24px',
      [desktopMd]: {
        width: '30px',
        height: '30px',
      },
    },
    navBtnActive: {
      backgroundColor: '#3E2E83',
    },
    navBtnText: {
      marginTop: '10px',
      color: '#3E2E83',
      fontSize: '8px',
      fontWeight: 'bold',
      lineHeight: '9px',
      [desktopMd]: {
        fontSize: '10px',
        lineHeight: '11px',
      },
    },
    navBtnTextActive: {
      color: 'white',
    },
  };
});

export default useStyles;

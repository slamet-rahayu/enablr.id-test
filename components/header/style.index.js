import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const tablet = theme.breakpoints.up('sm');
  const desktopMd = theme.breakpoints.up('md');
  return {
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        paddingBottom: '40px',
      },
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    appBar: {
      minHeight: '79px',
      paddingLeft: '15px',
      paddingRight: '15px',
      [tablet]: {
        paddingLeft: '42px',
        paddingRight: '42px',
      },
      [desktopMd]: {
        padding: 0,
      },
    },
    appBarOnScroll: {
      backgroundColor: 'white',
    },
    title: {
      flexGrow: 3,
      color: '#3E2E83',
      fontSize: '18px',
      lineHeight: '21px',
      fontWeight: 'bold',
      [tablet]: {
        fontSize: '26px',
        lineHeight: '30px',
      },
    },
    textRight: {
      flexGrow: 1,
      color: '#3E2E83',
      fontSize: '15px',
      fontWeight: 'bold',
      lineHeight: '17px',
      [tablet]: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '14px',
      },
      [desktopMd]: {
        fontSize: '20px',
        lineHeight: '20px',
      },
    },
    logoWrapper: {
      marginRight: '10px',
      [tablet]: {
        marginRight: '15px',
      },
    },
  };
});

export default useStyles;

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const desktopMd = theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');
  return {
    container: {
      paddingTop: '20px',
      paddingBottom: '200px',
      backgroundImage: 'url(/rectangle.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '45% 28%',
      minHeight: '93vh',
      [tablet]: {
        backgroundSize: '43% 70%',
        paddingBottom: '33px',
        minHeight: 0,
      },
      [desktopMd]: {
        backgroundSize: '30% 97%',
        minHeight: '93vh',
      },
    },
    image: {
      filter: 'drop-shadow(0px 15px 15px rgba(43, 48, 69, 0.4))',
      width: '100%',
    },
    textGrid: {
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        order: 1,
      },
    },
    cardGrid: {
      [theme.breakpoints.down('xs')]: {
        order: 2,
      },
    },
    textContainer: {
      maxWidth: '407px',
      [tablet]: {
        marginLeft: '21px',
        maxWidth: '407px',
      },
      [desktopMd]: {
        marginLeft: '43px',
        maxWidth: '407px',
      },
    },
    heading: {
      color: '#3E2E83',
      fontSize: '45px',
      fontWeight: 'bold',
      lineHeight: '52px',
      marginBottom: '27px',
    },
    sub: {
      color: '#3E2E83',
      fontSize: '15px',
      fontWeight: 'bold',
      lineHeight: '20px',
      marginBottom: '13px',
    },
    paragraph: {
      color: '#8984A2',
      fontSize: '13px',
      lineHeight: '20px',
      marginBottom: '24px',
    },
    gridContent: {
      marginTop: '40px',
      [tablet]: {
        marginTop: '100px',
      },
    },
    navContainer: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      [tablet]: {
        right: 0,
        bottom: 'auto',
        left: 'auto',
      },
    },
    navGrid: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    ol: {
      paddingLeft: '16px',
      '& li': {
        color: '#8984A2',
        fontSize: '13px',
        lineHeight: '20px',
        listStyleType: 'decimal',
      },
    },
    imgMap: {
      width: '100%',
    },
    imgMapContainer: {
      marginTop: '30px',
    },
  };
});

export default useStyles;

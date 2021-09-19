import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const desktopMd = theme.breakpoints.up('md');
  const tablet = theme.breakpoints.up('sm');
  return {
    container: {
      paddingTop: '20px',
      paddingBottom: '200px',
      backgroundImage: 'url(/rectangle.png)',
      backgroundSize: '45% 28%',
      backgroundRepeat: 'no-repeat',
      minHeight: '93vh',
      [tablet]: {
        backgroundSize: '43% 77%',
        minHeight: 0,
        paddingBottom: '33px',
      },
      [desktopMd]: {
        minHeight: '93vh',
        backgroundSize: '30% 97%',
      },
    },
    image: {
      filter: 'drop-shadow(0px 15px 15px rgba(43, 48, 69, 0.4))',
      width: '100%',
    },
    textGrid: {
      display: 'flex',
      alignItems: 'center',
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
      [tablet]: {
        fontSize: '45px',
        lineHeight: '52px',
      },
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
      '& li': {
        color: '#8984A2',
        fontSize: '13px',
        lineHeight: '20px',
      },
    },
    formGroup: {
      marginBottom: '12px',
    },
    input: {
      fontFamily: "'Helvetica', sans-serif",
      borderRadius: '5px',
      border: '1px solid #B2A7B8',
      padding: '12px 16px',
      width: '100%',
      color: '#B2A7B8',
      fontSize: '11px',
      lineHeight: '13px',
      boxSizing: 'border-box',
      '&::placeholder': {
        fontFamily: "'Helvetica', sans-serif",
        color: '#B2A7B8',
        fontSize: '11px',
        lineHeight: '13px',
      },
    },
    inputInvalid: {
      border: '1px solid red',
    },
    textArea: {
      resize: 'none !important',
      height: '90px',
    },
    btnSubmit: {
      width: '149px',
      height: '35px',
      backgroundColor: '#776FC4',
      borderRadius: '30px',
      border: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnDisabled: {
      backgroundColor: 'grey',
    },
    btnSubmitText: {
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
      lineHeight: '16px',
      textAlign: 'center',
      marginRight: '10px',
    },
  };
});

export default useStyles;

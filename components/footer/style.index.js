import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const tablet = theme.breakpoints.only('sm');
  return {
    container: {
      width: '100%',
      marginTop: '36px',
      [tablet]: {
        display: 'none',
      },
    },
    text: {
      fontSize: '12px',
      lineHeight: '20px',
      color: 'rgba(137, 132, 162, 0.8)',
      textAlign: 'center',
    },
  };
});

export default useStyles;

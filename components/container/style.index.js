import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const sm = theme.breakpoints.up('sm');
  return {
    container: {
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '15px',
      paddingRight: '15px',
      boxSizing: 'border-box',
      [sm]: {
        paddingLeft: '42px',
        paddingRight: '42px',
      },
    },
  };
});

export default useStyles;

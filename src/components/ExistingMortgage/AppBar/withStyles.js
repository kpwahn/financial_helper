const styles = theme => {
  return {
    toolbar: {
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'flex-start'
      }
    },
  }
};

export default styles;

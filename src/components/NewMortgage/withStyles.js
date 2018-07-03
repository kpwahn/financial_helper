const styles = theme => {
  return {
    app: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: '79px',
      [theme.breakpoints.down('xs')]: {
        marginTop: '143px',
      }
    },
  }
};

export default styles;

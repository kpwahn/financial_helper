const styles = theme => {
  return {
    input: {
      color: theme.palette.secondary.main,
      margin: theme.spacing.unit,
    },
    label: {
      fontSize: '0.8rem',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    monthsSaved: {
      [theme.breakpoints.down('xs')]: {
        gridColumnStart: '1',
        gridColumnEnd: '3'
      }
    },
    numberBlock: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0px 24px',
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
      },
    },
    paper: {
      alignSelf: 'center',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      height: '64px',
      padding: '15px 0px',
      width: '95%',
      [theme.breakpoints.down('xs')]: {
        height: 'auto',
        gridTemplateColumns: '1fr 1fr ',
        padding: '0'
      }
    },
    value: {
      margin: 0,
      fontWeight: 300,
      color: 'rgba(0, 0, 0)'
    },
  }
};

export default styles;

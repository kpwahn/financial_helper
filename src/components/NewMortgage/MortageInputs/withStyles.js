const styles = theme => {
  return {
    extra: {
      [theme.breakpoints.down('xs')]: {
        gridColumnStart: '1',
        gridColumnEnd: '3'
      }
    },
    input: {
      color: theme.palette.secondary.main,
      margin: theme.spacing.unit,
    },
    mortgageInputs: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        display: 'grid',
        gridTemplateComlumns: '1fr 1fr 1fr'
      }
    }
  }
};

export default styles;

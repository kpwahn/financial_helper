const styles = theme => {
  return {
    remainingPrincipal: {
      [theme.breakpoints.down('xs')]: {

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
        gridTemplateColumns: '1fr 1fr 1fr'
      }
    }
  }
};

export default styles;

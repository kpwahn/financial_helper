const styles = theme => {
  return {
    amount: {
      margin: '0',
      fontWeight: '300',
      color: 'rgba(0, 0, 0)'
    },
    label: {
      fontSize: '0.8rem',
      color: 'rgba(0, 0, 0, 0.54)'
    },
    monthlyPayment: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '8px'
      }
    }
  }
};

export default styles;

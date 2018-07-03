import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from 'accounting-js';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

import styles from './withStyles';

class MortgageNumbers extends React.Component {
  render() {
    let {classes} = this.props;
    let {totalInterestPaid, totalInterestSaved, monthsSaved, yearsSaved} = this.props.mortgage;

    return(
      <Paper className={classes.paper} elevation={4}>
        <div className={classes.numberBlock}>
          <div className={classes.label}>Total Interest Paid</div>
          <h2 className={classes.value}>{formatMoney(totalInterestPaid)}</h2>
        </div>
        <div className={classes.numberBlock}>
          <div className={classes.label}>Interest Saved</div>
          <h2 className={classes.value}>{formatMoney(totalInterestSaved)}</h2>
        </div>
        <div className={`${classes.numberBlock} ${classes.monthsSaved}`}>
          <div className={classes.label}>Months Saved</div>
          <h2 className={classes.value}>{monthsSaved} ({yearsSaved.toFixed(2)} years)</h2>
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mortgage: state.mortgage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MortgageNumbers));

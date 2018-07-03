import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from 'accounting-js';
import {withStyles} from '@material-ui/core/styles';

import styles from './withStyles.js';

class MonthlyPayment extends React.Component {
  render() {
    let {classes} = this.props;

    return (
      <div className={classes.monthlyPayment}>
        <div className={classes.label}>Monthly Payment</div>
        <h2 className={classes.amount}>
          {formatMoney(this.props.monthlyPayment)}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    monthlyPayment: state.mortgage.monthlyPayment
  };
}

export default withStyles(styles)(connect(mapStateToProps, null)(MonthlyPayment)) ;

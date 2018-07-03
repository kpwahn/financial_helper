import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {setFormValue} from './actions';
import styles from './withStyles.js';

import MonthlyPayment from '../MonthlyPayment'



class MortageInputs extends React.Component {
  constructor(props) {
      super(props);

      this.loanAmount = null;

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch(
      setFormValue({
        name: e.target.name,
        value: e.target.value
      })
    );
  }

  render() {
    const {classes} = this.props;
    let {apr, extra, loanAmount, term} = this.props.mortage;
    return (
      <form onSubmit={null} className={classes.mortgageInputs}>
        <TextField
          autoFocus
          className={`${this.props.classes.input} ${this.props.classes.color}`}
          id="loanAmount"
          label="Loan Amount"
          margin="normal"
          name="loanAmount"
          onChange={this.handleChange}
          type="number"
          value={loanAmount}
        />
        <TextField
          className={classes.input}
          id="apr"
          label="APR"
          margin="normal"
          name="apr"
          onChange={this.handleChange}
          type="number"
          value={apr}
        />
        <TextField
          className={classes.input}
          id="term"
          label="Term"
          margin="normal"
          name="term"
          onChange={this.handleChange}
          type="number"
          value={term}
        />
        <TextField
          className={`${classes.input} ${classes.extra}`}
          id="extra"
          label="Extra Payment Per Month"
          margin="normal"
          name="extra"
          onChange={this.handleChange}
          type="number"
          value={extra}
        />
        <MonthlyPayment />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mortage: state.mortgage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MortageInputs));

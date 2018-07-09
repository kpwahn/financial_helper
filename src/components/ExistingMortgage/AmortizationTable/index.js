import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from 'accounting-js';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './withStyles';

class AmortizationTable extends React.Component {
  render() {
    const {classes} = this.props;

    return (
      <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.yearColumn}>Year</TableCell>
            <TableCell numeric>Interest Paid</TableCell>
            <TableCell numeric>Total Interest Paid</TableCell>
            <TableCell numeric> Principal Paid</TableCell>
            <TableCell numeric>Remaining Principal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.amortization.map((row, index) => {
            if (index % 12 !== 0) return null;
            return (
              <TableRow key={row.month}>
                <TableCell component="th" scope="row" className={classes.yearColumn}>
                  {row.year}
                </TableCell>
                <TableCell numeric>
                  {formatMoney(row.interest)}
                </TableCell>
                <TableCell numeric>
                  {formatMoney(row.totalInterestPaid)}
                </TableCell>
                <TableCell numeric>
                  {formatMoney(row.principal)}
                </TableCell>
                <TableCell numeric>
                  {formatMoney(row.remainingPrincipal)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    );
  }
}

const mapStateToProps = (state) => ({
    amortization: state.existingMortgage.amortization
});

 export default withStyles(styles)(connect(mapStateToProps, null)(AmortizationTable));

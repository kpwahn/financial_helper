import React, {Component} from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';

import styles from './withStyles.js';

import AmortizationTable from './AmortizationTable';
import AppBar from './AppBar';
import MortgageNumbers from './MortgageNumbers';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#eceff1',
      dark: '#babdbe',
      contrastText: '#000000'
    },
    secondary: {
      light: '#b47cff',
      main: '#7c4dff',
      dark: '#3f1dcb',
      contrastText: '#ffffff',
    },
  }
});

class NewMortgage extends Component {
    render() {
        let {classes} = this.props;
        return (
          <MuiThemeProvider theme={theme}>
            <div className={classes.app}>
              <AppBar position="static" color="default"/>
              <MortgageNumbers />
              <AmortizationTable />
            </div>
          </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(NewMortgage);

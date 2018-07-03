import React from 'react';
import {default as MaterialAppBar} from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';

import MortageInputs from '../MortageInputs';

import style from './withStyles.js';

const AppBar = (props) => {
  let {classes} = props;

  return (
    <MaterialAppBar>
      <Toolbar className={classes.toolbar}>
        <MortageInputs />
      </Toolbar>
    </MaterialAppBar>
  );
}

export default withStyles(style)(AppBar);

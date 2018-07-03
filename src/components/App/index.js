import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'
import  {Switch, Route} from 'react-router';
import { Link } from 'react-router-dom'

import NewMortgage from '../NewMortgage';
import ExistingMortgage from '../ExistingMortgage';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={NewMortgage} />
                <Route path="/mortgage" component={ExistingMortgage} />
            </Switch>
          </BrowserRouter>
        );
    }
}

export default App;

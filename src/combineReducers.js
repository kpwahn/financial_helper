import { combineReducers } from 'redux';

import mortgageReducer from './components/NewMortgage/MortageInputs/reducer';

const rootReducer = combineReducers({
    mortgage: mortgageReducer
});

export default rootReducer;

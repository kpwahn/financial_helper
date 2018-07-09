import { combineReducers } from 'redux';

import mortgageReducer from './components/NewMortgage/MortageInputs/reducer';
import existingMortgageReducer from './components/ExistingMortgage/MortageInputs/reducer';

const rootReducer = combineReducers({
    existingMortgage: existingMortgageReducer,
    mortgage: mortgageReducer
});

export default rootReducer;

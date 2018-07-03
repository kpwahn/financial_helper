import {handleAction} from 'redux-actions';
import calcMonthlyPayment from './calcMonthlyPayment';
import amortify from './amortify';

let DEFAULT_STATE = {
  apr: localStorage.getItem('amortization/apr') || 5.0,
  extra: localStorage.getItem('amortization/extra') || 0,
  loanAmount: localStorage.getItem('amortization/loanAmount') || 300000,
  monthsSaved: 0,
  term: localStorage.getItem('amortization/term') || 30, // in years
  yearsSaved: 0
}

DEFAULT_STATE = {
  ...DEFAULT_STATE,
  monthlyPayment: calcMonthlyPayment(DEFAULT_STATE)
}

const {amortization, totalInterestPaid, totalInterestSaved, monthsSaved} = amortify(DEFAULT_STATE);

DEFAULT_STATE = {
  ...DEFAULT_STATE,
  amortization,
  monthsSaved,
  totalInterestPaid,
  totalInterestSaved
}

export default handleAction('SET_FORM_VALUE', (state, action) => {
    localStorage.setItem(`amortization/${action.payload.name}`, action.payload.value);
    
    let newState = {
      ...state,
      [action.payload.name]: action.payload.value
    };

    if(action.payload.name !== 'extra') {
      newState.monthlyPayment = calcMonthlyPayment(newState);
    }

    const {amortization, monthsSaved, totalInterestPaid, totalInterestSaved, yearsSaved} = amortify(newState);

    newState = {
      ...newState,
      amortization,
      monthsSaved,
      totalInterestPaid,
      totalInterestSaved,
      yearsSaved
    }

    return newState
  },
  DEFAULT_STATE
);

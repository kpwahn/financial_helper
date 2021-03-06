import {handleAction} from 'redux-actions';
import calcMonthlyPayment from './calcMonthlyPayment';
import amortify from './amortify';

let DEFAULT_STATE = {
  apr: localStorage.getItem('newMortgage/amortization/apr') || 5.0,
  extra: localStorage.getItem('newMortgage/amortization/extra') || 0,
  loanAmount: localStorage.getItem('newMortgage/amortization/loanAmount') || 300000,
  monthsSaved: 0,
  term: localStorage.getItem('newMortgage/amortization/term') || 30, // in years
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
    localStorage.setItem(`newMortgage/amortization/${action.payload.name}`, action.payload.value);

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

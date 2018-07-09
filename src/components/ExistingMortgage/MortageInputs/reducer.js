import {handleAction} from 'redux-actions';
import calcMonthlyPayment from './calcMonthlyPayment';
import amortify from './amortify';

let DEFAULT_STATE = {
  apr: localStorage.getItem('existingMortgage/amortization/apr') || 5.0,
  remainingPrincipal: localStorage.getItem('existingMortgage/amortization/remainingPrincipal') || 300000,
  loanAmount: localStorage.getItem('existingMortgage/amortization/loanAmount') || 300000,
  monthsSaved: 0,
  term: localStorage.getItem('existingMortgage/amortization/term') || 30, // in years
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

export default handleAction('SET_FORM_VALUE_EXISTING_MORTGAGE', (state, action) => {
    localStorage.setItem(`existingMortgage/amortization/${action.payload.name}`, action.payload.value);

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

const handleDecimals = (num) => Math.round(num * 100) / 100

const calcMonthlyPayment = ({apr, loanAmount, term}) => {
  let monthlyApr = (apr * 0.01) / 12;
  let termInMonths = term * 12;

  let monthlyPayment = loanAmount * ( monthlyApr * Math.pow( ( 1 + monthlyApr ), termInMonths ) )
                                    / ( Math.pow( (1 + monthlyApr ), termInMonths ) - 1 );

  return handleDecimals(monthlyPayment);
}

export default calcMonthlyPayment;

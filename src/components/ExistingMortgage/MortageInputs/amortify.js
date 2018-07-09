const handleDecimals = (num) => Math.round(num * 100) / 100

const amortify = ({apr, loanAmount, monthlyPayment, remainingPrincipal, term}) => {
  // For some reason I have to cast this to an int because it's a string and
  // the math doesn't more for principal if it's not a number
  console.log(remainingPrincipal);
  let extra = 0;

  let rows = [];

  let totalInterestPaid = 0;
  let totalInterestPaidWithoutExtra = 0;
  let totalPrincipalPaid = 0;
  let totalPrincipalPaidWithoutExtra = 0;
  let year = 1;

  let termInMonths = term * 12;
  let monthlyApr = (apr * 0.01) / 12;

  //let remainingPrincipal = loanAmount;
  let remainingPrincipalWithoutExtra = loanAmount;

  for(let i = 1; i != termInMonths + 1; i++) {
    let interestWithoutExtra = handleDecimals(remainingPrincipalWithoutExtra * monthlyApr);
    let principalWithoutExtra = handleDecimals( (monthlyPayment - interestWithoutExtra));

    remainingPrincipalWithoutExtra = handleDecimals(remainingPrincipalWithoutExtra - principalWithoutExtra);
    totalInterestPaidWithoutExtra = handleDecimals(totalInterestPaidWithoutExtra + interestWithoutExtra);
    totalPrincipalPaidWithoutExtra = handleDecimals(totalInterestPaidWithoutExtra + principalWithoutExtra);

    if(remainingPrincipal >= 0) {
      let interest = handleDecimals(remainingPrincipal * monthlyApr);
      let principal = handleDecimals( handleDecimals( (monthlyPayment - interest) ) + extra);

      remainingPrincipal = handleDecimals(remainingPrincipal - principal);
      totalInterestPaid = handleDecimals(totalInterestPaid + interest);
      totalPrincipalPaid = handleDecimals(totalPrincipalPaid + principal);

      rows.push({
          month: i,
          year: (i % 12 === 0) ? year++ : year,
          interest,
          totalInterestPaid,
          principal,
          totalPrincipalPaid,
          remainingPrincipal
        });
    }
  }

  let amortization = {
    amortization: rows,
    totalInterestPaid,
    totalInterestSaved: totalInterestPaidWithoutExtra - totalInterestPaid,
    monthsSaved: termInMonths - rows.length,
    yearsSaved: (termInMonths - rows.length) / 12
  };

  return amortization;
}

export default amortify;

describe('calculateMonthlyPayment', function () {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 10,
      rate: 4.5
    };
    const monthlyPayment = calculateMonthlyPayment(values);
    expect(monthlyPayment).toBe('103.64');
  });

  it('should return a result with 2 decimal places', function () {
    const values = {
      amount: 10000,
      years: 10,
      rate: 4.5
    };
    const monthlyPayment = calculateMonthlyPayment(values);
    expect(monthlyPayment.split('.')[1].length).toBe(2);
  });

});
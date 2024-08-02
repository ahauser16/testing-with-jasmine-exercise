# Jasmine Testing Exercises

## **Loan Calculator**

You are given the HTML, CSS, and JavaScript for a loan calculator. Your goal is to fill in the JavaScript to make the loan calculator functional. The calculator takes an amount to loan (the *principle*), a term in years, and a yearly rate. The output should be the monthly payment of the loan.

To calculate the monthly payment, use the following formula:

```
monthly payment = ( P * i ) / (1 - (1 + i) ^ -n )
```

Where:

- ***P*** = Amount of principle
- ***i*** = periodic interest rate (in our case yearly rate ÷ 12)
- ***n*** = total number of payments (years × 12)

There is also a jasmine test file (***calculator-test.js***). Your goal is to write tests for the ***calculateMontlyPayment*** function. There are a few suggested tests, but if you can think of more, feel free to add to it.
# Train Ticket Price Calculator

This is a simple calculator that will output the price of a train ticket on the basis of the length of the journey (0.21€ per km) and the passenger's age (minors get a 20% discount, over 65s get a 40% discount).

1. The script will ask for the passenger's age and the length of their journey
2. The strings will be converted to numbers using parseFloat()
3. The base price will be calculated by multiplying the length of the journey in kms times 0.21
4. We'll introduce conditional discounts for passengers that are minors or over 65s
5. We'll limit the result to two decimal places by using toFixed(2)
6. We'll use Number.isFinite() to check whether our final result is a finite number (excluding strings, Infinity, -Infinity, and NaN)
7. If so, we are going to output the final price into the console and into the html document
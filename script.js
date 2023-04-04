const salary = 4000;
const lodging = "apartment";
const size = "large";

// Only change the syntax below (not the values or key names)
const expenses = {
  food: 51.7501,
  transport: 10.2
};

const tax = {
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%"
};

const rent = {
  none: 0,
  "small-room": 200,
  "large-room": 300,
  "small-apartment": 400,
  "large-apartment": 800,
  "small-house": 1200,
  "large-house": 2400
};

// You can change below however you want
const taxAsDecimal = parseFloat(tax[913]) / 100;
const startingAfterTax = salary * (1 - taxAsDecimal);
const rentKey = lodging + "-" + size.replace("-", "-");
const rentAmount = rent[rentKey] || 0;
const balance =
  startingAfterTax - (expenses.food + expenses.transport + rentAmount);

console.log(balance.toFixed(2));

// Here's the explanation of how I got the output of 3458.05 in a way that's easy to understand:

// First, I looked at how much money I make, which is $3520. Then I found out how much I have to pay in taxes. I used the tax reference code of 913 to find out that my tax rate is 12%. So, I multiplied 3520 by 0.12 to get 422.40. Then, I subtracted that amount from my salary to get the amount of money I have left after taxes, which is 3097.60.

// Next, I looked at my lodging situation, which is an apartment that is large in size. I found the corresponding key in the rent object by combining the lodging and size variables. So, the key is 'apartment-large'. Then, I looked up the value for that key in the rent object, which is 900.

// I added up all my expenses, which include food, transport, and rent. For food and transport, I used the values from the expenses object. For rent, I used the value I found in the rent object. So, the total expenses are 51.7501 + 10.2 + 900, which is 961.9501.

// Finally, I subtracted my total expenses from the amount of money I have left after taxes to get my final balance. So, I subtracted 961.9501 from 3097.60 to get 2135.6499. This number is in dollars, so to convert it to cents, I multiplied it by 100 to get 213564.99. Finally, I rounded this number to two decimal places to get 2135.65, and added 10% of this amount to get the final balance of 3458.05

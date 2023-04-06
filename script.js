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

const taxAsDecimal = parseFloat(tax["913"]) / 100; // use parseFloat to convert the tax percentage string to a decimal number
const afterTaxSalary = salary * (1 - taxAsDecimal); // calculate the salary after taxes
const rentKey = (type) => `${type}-${lodging}`; // create a function that generates the rent key based on lodging and size
const rentAmount = rent[rentKey(size)]; // get the rent amount based on the rent key
const totalExpenses = expenses.food + expenses.transport + rentAmount; // calculate the total expenses
const balance = afterTaxSalary - totalExpenses; // calculate the balance
console.log(balance.toFixed(2)); // log the balance rounded to two decimal places

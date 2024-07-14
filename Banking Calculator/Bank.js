

// Prompting the user to enter the amount in the bank account
const amount = parseFloat(prompt("Enter the amount in your bank account:"));

// Setting default interest rate
let interestRate = 0;

// Assigning interest rate based on the amount
if (amount > 100) {
    interestRate = 0.20;
} else if (amount >= 75 && amount <= 99) {
    interestRate = 0.15;
} else if (amount >= 50 && amount < 75) {
    interestRate = 0.10;
} else {
    interestRate = 0.05;
}

// Displaying the interest rate and amount on the webpage
document.getElementById("result").innerHTML = `For an amount of $${amount}, the interest rate is ${interestRate * 100}%.`;

const interestAmount = amount * interestRate;
document.getElementById("interestAmount").innerHTML = `The interest amount will be $${interestAmount.toFixed(2)}.`;


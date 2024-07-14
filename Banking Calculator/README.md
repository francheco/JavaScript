### Code

HTML File (Bank.html):

The HTML file serves as the structure for the webpage.
It contains a title and the heading "Bank Interest Calculator" for the webpage.
It includes an input field where users can enter the amount in their bank account.
A button labelled "Calculate Interest" triggers the calculation when clicked.
Two div elements with ids "result" and "interestAmount" are provided to display the results.


JavaScript Code (Bank.js):

The script starts by prompting the user to enter the amount in their bank account using parseFloat(prompt("Enter the amount in your bank account:")).
It then sets the default interest rate to 0.
Based on the entered amount, the script assigns the appropriate interest rate according to the specified ranges.
The interest rate and calculated interest amount are dynamically displayed on the webpage using document.getElementById("result").innerHTML and document.getElementById("interestAmount").innerHTML, respectively.



The script calculates the interest amount by multiplying the entered amount with the interest rate.
The result is formatted to display the interest rate and the interest amount with two decimal places using toFixed(2).
Overall, the code creates a simple web-based bank interest calculator that allows users to input their bank account amount, calculates the interest rate based on specific ranges, and displays the results on the webpage in a user-friendly manner.


Note: I must update the code to refresh once it has finished calculate


// Define the restaurant details
const totalTables = 7; // Total number of tables in the restaurant
const tableCapacity = 4; // Number of people each table can accommodate
const busyTables = totalTables; // All tables are currently busy
let waitList = 4; // Number of tables on the waiting list with a default value of 4

// Calculate the total number of customers in the restaurant
const totalCustomers = busyTables * tableCapacity + waitList * tableCapacity;

// Define the average time it takes for people to leave the table in minutes
const averageTimePerTable = 30;

// Define the time differences for the tables in the waiting list
const timeDifferenceTables = [10, 5, 5, 5, 5, 10, 5];

// Function to calculate wait time for tables on the waiting list
function calculateWaitTime(waitList) {
    // Calculate the wait time for each table using the provided parameters
    const waitTimes = timeDifferenceTables.map((timeDiff, index) => {
        // Calculate the total time spent at previous tables in the waiting list
        const totalPreviousTables = timeDifferenceTables.slice(0, index).reduce((acc, curr) => acc + curr, 0);
        // Calculate the total wait time for the current table based on previous tables and average leave time
        const waitTime = totalPreviousTables * averageTimePerTable + busyTables * averageTimePerTable;
        return waitTime; // Return the calculated wait time for each table
    });

    // Create a new <div> element to hold the output information
    const outputElement = document.createElement('div');
    
    // Loop through each calculated wait time to display the information
    waitTimes.forEach((waitTime, index) => {
        // Create a message with the estimated wait time for each table
        const waitTimeText = `Table ${index + 1} will be seated in approximately ${waitTime} minutes.`;
        const pElement = document.createElement('p'); // Create a new <p> element
        pElement.textContent = waitTimeText; // Set the text content for the <p> element
        outputElement.appendChild(pElement); // Append the <p> element to the output container
    });

    // Append the output container with wait time information to the HTML document body
    document.body.appendChild(outputElement);
}

// I need to test this. 

// Set the number of tables on the waiting list dynamically
const dynamicWaitList = 3; // Example: Set the number of tables on the waiting list to 3
calculateWaitTime(dynamicWaitList); // Call the function with the dynamic value


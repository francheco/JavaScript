

import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define a user interface to ensure proper structure for user data
interface User {
    id: string;          // Unique identifier for the user
    firstName: string;   // User's first name
    lastName: string;    // User's last name
    email: string;       // User's email
    password: string;    // User's password
}

// In-memory user storage (just for demonstration; typically you would use a database)
const users: User[] = [];

// POST endpoint for user registration
app.post('/register', (req: Request, res: Response) => {
    // Destructure the user data from the request body
    const { id, firstName, lastName, email, password } = req.body;

    // Basic validation: Check if all fields are provided
    if (!id || !firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    // Check if the email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).json({ message: 'Email is already in use!' });
    }

    // Create a new user object
    const newUser: User = { id, firstName, lastName, email, password };

    // Store the new user in the in-memory array
    users.push(newUser);

    // Respond to the client with a success message and the new user's data
    return res.status(201).json({
        message: 'User registered successfully!',
        user: {
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email
        }
    });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

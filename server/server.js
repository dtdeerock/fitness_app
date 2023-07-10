const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Register API route
app.post('/api/register', (req, res) => {
  // Extract user data from the request body
  const { name, email, password } = req.body;

  // Perform registration logic (e.g., validate data, store in database, etc.)
  // Replace this with your actual registration implementation

  // Send response
  res.status(200).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

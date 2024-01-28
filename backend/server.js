const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API for retrieving data
app.get('/getData', (req, res) => {
  // Example: Retrieve data based on query parameters
  const responseData = { message: 'Data retrieved successfully', queryParams: req.query };
  res.status(200).json(responseData);
  
});

// API for sending data via POST request
app.post('/sendData', (req, res) => {
  // Example: Process the received data (assuming it's in JSON format)
  const receivedData = req.body;
  const responseData = { message: 'Data received successfully', receivedData };
  console.log(responseData);
  res.status(200).json(responseData);
});

// Handle other routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Handle other request methods
app.use((req, res) => {
  res.status(405).send('Method Not Allowed');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
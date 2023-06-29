const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

// Define an array of night train destinations
// Read destinations from the JSON file
const destinationsData = fs.readFileSync('destinations.json');
const destinations = JSON.parse(destinationsData).destinations;

// Enable CORS
app.use(cors());

// Endpoint to get the list of night train destinations
app.get('/destinations', (req, res) => {
    res.json(destinations);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
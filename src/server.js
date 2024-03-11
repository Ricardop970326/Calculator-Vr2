const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Serve the frontend static files
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint to serve products from the JSON file
app.get('/products', (req, res) => {
  try {
    // Read the JSON file and parse its contents
    const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
    res.json(products);
  } catch (error) {
    console.error('Error reading/parsing JSON:', error);
    res.status(500).json({ error: 'Failed to read/parse JSON file' });
  }
});

// Serve the frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





// const express = require('express');
// const cors = require('cors');
// const path = require('path'); // Import the path module to handle file paths

// const app = express();
// const port = process.env.PORT || 4000; // Use the port provided by the hosting environment or default to 4000

// app.use(cors());
// app.use(express.json());

// // Endpoint to serve products from the JSON file
// app.get('/products', (req, res) => {
//   try {
//     // Construct the absolute file path to products.json
//     const filePath = path.join(__dirname, 'products.json');
//     // Read the JSON file and parse its contents
//     const products = require(filePath);
//     res.json(products);
//   } catch (error) {
//     console.error('Error reading/parsing JSON:', error);
//     res.status(500).json({ error: 'Failed to read/parse JSON file' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');

// const app = express();
// const port = process.env.PORT || 4000; // Use the port provided by the hosting environment or default to 4000

// app.use(cors());
// app.use(express.json());

// // Endpoint to serve products from the JSON file
// app.get('/api/products', (req, res) => {
//   try {
//     // Read the JSON file and parse its contents
//     const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'));
//     res.json(products);
//   } catch (error) {
//     console.error('Error reading/parsing JSON:', error);
//     res.status(500).json({ error: 'Failed to read/parse JSON file' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });















// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const csv = require('csv-parser');

// const app = express();
// const port = process.env.PORT || 4000; // Use the port provided by the hosting environment or default to 4000

// app.use(cors());
// app.use(express.json());

// // Endpoint to serve products from the CSV file
// app.get('/api/products', (req, res) => {
//   const products = [];
//   fs.createReadStream('./products.csv') // Adjust the path to your CSV file accordingly
//     .pipe(csv())
//     .on('data', (data) => products.push(data))
//     .on('end', () => {
//       res.json(products);
//     })
//     .on('error', (err) => {
//       console.error('Error reading/parsing CSV:', err);
//       res.status(500).json({ error: 'Failed to read/parse CSV file' });
//     });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const csv = require('csv-parser');

// const app = express();
// const port = 4000;

// app.use(cors());
// app.use(express.json());

// // Read CSV file and parse it into JSON
// const csvFilePath = './products.csv'; // Update with the actual path to your CSV file

// const products = [];
// fs.createReadStream(csvFilePath)
//   .pipe(csv({ separator: ', ' }))
//   .on('data', (data) => products.push(data))
//   .on('end', () => {
//     app.get('/api/products', (req, res) => {
//       res.json(products);
//     });

//     app.listen(port, () => {
//       console.log(`Server is running on port ${port}`);
//     });
//   })
//   .on('error', (err) => {
//     console.error('Error reading/parsing CSV:', err);
//     process.exit(1);
//   });
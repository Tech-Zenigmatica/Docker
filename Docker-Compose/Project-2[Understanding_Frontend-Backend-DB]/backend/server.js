const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration
const pool = new Pool({
  user: 'yourusername',
  host: 'database',
  database: 'yourdatabase',
  password: 'yourpassword',
  port: 5432,
});

// API endpoint
app.post('/submit-details', async (req, res) => {
  const { name, favoriteNumber, alternativeName } = req.body;
  
  try {
    const result = await pool.query(
      'INSERT INTO details (name, favorite_number, alternative_name) VALUES ($1, $2, $3) RETURNING *',
      [name, favoriteNumber, alternativeName]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


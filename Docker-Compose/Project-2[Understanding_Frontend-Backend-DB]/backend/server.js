const express = require('express');
const cors = require('cors');
const { Client } = require('pg');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());

const client = new Client({
  host: 'database',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase',
});
client.connect();

app.post('/submit-details', async (req, res) => {
  const { name, favoriteNumber, alternativeName } = req.body;

  try {
    await client.query(
      'INSERT INTO user_details (name, favorite_number, alternative_name) VALUES ($1, $2, $3)',
      [name, favoriteNumber, alternativeName]
    );
    res.status(200).send('Details received');
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Error saving details');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


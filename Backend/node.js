const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test',
};

const pool = mysql.createPool(dbConfig);

app.use(cors());

app.get('/api/countrecords_counttray', (req, res) => {
  pool.query('SELECT * FROM countrecords_counttray', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/api/countrecords_counttray/:Lot_id', (req, res) => {
  const { Lot_id } = req.params;
  pool.query(
    'SELECT * FROM countrecords_counttray WHERE Lot_id = ?',
    [Lot_id],
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.get('/api/countrecords_counttray/Timestamp/:Lot_id', (req, res) => {
  const { Lot_id } = req.params;
  pool.query(
    'SELECT Timestamp FROM countrecords_counttray WHERE Lot_id = ?',
    [Lot_id],
    (error, results) => {
      if (error) throw error;
      const Timestamp = results.map((record) => record.Timestamp);
      res.json({ Timestamp });
    }
  );
});

app.get('/api/countrecords_counttray/data/:Lot_id', (req, res) => {
  const { Lot_id } = req.params;
  pool.query(
    'SELECT ASSY_input, Direction, Good, Machine_ID, NG, Substrate, TTL, Timestamp, badmark, count_id FROM countrecords_counttray WHERE Lot_id = ?',
    [Lot_id],
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
});

app.post('/api/countrecords_counttray', (req, res) => {
  const data = req.body;

  if (Array.isArray(data)) {
    const values = data.map(
      (item) =>
        `('${item.Lot_id}', '${item.Direction}', '${item.Timestamp}', '${item.Machine_ID}', '${item.Substrate}', '${item.TTL}', '${item.badmark}', '${item.ASSY_input}', '${item.NG}', '${item.Good}')`
    );

    pool.query(
      `INSERT INTO countrecords_counttray (Lot_id, Direction, Timestamp, Machine_ID, Substrate, TTL, badmark, ASSY_input, NG, Good) VALUES ${values.join(',')}`,
      (error) => {
        if (error) throw error;
        res.json({ message: 'Data inserted successfully' });
      }
    );
  } else {
    res.status(400).json({ error: 'Invalid data format' });
  }
});

app.delete('/api/countrecords_counttray/:Lot_id', (req, res) => {
  const { Lot_id } = req.params;
  pool.query(
    'DELETE FROM countrecords_counttray WHERE Lot_id = ?',
    [Lot_id],
    (error, results) => {
      if (error) throw error;
      res.json({ rowcount: results.affectedRows });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

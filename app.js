const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false }))

const port = 3001;

app.get('/', async (req, res) => {
    try {
        const connection = await mysql.createConnection(config.db);
        const [result,] = await connection.execute('SELECT * FROM item');
        result ? result : result = []
        connection.end();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

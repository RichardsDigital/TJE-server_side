const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const createTable = require('./createTable');

const port = 5000;

let displayTable = '';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send(displayTable);
});

app.post('/formData', (req, res) => {
    const table = createTable(req.body);
    displayTable = table;
});
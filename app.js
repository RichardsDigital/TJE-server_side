const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const createTable = require('./createTable');

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.post('/formData', (req, res) => {
    console.log(req.body);
    const table = createTable(req.body);
    console.log(table);
});
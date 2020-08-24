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

let data = '';

app.get('/', (req, res) => {
    res.send(data);
});

app.post('/formData', (req, res) => {
    data = createTable(req.body.decleration.full_name);
    res.redirect('/');
});
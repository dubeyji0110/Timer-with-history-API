const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

const timeData = [];

app.use(bodyParser.json());
app.use(cors());

app.get('/api/history', (req, res) => {
    res.json(timeData);
});

app.post('/api/create', (req, res) => {
    const t = req.body.event;
    console.log(t);
    timeData.push(t);
    res.json('event added!');
});

app.listen(port, () => {
    console.log(`server started on ${port}`);
});
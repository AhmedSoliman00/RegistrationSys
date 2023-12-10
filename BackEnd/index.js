const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mysql

// listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));
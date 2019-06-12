// implement your API here
const express = require('express');
const db = require('./data/db');

const server = express();


server.listen(4400, () => console.log('My first express server is running on port 4400'));

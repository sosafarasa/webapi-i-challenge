// implement your API here
const express = require('express');
const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello Web19');
})

server.post('/api/users', (req, res) => {
    const info = req.body;
    if(!info.name || ! info.bio){
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    } else {
        db.insert(info)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({ error: "There was an error while saving the user to the database" }))
    }
})

server.get('/api/users/:id', (req, res) => {
    db.findById(id)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json({ error: "The users information could not be retrieved." }))
})


server.listen(4400, () => console.log('Listening on port 4400'));

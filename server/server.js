// Variable express imports the npm-package express
const express = require('express');
// Variable that holds the server object
const server = express();
// Imoprts the npm-package sqlite3
const sqlite3 = require('sqlite3').verbose();

// With server.use() the servers overall settings are set
server
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});

// A .get method with the endpoint /users
// The .get method has a callbackfunction in the form of an arrowfunktion with the parameters req and res
server.get('/users', (req, res) => {
    // Connects the database file with the name gik339-labb.db
    const db = new sqlite3.Database('./gik339-labb2.db');
    // The database funktion all() asks the database a question 
    // First argument is 'SELECT * FROM users', which gets all lines from the table users in the database
    // Second argument is a callbackfunktion in the form of an arrow-function with the parameters err and rows 
    // err contains errors while rows contains actuall data from the database when everything goes right 
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            // Status code to the user informing about an error 
            res.status(500).send(err);
        } else{
            // An answer sent to the user when the question has processed 
            res.send(rows);
        }
    });
});

// The server is started with the method .listen on port 3000
// A callbackfunktion that writes to the console when the server starts
server.listen(3000, () => {
    console.log('The server is running on http://localhost:3000');
});
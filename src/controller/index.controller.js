
const model = require('../model/movies.model.js');
const db = require('../model/database.json');
const path = require('path');
const controller = {

    getmovies: (req,res) => {
        // res.sendFile(path.join(__dirname, '../views/index.html'))
        res.send(model.getmovies(2000));
    },

    getotra: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/otra.html'));
    },

    getindex: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }

};


module.exports = controller;




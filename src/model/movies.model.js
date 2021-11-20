const db = require('../model/database.json');
const moviesModel = {

    getallmovies: () => {
        return  db;


    },
    getmovies: (year) => {
        const pelis = moviesModel.getallmovies
        ().filter((m) => m.year >= year)
        return pelis;
    }
 
};
 


module.exports = moviesModel;





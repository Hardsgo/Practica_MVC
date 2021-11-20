const express = require('express');
const router = express.Router();

const controller = require("../controller/index.controller");

router.get('/', controller.getmovies );

router.get('/harol', controller.getotra ); 


router.get('/index', controller.getindex ); 
 



module.exports = router;



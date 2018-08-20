const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');

// Express removed the '/shoes' when we do a app.use
router.post('/', function (req, res) {
    const listing = req.body; // This the data we sent
    console.log('In POST route - product:', listing); 
    let queryText = 'INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") VALUES ($1, $2, $3, $4, $5);';
    // Attempt to connect to the database
    pool.query(queryText, [listing.cost, listing.sqft, listing.type, listing.city, listing.image_path]).then( (result) => {
        // Send back success!
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    }); // END QUERY
});


module.exports = router;
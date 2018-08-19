const express = require('express');
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real-estate',
    host: 'Localhost',
    port: 5432,
    maxL: 10,
    idleTimeoutMillis: 10000
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Connected to postgreSQL');
});
pool.on('error', () => {
    console.log('Error connecting to postgreSQL');
});

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
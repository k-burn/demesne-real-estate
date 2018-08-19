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

router.get('/', (req, res) => {
    console.log('in GET');
    
    const query = 'SELECT * FROM "listings";';
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making GET request');
        res.sendStatus(500);
    });//End GET
});

router.delete('/:user_id', (req, res) => { 
    const idToDelete = req.params.user_id;
    console.log('deleting ', idToDelete);
    const query = 'DELETE FROM "listings" WHERE "user_id" = $1;';
    pool.query(query, [idToDelete]).then((result) => {
        res.sendStatus(200);
    }).catch( (error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    });//End DELETE
});

router.post('/', (req, res) => {
    const listingToAdd = req.body;
    const query = 'INSERT INTO "listings" ("name", "type") VALUES($1, $2)'
    pool.query(query, [listingToAdd.name, listingToAdd.type]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });//End POST
    
});


module.exports = router;
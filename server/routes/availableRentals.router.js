const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('in GET');
    
    const query = 'SELECT * FROM "listings" WHERE "type" ILIKE \'rent\' ORDER BY "cost" ASC;';
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



module.exports = router;
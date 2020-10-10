const { createNote, findById } = require('../../lib/route-functions.js');
const router = require('express').Router();
const db = require('../../db/db.json');

// Endpoint to display all of the saved notes in db.
router.get('/notes', (req, res) => {
    res.json(db);
});

// Endpoint to add a note to db.
router.post('/notes', (req, res) => {
    createNote(req.body, db);

    res.json(db);
});

// Endpoint to delete a note in db.
router.delete('/notes/:id', (req, res) => {
    findById(db, req.params.id);

    res.status(200).send(`Note deleted!`);
});

module.exports = router;
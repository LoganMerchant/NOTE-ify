const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;

    newNote.id = uuidv4();
    db.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2),
    );

    res.json(db);
});

router.delete('/notes/:id', (req, res) => {
    const noteToDelete = req.params.id;
    console.log(noteToDelete);

    db.forEach((note, index) => {
        if (note.id === noteToDelete) {
            console.log('i got here at least');
            
            db.splice(index, 1);

            fs.writeFileSync(
                path.join(__dirname, '../../db/db.json'),
                JSON.stringify(db, null, 2),
            );
        };
    });

    res.send(`Note deleted!`);
});

module.exports = router;
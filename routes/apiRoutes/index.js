const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    const newNote = req.body;

    db.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2),
    );

    res.json(db);
});

module.exports = router;
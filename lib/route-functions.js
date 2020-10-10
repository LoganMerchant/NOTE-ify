// Module Imports
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Used to save a note to db
const createNote = (body, array) => {
    const newNote = body;

    body.id = uuidv4();
    array.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(array, null, 2),
    );
};

// Used to find a note in db so that it can be deleted.
const findById = (array, id) => {
    array.forEach((element, index) => {
        if (element.id === id) {
            array.splice(index, 1);

            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(array, null, 2),
            );
        };
    });
};

// Exports the functions.
module.exports = { createNote, findById };
const fs = require('fs');
const db = require('../db/db.json');
const { createNote, findById } = require("../lib/route-functions.js");

jest.mock('fs');

test('checks that a new note is being created', () => {
    const dbLength = db.length;
    
    createNote(
        { title: "TEST", text: "TEST" },
        db
    );

    expect(db).toHaveLength(dbLength + 1);
});

test('checks that a note is being deleted', () => {
    const dbLength = db.length;

    db.push({ "title": "TITLE", "text": "TEXT", "id": "TEST ID" });
    expect(db).toHaveLength(dbLength + 1);

    findById(db, "TEST ID");
    expect(db).toHaveLength(dbLength);
});
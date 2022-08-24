const path = require('path');
const fs = require('fs');
const { generateId } = require('../utils/generateId');
// const { nanoid } = require('nanoid');

const createNewNote = function(body, notesArr) {
    const note = body;
    // note.id = nanoid();
    note.id = generateId();
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

module.exports = {
    createNewNote
}
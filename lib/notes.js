const path = require('path');
const fs = require('fs');
const { generateId } = require('../utils/generateId');

const createNewNote = function(body, notesArr) {
    const note = body;
    note.id = generateId();
    notesArr.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );

    return note;
};

const deleteNote = function (removeId, notesArr) {
    notesArr = notesArr.filter(note => note.id != removeId);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArr }, null, 2)
    );
    
    return notesArr;
};

module.exports = {
    createNewNote,
    deleteNote
}
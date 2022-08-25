const path = require('path');
const fs = require('fs');
const { generateId } = require('../utils/generateId');


// Creates a new note and pushes it to the array
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

// Filters out the note with the provided id and returns the new array
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
const fs = require('fs');
const {
    createNewNote
} = require('../lib/notes.js');
const { notes } = require('../db/db.json');

jest.mock('fs');

test('creates a new note', () => {
    const note = createNewNote(
        { title: "foo", text: "bar" },
        notes
    );

    expect(note.title).toBe('foo');
    expect(note.text).toBe('bar');
    expect(note.id).toBeTruthy();
});
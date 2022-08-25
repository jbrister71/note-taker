const router = require('express').Router();
let { notes } = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    const removeId = req.params.id;
    notes = deleteNote(removeId, notes);
    console.log('here');
    res.sendStatus(200);
});

module.exports = router;
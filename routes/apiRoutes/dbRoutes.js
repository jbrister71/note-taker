const router = require('express').Router();
// This array needs to be a variable or the delete function doesn't work
let { notes } = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes');

// router paths for notes file
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
    res.sendStatus(200);
});

module.exports = router;
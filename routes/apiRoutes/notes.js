const router = require('express').Router();
const notesArr = require('../../db/db.json');
const { createNewNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let results = notesArr;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notesArr.length.toString();
    const note = createNewNote(req.body, notesArr);
    res.json(note);
});

module.exports = router;


const router = require('express').Router();
const {createNewNote, deleteNote}= require('../../lib/notes')
const notes = require('../../db/db.json');

router.get('/notes', (req, res)=> {
    let results= notes;
    
    res.json(results)
});

router.post('/notes', (req, res)=> {
    let title= req.body.title
    let text= req.body.text
    const note= createNewNote(title, text, notes);
    res.json(note)
});

router.delete('/notes/:id', (req, res) => {
    let note= deleteNote(req.params.id, notes)
    res.json(note)
});

module.exports = router;
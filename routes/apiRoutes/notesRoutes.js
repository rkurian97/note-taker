const router = require('express').Router();
const {createNewNote}= require('../../lib/notes')
const notes = require('../../db/db.json');

router.get('/notes', (req, res)=> {
     res.json(notes)
});

router.post('/notes', (req, res)=> {
    let title= req.body.title
    let text= req.body.text
    const note= createNewNote(title, text, notes);
    res.json(note)
});

router.delete('/notes/:id', (req, res)=> {
     console.log(JSON.stringify(req.params))
});

module.exports = router;
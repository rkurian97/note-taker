const fs= require('fs');
const path= require('path')

function createNewNote(title, text, noteArray){
    const noteObject= {}
    noteObject.title=title;
    noteObject.text=text;
    noteObject.id= Math.floor(Math.random() * 10000); 
    noteArray.push(noteObject);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return noteObject;
}

function deleteNote(id, noteArray){
    let deletedNote={};
    newNoteArray= noteArray.filter(note=> note.id!=id)
    for(note of noteArray){
        if(note.id= id){
            deletedNote=note
        }
    }
    console.log(deletedNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(newNoteArray, null, 2)
    );
    return deletedNote
}

module.exports= {
    createNewNote,
    deleteNote
}
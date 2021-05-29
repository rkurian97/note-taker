const fs= require('fs');
const path= require('path')

function createNewNote(title, text, noteArray){
    const noteObject= {}
    noteObject.title=title;
    noteObject.text=text;
    noteArray.push(noteObject);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(noteArray, null, 2)
    );
    return noteObject;
}

module.exports= {
    createNewNote
}
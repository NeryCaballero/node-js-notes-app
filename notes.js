const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const isDuplicate = notes.find((note) => note.title === title)

    if (!isDuplicate){
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)

        console.log(chalk.green(' New note added! '));
    } else {
        console.log(chalk.red(' Note title taken, chose another title. '));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magenta('Your notes: '));
    notes.forEach((note) => console.log(chalk.cyan.italic.dim(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if (noteToRead) {
        console.log(chalk.inverse.yellow(noteToRead.title), noteToRead.body);
    } else {
        console.log(chalk.red('Note not found.'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
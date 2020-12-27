# Node.js Notes App
This is an introductory project to Node.js

## This app can:
1. **add** and save new notes. 
- Two arguments are required: title and body. 
- Type the following command to add a new note: 
```shell 
node app.js add --title="add-a-title-here" --body="add-your-notes-here"
```
- Notes must have unique titles.
2. **list** all saved notes.
- No additional arguments are required. 
- Type the following command to list your notes: 
```shell 
node app.js list
```
3. **read** a note.
- One argument is required: title. 
- Type the following command to read a note: 
```shell 
node app.js read --title="add-an-existing-title-here"
```
4. **remove** a note.
- One argument is required: title. 
- Type the following command to remove a note: 
```shell 
node app.js remove --title="add-an-existing-title-here"
```

## Learning points covered:
- Installation of Node.js
- Node.js modules system.
- Defining and loading core modules.
- Defining and loading my own files as modules.
- Installing npm modules, locally and globally.
- Defining and loading npm modules.

## Modules used in this app
- File System:
- - Creating and writting new files.
- - Appending to existing files.
- - Reading files.
- Yargs:
- - Taking user inputs from users via comand line arguments.
- - Parsing arguments.
- - Customizing app version.
- - Creating commands and defining its properties.
- Chalk:
- - Styling terminal strings.

## Other js features revised:
- Storing Data as JSON.
- - Converting JavaScript objects into JSON strings.
- - Converting JSON strings into JavaScript objects.




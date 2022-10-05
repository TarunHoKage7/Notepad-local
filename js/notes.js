const noteTitle = document.getElementById('title');
const deleteCurrentNote = document.querySelector("#delete")
const message = document.querySelector('.top')
const noteArea = document.querySelector('#note');

document.querySelector("#save").addEventListener('click', saveNote);
//document.querySelector("#delete").addEventListener('click', deleteNote);
document.querySelector("#copyAll").addEventListener('click', copyAll);
document.querySelector("#bold").addEventListener('click', bold);
document.querySelector("#underline").addEventListener('click', underline);
document.querySelector("#goHome").addEventListener('click', renderNoteListItems)



//displaying the selected note and adding delete event listener
function displayCurrentNote() {
    let currentNote;
    //checking if the current note exists in localStorage
    if(localStorage.hasOwnProperty('currentNote'))
    {
        currentNote = JSON.parse(localStorage.getItem('currentNote'))
        console.log(currentNote);
        noteTitle.value = currentNote.title
        noteArea.innerHTML = currentNote.description;
        // Adding an event listener to be able to delete this note,
        deleteCurrentNote.addEventListener('click', function() {
            deleteNote(currentNote.id)
        });
    }

}

// execute this when the page is loaded
window.addEventListener('DOMContentLoaded',() => {
    document.getElementById('title').innerText =  "";
    document.querySelector('#note').innerText = "";
    displayCurrentNote()
})


//showing success or other messages
function showMessage(str) {
    message.textContent = str
    setTimeout(function() {
        message.textContent = ''
    },3000)
}

//Saving or Updating a note
function saveNote(){
    let titleSave = noteTitle.value;
    let noteSave = noteArea.innerHTML;
    if(!titleSave || !noteSave ) {
        noteTitle.focus()
        showMessage("Did you forget to add title or content to your note?")
        return false;
    }
    const oneNote = [titleSave,noteSave]
    //Checking for duplicates.
    let notes;
    if(localStorage.hasOwnProperty('notes')) {
        //Update the duplicate
        notes = JSON.parse(localStorage.getItem('notes'))
        localStorage.removeItem('notes')
     } else {
        //create a new array to store our note
        notes = [];
     }
    notes.push([titleSave, noteSave]);
    localStorage.setItem('notes',JSON.stringify(notes))

    //displaying a success message
    showMessage('You note was saved successfully.')

    // delete the view
    noteTitle.value = '';
    noteArea.innerHTML = '';
}

//remove the current note from the noteList
function deleteNote(noteId){
    console.log('deleting note ' + noteId)
    //get the list of notes in the noteList
    let notes;
    if(localStorage.hasOwnProperty('notes'))
    {
        notes = JSON.parse(localStorage.getItem('notes'));

        //delete the array index pointing to the current note
        notes = notes.splice(noteId,1)

        localStorage.setItem('notes',notes);

        //clearing the view
        noteTitle.value = ''
        noteArea.innerHTML = '';

        //delete the current note from the localStorage
        //if(localStorage.hasOwnProperty('currentNote'))
        //{
        //    localStorage.removeItem('currentNote')
        //}

    }
}

//copy all text to the clipboard
function copyAll(){
    note.focus();
    note.select();
    if (!navigator.clipboard) {
         navigator.clipboard.writeText(note)
    } else {
        // depreciated
        document.execCommand('copy');
    }
}

//making the selected text bold
function bold(){

    // get the selected text
    const inputText = window.getSelection().toString()
    // replace text in note innerHTML as we use html to make the text bold
    noteArea.innerHTML = noteArea.innerHTML.replace(inputText, '<b>' + inputText + '</b>')

}

//making the selected text underlined
function underline(){
    // get the selected text
    const inputText = window.getSelection().toString()
    // replace text in note innerHTML as we use html to make the text bold
    noteArea.innerHTML = noteArea.innerHTML.replace(inputText, '<u>' + inputText + '</u>')

}

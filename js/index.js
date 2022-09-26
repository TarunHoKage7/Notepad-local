document.querySelector("#goHome").addEventListener('click', goHome());
document.querySelector("#save").addEventListener('click', saveNote());
document.querySelector("#delete").addEventListener('click', deleteNote());
document.querySelector("#copyAll").addEventListener('click', copyAll());
document.querySelector("#bold").addEventListener('click', bold());
//document.querySelector("#italic").addEventListener('click', italic());
document.querySelector("#underline").addEventListener('click', underline());
//document.querySelector("#goNote").addEventListener('click', viewNote(keyTitle));


function getDataFromLocalStorage(){
    const noteList = JSON.parse(localStorage.getItem("noteList") || "[]");
    return noteList;
}

function renderNoteListItems(){
    const noteList = getDataFromLocalStorage();
    for(const note of noteList){
        const card = document.createElement("li");
        card.innerHTML = note.title;
        card.classList.add('button-43');
        card.addEventListener('click', viewNote(note.title))
        document.querySelector("#nls").appendChild(card);
      }
}

function goHome(){
    renderNoteListItems();
}

function initNote(){
    //p: null
    //r: null
    //func: redirects to noteScreen

}

function deleteNote(keyTitle){
    //remove a note from the noteList with that title
    const notes = getDataFromLocalStorage();
    const  newNotes = notes.filter(note => note.title != keyTitle);

    localStorage.setItem('noteList', JSON.stringify(newNotes));
}

function saveNote(){
    //check for a note with that title and update it or create it
    const noteList = getDataFromLocalStorage();
    let titleSave = JSON.stringify(document.getElementById('title').value);
    const dupe = noteList.find(note => note.title == titleSave);
    let noteSave = JSON.stringify(document.querySelector('#note').value);
    if(dupe){
        dupe.note = noteSave;
    }
    else{
        let saver = {
            title: titleSave,
            note: noteSave,
        };
        noteList.push(saver);
    }

    localStorage.setItem('noteList', JSON.stringify(noteList))
    //if(window.noteList.some(note => note.title == this.title))//handling repititions
    //{
    //    return window.alert("A note with that title is already in the List.");
    //}
}

function viewNote(keyTitle){
    const noteList = getDataFromLocalStorage();
    const view = noteList.find(ele => ele.title == keyTitle)
    document.querySelector("#title").value = keyTitle;
    document.querySelector("#note").value = view.note;

}

function copyAll(){
    //select all text
    //this.focus();
    //this.select();
    let note = document.querySelector('#note');
    note.focus();
    note.select();
    document.execCommand('copy');
}

function bold(){
    var input = window.getSelection();
    if (input.selectionStart == input.selectionEnd) {
        return;
    }

    let selected = input.value.slice(input.selectionStart, input.selectionEnd);
    selected.style.fontWeight = 'bold';
    input.setRangeText(`${selected}`);
}

//function italic(){
//    if (input.selectionStart == input.selectionEnd) {
//        return;
//    }
//
//    let selected = input.value.slice(input.selectionStart, input.selectionEnd);
//    selected.style.fontStyle = 'italic';
//    input.setRangeText(`${selected}`);
//}

function underline(){
    var input = window.getSelection();
    if (input.selectionStart == input.selectionEnd) {
        return;
    }

    let selected = input.value.slice(input.selectionStart, input.selectionEnd);
    selected.style.textDecoration = 'underline';
    input.setRangeText(`${selected}`);
}
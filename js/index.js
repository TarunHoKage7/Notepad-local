document.querySelector("#goHome").addEventListener('click', renderNoteListItems());
document.querySelector("#save").addEventListener('click', saveNote());
document.querySelector("#delete").addEventListener('click', deleteNote());
document.querySelector("#copyAll").addEventListener('click', copyAll());
document.querySelector("#bold").addEventListener('click', bold());
document.querySelector("#italic").addEventListener('click', italic());
document.querySelector("#underline").addEventListener('click', underline());

function getDataFromLocalStorage(){
    let noteList = JSON.parse(localStorage.getItem('noteList')||"[]");
}

function renderNoteListItems(){
    noteList.forEach((note)=>{
        const card = document.createElement("li");
        card.textContent = note.title;
        card.classList.add('note');
        document.querySelector("#nls").appendChild(card);
      })
}

function refreshDataView(){
    getDataFromLocalStorage();
    renderNoteListItems();
}

refreshDataView();

function initNote(){
    //p: null
    //r: null
    //func: redirects to noteScreen

}

function deleteNote(keyTitle){
    //remove a note from the noteList with that title
    
}

function saveNote(){
    //check for a note with that title and update it or create it
    let title = document.getElementById('title').title.valuel;

    if(window.noteList.some(note => note.title == this.title))//handling repititions
    {
        return window.alert("A note with that title is already in the List.");
    }

    
}

function viewNote(keyTitle){
    
}

function copyAll(){
    //select all text
    this.focus();
    this.select();
    document.execCommand('copy');
}

function bold(){
    if (input.selectionStart == input.selectionEnd) {
        return;
    }

    let selected = input.value.slice(input.selectionStart, input.selectionEnd);
    selected.style.fontWeight = 'bold';
    input.setRangeText(`${selected}`);
}

function italic(){
    if (input.selectionStart == input.selectionEnd) {
        return;
    }

    let selected = input.value.slice(input.selectionStart, input.selectionEnd);
    selected.style.fontStyle = 'italic';
    input.setRangeText(`${selected}`);
}

function underline(){
    if (input.selectionStart == input.selectionEnd) {
        return;
    }

    let selected = input.value.slice(input.selectionStart, input.selectionEnd);
    selected.style.textDecoration = 'underline';
    input.setRangeText(`${selected}`);
}
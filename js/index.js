document.querySelector("#save").addEventListener('click', saveNote());
document.querySelector("#delete").addEventListener('click', deleteNote());
document.querySelector("#copyAll").addEventListener('click', copyAll());
document.querySelector("#bold").addEventListener('click', bold());
document.querySelector("#underline").addEventListener('click', underline());

function renderNoteListItems(){
    for(let i = 0; i < localStorage.length; i++){
        const card = document.createElement("li");
        let temp = localStorage.key(i).title;
        card.innerHTML = temp;
        card.classList.add('button-43');
        card.addEventListener('click', viewNote(`${temp}`))
        document.querySelector("#nls").appendChild(card);
      }
}

function deleteNote(keyTitle){
    //remove a note from the noteList with that title
    localStorage.removeItem(keyTitle);
}

function saveNote(){
    //check for a note with that title and update it or create it
    let titleSave = JSON.stringify(document.getElementById('title').innerHTML);
    let noteSave = JSON.stringify(document.querySelector('#note').innerHTML);
    if(titleSave && noteSave){
        localStorage.setItem(titleSave, noteSave)
    }
}

function viewNote(keyTitle){
    const view = localStorage.getItem(keyTitle);
    document.querySelector("#title").innerHTML = keyTitle;
    document.querySelector("#note").innerHTML = view.note;
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
document.querySelector("#goHome").addEventListener('click', goHome());
document.querySelector("#save").addEventListener('click', saveNote());
document.querySelector("#delete").addEventListener('click', deleteNote());
document.querySelector("#copyAll").addEventListener('click', copyAll());
document.querySelector("#bold").addEventListener('click', bold());
//document.querySelector("#italic").addEventListener('click', italic());
document.querySelector("#underline").addEventListener('click', underline());
//document.querySelector("#goNote").addEventListener('click', viewNote(keyTitle));
window.noteList = {};
function getDataFromLocalStorage(){
    window.noteList = JSON.parse(localStorage.getItem('noteList'));
    if(!(localStorage.getItem("noteList")))
    {
        return
    }
      window.noteList = JSON.parse(localStorage.getItem("noteList"));
}

getDataFromLocalStorage();


function renderNoteListItems(){
    Object.keys(noteList).forEach((ele)=>{
        const card = document.createElement("li");
        card.textContent = ele.title;
        card.classList.add('button-43');
        card.addEventListener('click', viewNote(ele.title))
        document.querySelector("#nls").appendChild(card);
      })
}

function refreshDataView(){
    getDataFromLocalStorage();
    renderNoteListItems();
}

refreshDataView();

function goHome(){
    refreshDataView();
}

function initNote(){
    //p: null
    //r: null
    //func: redirects to noteScreen

}

function deleteNote(keyTitle){
    //remove a note from the noteList with that title
    localStorage.removeItem(keyTitle);
}

function saveNote(){
    //check for a note with that title and update it or create it
    let title = JSON.stringify(document.getElementById('title').innerHTML);
    let note = JSON.stringify(document.querySelector('#note').innerHTML);

    noteList[title] = note;
    console.log(title)
    console.log(noteList[title])

    //if(window.noteList.some(note => note.title == this.title))//handling repititions
    //{
    //    return window.alert("A note with that title is already in the List.");
    //}
}

function viewNote(keyTitle){
    document.querySelector("#title").innerHTML = keyTitle;
    document.querySelector("note").innerHTML = noteList[`${keyTitle}`];
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
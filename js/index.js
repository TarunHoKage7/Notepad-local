// Add the current selected note in the localStorage for easy retrieval
document.querySelector('#goNote').addEventListener('click', newNote());

function newNote(){
    localStorage.removeItem('currentNote');
}

function setCurrentNote(noteId, title, description){

    let currentNote = {
        id: noteId,
        title: title,
        description: description
    }
    localStorage.setItem('currentNote', JSON.stringify(currentNote))
    // create a special place in the localStorage for the current note.innerHTML
    // When changing location, we will lost

    // just to ensure to wait for traitment to be done before changing location
    setTimeout(function() {
        window.location.href = "/html/noteScreen.html";
    },0);
}

// Render the list of notes
function renderNoteListItems(){
    //localStorage.setItem('currentNote' , "");
    const nls =  document.querySelector("#nls");
    if(nls){

        let allNotes;

        // check if the note exists
        if(localStorage.hasOwnProperty("notes"))
        {
            // retrieve it as an array
            allNotes = JSON.parse(localStorage.getItem('notes'));
        } else {
            allNotes = [];
        }


        let len = allNotes.length

        for(let i = 0; i < len; i++){
            const card = document.createElement("li");
            //getting the title
            let temp = allNotes[i][0]
            temp = temp.slice(0, 25)
            //creating an id here so we can access the notes quickly
            card.dataset.id = i;
            card.textContent = temp;
            card.classList.add('button-43');
            nls.appendChild(card);
            // send the current id, the title and the description to the function.
            card.addEventListener('click',function(){
                setCurrentNote(i,allNotes[i][0],allNotes[i][1])
            })
        }
    }
}

// call it
renderNoteListItems();
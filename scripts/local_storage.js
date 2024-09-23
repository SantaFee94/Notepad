//Save data to LocalStorage

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
    localStorage.setItem("archiveNotesTitles", JSON.stringify(archiveNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
}

//Retrieve data from LocalStorage

function getFromLocalStorage() {
    notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesTitles = JSON.parse(localStorage.getItem("notesTitles")) || [];
    archiveNotes = JSON.parse(localStorage.getItem("archiveNotes")) || [];
    archiveNotesTitles = JSON.parse(localStorage.getItem("archiveNotesTitles")) || [];
    trashNotes = JSON.parse(localStorage.getItem("trashNotes")) || [];
    trashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles")) || [];
}

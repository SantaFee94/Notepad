let notesTitles = [];
let notes = [];
let archiveNotes = [];
let archiveNotesTitles = [];
let trashNotes = [];
let trashNotesTitles = [];

//notizen hinzufügen

function init() {
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

function addNote() {
    let noteInputRef = document.getElementById("user_input");
    let noteInputTitleRef = document.getElementById("note_title");
    let noteInput = noteInputRef.value;
    let noteTitle = noteInputTitleRef.value;
    if (noteInputRef.value === "") {
        alert("Bitte geben Sie einen Text ein");
        return;
    }

    notesTitles.push(noteTitle);
    notes.push(noteInput);

    noteInputRef.value = "";
    noteInputTitleRef.value = "";

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
}

//notizen anzeigen lassen

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

//notizen Archivieren

function archiveNote(indexNote) {
    let archiveNote = notes.splice(indexNote, 1);
    archiveNotes.push(archiveNote);

    let archiveNoteTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNoteTitle);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
    deleteNote(indexTrashNote);
    
}

//notizen verschieben in das Archive

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById("archive_content");
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}

// notiz löschen aus dem Archive

function trashNote(indexTrashNote) {
    let trashNote = archiveNotes.splice(indexTrashNote, 1);
    trashNotes.push(trashNote);

    let trashNoteTitle = archiveNotesTitles.splice(indexTrashNote, 1);
    trashNotesTitles.push(trashNoteTitle);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

//notiz verschieben in den Papierkorb

function renderTrashNotes() {
    let trashContentRef = document.getElementById("trash_content");
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

//notiz entgültig löschen

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage();
    renderNotes();
    renderTrashNotes();
}

//Notize switches

function noteToTrasch(indexNote) {
    let moveToTrash = notes.splice(indexNote, 1);
    trashNotes.push(moveToTrash);

    let titleMoveToTrash = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(titleMoveToTrash);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
    deleteNote(indexTrashNote);
    
}

function archiveToNote(indexNote) {
    let moveToNote = archiveNotes.splice(indexNote, 1);
    notes.push(moveToNote);

    let titleMoveToNotes = archiveNotesTitles.splice(indexNote, 1);
    notesTitles.push(titleMoveToNotes);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
    deleteNote(indexTrashNote);
    
}

function trashToNote(indexNote) {
    let moveToNote = trashNotes.splice(indexNote, 1);
    notes.push(moveToNote);

    let titleMoveToNotes = trashNotesTitles.splice(indexNote, 1);
    notesTitles.push(titleMoveToNotes);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
    deleteNote(indexTrashNote);
    
}


let allNotes = {
    notesTitles: [],
    notes: [],
    archiveNotes: [],
    archiveNotesTitles: [],
    trashNotes: [],
    trashNotesTitles: [],
};

function renderAllNotes() {
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

//Add note

function addNote() {
    let noteInputRef = document.getElementById("user_input");
    let noteInputTitleRef = document.getElementById("note_title");
    let noteInput = noteInputRef.value;
    let noteTitle = noteInputTitleRef.value;
    if (noteInputRef.value === "") {
        alert("Bitte geben Sie einen Text ein");
        return;
    }

    allNotes.notesTitles.push(noteTitle);
    allNotes.notes.push(noteInput);

    noteInputRef.value = "";
    noteInputTitleRef.value = "";

    renderAllNotes();
}

//Display notes

function renderNotes() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

//Archive notes

function archiveNote(indexNote) {
    let archiveNote = allNotes.notes.splice(indexNote, 1);
    allNotes.archiveNotes.push(archiveNote);

    let archiveNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
    allNotes.archiveNotesTitles.push(archiveNoteTitle);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

//Display note in archive

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById("archive_content");
    archiveContentRef.innerHTML = "";

    for (let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
}

//Delete note from archive

function trashNote(indexTrashNote) {
    let trashNote = allNotes.archiveNotes.splice(indexTrashNote, 1);
    allNotes.trashNotes.push(trashNote);

    let trashNoteTitle = allNotes.archiveNotesTitles.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.push(trashNoteTitle);

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

    for (let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

//Permanently delete note

function deleteNote(indexTrashNote) {
    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    renderAllNotes();
}

//Move note

function moveNote(indexNote, startKey, destinationKey) {
    let moveToNote = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(moveToNote);

    let titleMoveToNotes = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(titleMoveToNotes);

    saveToLocalStorage();
    getFromLocalStorage();
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

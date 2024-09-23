function getNoteTemplate(indexNote) {
    return `
    <p>${allNotes.notesTitles[indexNote]}: ${allNotes.notes[indexNote]} 
    <button onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')">Archivieren</button>
    <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')">Papierkorb</button></p>`;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `
    <p> ${allNotes.archiveNotesTitles[indexArchiveNote]}: ${allNotes.archiveNotes[indexArchiveNote]} 
    <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')">Papierkorb</button>
    <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')">Notiz</button>
    </p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
    <p>${allNotes.trashNotesTitles[indexTrashNote]}: ${allNotes.trashNotes[indexTrashNote]} 
    <button onclick="deleteNote(${indexTrashNote})">Löschen</button>
    <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')">Notiz</button>
    </p>`;
}

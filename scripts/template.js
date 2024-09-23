function getNoteTemplate(indexNote) {
    return `<p>${notesTitles[indexNote]}: ${notes[indexNote]} <button onclick="archiveNote(${indexNote})">Archivieren</button><button onclick="noteToTrasch(${indexNote})">Papierkorb</button></p>`;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return `<p> ${archiveNotesTitles[indexArchiveNote]}: ${archiveNotes[indexArchiveNote]} <button onclick="trashNote(${indexArchiveNote})">Papierkorb</button><button onclick="archiveToNote(${indexArchiveNote})">Notiz</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>${trashNotesTitles[indexTrashNote]}: ${trashNotes[indexTrashNote]} <button onclick="deleteNote(${indexTrashNote})">Löschen</button><button onclick="trashToNote(${indexTrashNote})">Notiz</button></p>`;
}

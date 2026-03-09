function loadNotes(notesData, subjectFolder) {
    const notesList = document.getElementById('notes-list');
    
    if (!notesList) return;
    
    if (notesData.length === 0) {
        notesList.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #666; background: white; border-radius: 15px;">
                <h3>📝 No notes yet</h3>
                <p>Add notes data above to display your PDFs!</p>
            </div>
        `;
        return;
    }
    
    notesList.innerHTML = '';
    
    notesData.forEach((note, index) => {
        const noteCard = createNoteCard(note, subjectFolder);
        notesList.appendChild(noteCard);
    });
}

function createNoteCard(note, subjectFolder) {
    const card = document.createElement('div');
    card.className = 'note-card';
    
    // const pdfPath = `Notes/${subjectFolder}/${note.title}`;
    const pdfPath = note.link ?? `Notes/${subjectFolder}/${note.title}`;
    
    card.innerHTML = `
        <div class="note-title">${note.title}</div>
        <div class="note-description">${note.description}</div>
        <div class="note-buttons">
            <a href="${pdfPath}" target="_blank" class="btn btn-view" rel="noopener">
                👁️ View
            </a>
            <a href="${pdfPath}" download class="btn btn-download">
                ⬇️ Download
            </a>
        </div>
    `;
    
    return card;
}

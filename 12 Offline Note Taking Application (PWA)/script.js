const noteInput = document.getElementById('note-input');
const saveBtn = document.getElementById('save-btn');
const notesList = document.getElementById('notes-list');

let notes = [];

// Notları localStorage'dan yükle
function loadNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notes = JSON.parse(savedNotes);
        renderNotes();
    }
}

// Notları ekranda göster
function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}

// Not kaydetme
function saveNote() {
    const noteText = noteInput.value.trim();
    if (noteText === '') {
        alert('Lütfen notunuzu yazın.');
        return;
    }
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    renderNotes();
}

saveBtn.addEventListener('click', saveNote);

window.addEventListener('load', loadNotes);

// PWA: Service Worker kaydı
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker kayıt başarılı:', reg))
            .catch(err => console.log('Service Worker kayıt hatası:', err));
    });
}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWsWvjLxytCs28p3XVu-7Rkbmnz_h3Y00",
  authDomain: "notes-app-b4da8.firebaseapp.com",
  databaseURL: "https://notes-app-b4da8-default-rtdb.firebaseio.com",
  projectId: "notes-app-b4da8",
  storageBucket: "notes-app-b4da8.firebasestorage.app",
  messagingSenderId: "1098853920990",
  appId: "1:1098853920990:web:a28788f54a7ebe9055524f",
  measurementId: "G-WGM4YMXG5D"
};

// --- 2. INITIALIZE FIREBASE ---
// The firebaseConfig object (not shown here) must be defined above this script.
// It contains your Firebase project keys such as apiKey, databaseURL, etc.
// This line initializes Firebase using that configuration.
firebase.initializeApp(firebaseConfig);

// The firebase.database() method gives us access to the Realtime Database service.
const database = firebase.database();

// Here we create a reference (a pointer) to the 'notes' collection (or path) in our database.
// Every note we add or modify will go under this "notes" node.
const notesRef = database.ref('notes');


// --- 3. GET ELEMENTS FROM THE PAGE ---
// Get the container element from HTML where all notes will be displayed dynamically.
const notesContainer = document.getElementById('notes-container');

// Get the input box where the user types a new note.
const noteInput = document.getElementById('note-input');

// Get the submit button that will trigger adding a new note when clicked.
const submitButton = document.getElementById('submit-button');


// --- 4. CREATE: WRITE DATA TO FIREBASE ---
// Add an event listener to handle click actions on the "Submit" button.
submitButton.addEventListener('click', () => {
 
  // Retrieve the text typed by the user in the input box.
  const noteText = noteInput.value;

  // If the user clicked "Submit" with an empty or whitespace-only input, do nothing.
  if (noteText.trim() === '') return;

  // Push a new note object into the 'notes' path in the Realtime Database.
  // Firebase automatically creates a unique key (ID) for each pushed item.
  notesRef.push({
    text: noteText,          // The actual note text
    timestamp: Date.now()    // Save the current time (milliseconds since 1970)
  });

  // After adding the note to Firebase, clear the input box for the next note.
  noteInput.value = '';
});

notesRef.on('child_added',(snapshot) => {

  const noteId = snapshot.key;
  const newNote = snapshot.val();

const notesElement = createNoteElement(noteId, newNote.text);

notesContainer.prepend(notesElement);

})


function createNoteElement(noteId, noteText) {

  // OUter box
  const noteElement = document.createElement('div');
  noteElement.classList.add('note'); 
  noteElement.setAttribute('data-id', noteId)

  // text
  const noteTextElement = document.createElement('span'); 
  noteTextElement.textContent = noteText;
  noteElement.appendChild(noteTextElement);
 
  // create button
const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-btn');
deleteButton.innerText = 'Delete';

// function of deleting a note
deleteButton.addEventListener('click' , () => {
  deleteNote(noteId);
});

// makes deletebutton????
noteElement.appendChild(deleteButton);

return noteElement;

}

function deleteNote(noteId) {
  // reference to specific note to be deleted 
  const specificNoteRef = database.ref('notes/' + noteId);

  // remove the note from the database
specificNoteRef.remove();



} 
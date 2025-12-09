// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWsWvjLxytCs28p3XVu-7Rkbmnz_h3Y00",
  authDomain: "notes-app-b4da8.firebaseapp.com",
  databaseURL: "https://notes-app-b4da8-default-rtdb.firebaseio.com",
  projectId: "notes-app-b4da8",
  storageBucket: "notes-app-b4da8.firebasestorage.app",
  messagingSenderId: "1098853920990",
  appId: "1:1098853920990:web:8cb812ee03c2abc455524f",
  measurementId: "G-ZNLHN5B8DP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// DOM elements
const notesContainer = document.getElementById("notes-container");
const noteInput = document.getElementById("note-input");
const submitButton = document.getElementById("submit-button");

// Add note
submitButton.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if(noteText !== "") {
    const newNoteRef = db.ref("notes").push();
    newNoteRef.set({
      text: noteText
    });
    noteInput.value = "";
  }
});

// Listen for changes in Firebase
db.ref("notes").on("value", snapshot => {
  notesContainer.innerHTML = ""; // Clear container
  const notes = snapshot.val();
  if(notes) {
    Object.keys(notes).forEach(key => {
      const note = notes[key];
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");

      noteDiv.innerHTML = `
        <span class="note-text">${note.text}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      `;

      // Edit note
      noteDiv.querySelector(".edit-btn").addEventListener("click", () => {
        const newText = prompt("Edit your note:", note.text);
        if(newText !== null) {
          db.ref("notes/" + key).update({ text: newText });
        }
      });

      // Delete note
      noteDiv.querySelector(".delete-btn").addEventListener("click", () => {
        db.ref("notes/" + key).remove();
      });

      notesContainer.appendChild(noteDiv);
    });
  }
});
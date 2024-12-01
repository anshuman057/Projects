document.getElementById("add-btn").addEventListener("click", () => {
  const colorsWithoutGreen = [
    "red",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "silver",
    "gold",
    // Add more colors as needed
  ];

  let noteList = document.getElementById("notes-list");

  // Create the new note element
  const newNote = document.createElement("div");
  newNote.classList.add("notes");

  // Append the new note as a child of the "notes-list" div
  noteList.appendChild(newNote);

  // Assign a random color to the background
  newNote.style.backgroundColor =
    colorsWithoutGreen[Math.floor(Math.random() * colorsWithoutGreen.length)];

  // Add click event listener to the newly created note for writing or editing a note
  newNote.addEventListener("click", () => {
    // Check if the note already has text content
    const existingText = newNote.textContent;
    const noteText = prompt(
      "Edit your note:",
      existingText || "Your note here..."
    );
    if (noteText !== null) {
      newNote.textContent = noteText; // Set the text of the note
    }
  });
});

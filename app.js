const box = document.querySelector(".box");
const dropZone = document.getElementById("dropZone"); // Use the empty array drop zone

box.addEventListener('dragstart', (e) => {
  setTimeout(() => {
    e.target.classList.add("hidden");
  }, 0);
});

box.addEventListener('dragend', (e) => {
  e.target.className = 'box';
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);
  draggedElement.classList.remove("hidden"); // Show the dragged box
  dropZone.appendChild(draggedElement);
  createInnerDiv(); // You can modify this function as needed
});

function createInnerDiv() {
  const mainbox = document.getElementById('mainbox');
  if (mainbox) {
    // Check if the innerDiv already exists
    const innerDiv = document.getElementById('innerDiv');
    if (innerDiv) {
      // Update the existing innerDiv instead of creating a new one
      innerDiv.innerHTML = 'This is the updated inner div';
    } else {
      // Create the innerDiv if it doesn't exist
      var newInnerDiv = document.createElement('div');
      newInnerDiv.id = 'innerDiv';
      newInnerDiv.className = 'box';
      newInnerDiv.draggable = true;
      newInnerDiv.innerHTML = 'This is the inner div';
      mainbox.appendChild(newInnerDiv);
    }
  } else {
    console.error('Mainbox not found!');
  }
}

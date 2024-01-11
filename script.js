let score = 0;
let chances = 3;
let bestStreak = 0;

function startGame() {
  document.getElementById('startButton').style.display = 'none';
  document.getElementById('gameArea').classList.remove('hidden');
  document.querySelector(".mainheading").classList.add("hidden");
  lowerbox.classList.remove("hidden");
  initializeTimeline();
}

function initializeTimeline() {
  // Add historical events to the timeline dynamically
  const timeline = document.getElementById('timeline');
  // Example: You can add events as div elements with specific years or periods.
  // Adjust this part according to your game's requirements.

  // Sample events
  // const events = [
  //   { year: 1776, event: 'Declaration of Independence' },
  //   { year: 1969, event: 'First Moon Landing' },
  //   // Add more events as needed
  // ];

  for (const event of events) {
    const eventElement = document.createElement('div');
    eventElement.innerText = event.year + ': ' + event.event;
    eventElement.classList.add('timeline-event');
    timeline.appendChild(eventElement);
  }
}

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(data);

  // Check if the drop is within the timeline
  if (event.target.id === 'timeline') {
    const timelineRect = document.getElementById('timeline').getBoundingClientRect();
    const middleCardRect = draggedElement.getBoundingClientRect();

    if (middleCardRect.left > timelineRect.left && middleCardRect.right < timelineRect.right) {
      // Correct placement
      score++;
      document.getElementById('score').innerText = 'Score: ' + score;

      if (score === 10) {
        endGame('You Win!');
      }

    } else {
      // Incorrect placement
      chances--;
      updateChances();

      if (chances === 0) {
        endGame('Game Over!');
      }
    }
  }
}

function updateChances() {
  const heartCountElement = document.getElementById('heartCount');
  heartCountElement.innerText = '♥'.repeat(chances);

  if (chances < 3) {
    heartCountElement.style.color = 'black'; // Change color to red or any other color when chances decrease
  }
}

function endGame(result) {
  document.getElementById('gameArea').classList.add('hidden');
  document.getElementById('gameOver').classList.remove('hidden');
  document.getElementById('gameResult').innerText = result;
  document.getElementById('finalScore').innerText = 'Your Score: ' + score;

  if (score > bestStreak) {
    bestStreak = score;
    document.getElementById('bestStreak').innerText = 'New Best Streak: ' + bestStreak;
  }
}


const box=document.querySelector(".box");
const arrangeboxes=document.querySelectorAll(".arrangebox");

box.addEventListener('dragstart',(e)=>{
  // console.log("drag start has been triggered");
  setTimeout(() => {
  e.target.classList.add("hidden");
    
  }, 0);

})

box.addEventListener('dragend',(e)=>{
  // console.log("drag end has been triggered");
  e.target.className='box';

  
})


for (i of arrangeboxes){
  i.addEventListener('dragover',(e)=>{
    e.preventDefault();
    // console.log("drag over has been triggered");
  

  })
  i.addEventListener('dragenter',()=>{
    // console.log("drag enter has been triggered");

  })
  i.addEventListener('dragleave',()=>{
    // console.log("drag leave has been triggered");

  })
  i.addEventListener('drop',(e)=>{
    // console.log("drop has been triggered");
    e.target.append(box);
    createInnerDiv();
    

  })

}


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
      for (i of arrangeboxes){
  i.addEventListener('dragover',(e)=>{
    e.preventDefault();
    // console.log("drag over has been triggered");
  

  })
  i.addEventListener('dragenter',()=>{
    // console.log("drag enter has been triggered");

  })
  i.addEventListener('dragleave',()=>{
    // console.log("drag leave has been triggered");

  })
  i.addEventListener('drop',(e)=>{
    // console.log("drop has been triggered");
    e.target.append(box);
    createInnerDiv();
    

  })

}
    }
  } else {
    console.error('Mainbox not found!');
  }
  
}


const lowerbox=document.querySelector(".lowerbox");
lowerbox.classList.add("hidden"); 















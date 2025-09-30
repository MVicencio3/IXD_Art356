let slot1;
let slot2;
let slot3;
let slot4;
let slot5;
let slot6;


let slot_id1;
let slot_id2;
let slot_id3;
let slot_id4;
let slot_id5;
let slot_id6;

let startScreen;

let gameState = "start"

function preload() {
  slot1 = loadImage("slot1.png");
  slot2 = loadImage("slot2.png");
  slot3 = loadImage("slot3.png");
  slot4 = loadImage("slot4.png");
  slot5 = loadImage("slot5.png");
  slot6 = loadImage("slot6.png");

  startScreen = loadImage("Starterscreen.png");
}




function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(220);

  if (gameState === "start") {
    image(startScreen, 0, 0);
    shuffleslot1();
    shuffleslot2();
    shuffleslot3();
    shuffleslot4();
    shuffleslot5();
    shuffleslot6();
  } else if (gameState === "play") {
    shuffleImage();
  }
}



function shuffleImage() {
  if (slot_id1 == 1) {
    image (slot1, 0, 0)
  } else if (slot_id1 == 2) {
    image(slot2, 0, 0)
  } else if (slot_id1 == 3) {
    image(slot3, 0, 0)
  } else if (slot_id1 == 4) {
    image(slot4, 0, 0)
  } else if (slot_id1 == 5) {
    image(slot5, 0, 0)
  } else if (slot_id1 == 6) {
    image(slot6, 0, 0)  
 }

   if (slot_id2 == 1) {
    image (slot1, 200, 0)
  } else if (slot_id2 == 2) {
    image(slot2, 200, 0)
  } else if (slot_id2 == 3) {
    image(slot3, 200, 0)
  } else if (slot_id2 == 4) {
    image(slot4, 200, 0)
  } else if (slot_id2 == 5) {
    image(slot5, 200, 0)
  } else if (slot_id2 == 6) {
    image(slot6, 200, 0)  
 }
 

  if (slot_id3 == 1) {
    image (slot1, 0, 200)
  } else if (slot_id3 == 2) {
    image(slot2, 0, 200)
  } else if (slot_id3 == 3) {
    image(slot3, 0, 200)
  } else if (slot_id3 == 4) {
    image(slot4, 0, 200)
  } else if (slot_id3 == 5) {
    image(slot5, 0, 200)
  } else if (slot_id3 == 6) {
    image(slot6, 0, 200)  
 }

   if (slot_id4 == 1) {
    image (slot1, 200, 200)
  } else if (slot_id4 == 2) {
    image(slot2, 200, 200)
  } else if (slot_id4 == 3) {
    image(slot3, 200, 200)
  } else if (slot_id4 == 4) {
    image(slot4, 200, 200)
  } else if (slot_id4 == 5) {
    image(slot5, 200, 200)
  } else if (slot_id4 == 6) {
    image(slot6, 200, 200)  
 }

   if (slot_id5 == 1) {
    image (slot1, 0, 400)
  } else if (slot_id5 == 2) {
    image(slot2, 0, 400)
  } else if (slot_id5 == 3) {
    image(slot3, 0, 400)
  } else if (slot_id5 == 4) {
    image(slot4, 0, 400)
  } else if (slot_id5 == 5) {
    image(slot5, 0, 400)
  } else if (slot_id5 == 6) {
    image(slot6, 0, 400)  
 }


  if (slot_id6 == 1) {
    image (slot1, 200, 400)
  } else if (slot_id6 == 2) {
    image(slot2, 200, 400)
  } else if (slot_id6 == 3) {
    image(slot3, 200, 400)
  } else if (slot_id6 == 4) {
    image(slot4, 200, 400)
  } else if (slot_id6 == 5) {
    image(slot5, 200, 400)
  } else if (slot_id6 == 6) {
    image(slot6, 200, 400)  
 }
}


function shuffleslot1() {
  slot_id1 = int(random(1, 7));
}

function shuffleslot2() {
  slot_id2 = int(random(1, 7));
}

function shuffleslot3() {
  slot_id3 = int(random(1, 7));
}

function shuffleslot4() {
  slot_id4 = int(random(1, 7));
}

function shuffleslot5() {
  slot_id5 = int(random(1, 7));
}

function shuffleslot6() {
  slot_id6 = int(random(1, 7));
}

function keyReleased() {

  if (gameState === "start" && keyCode === ENTER) {
    gameState = "play";
  } else if (gameState === "play") {
  if (keyCode === 49) {
    shuffleslot1();
  }
  if (keyCode === 50) {
    shuffleslot2();
  }
  if (keyCode === 51) {
    shuffleslot3();
  }
  if (keyCode === 52) {
    shuffleslot4();
  }
  if (keyCode === 53) {
    shuffleslot5();
  }
  if (keyCode === 54) {
    shuffleslot6();
  }
 }
}

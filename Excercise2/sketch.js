let data;
let img;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTxcAb0FXBzjeQ6Uu8Xhw6Gsx-TRcXtHZ8BatIAe0qyDlrzqeUhMGqoUpnE8cguYg1mrYWOw-AxapDp/pub?gid=0&single=true&output=csv";

function preload() {
  data = loadTable(url, "csv", "header");
  img = loadImage("arm.png"); // your PNG
}

function setup() {
  createCanvas(400, 800);
  imageMode(CENTER);
  textFont('Arial');
}

function draw() {
  background(100);

  if (data) {
    let numRows = data.getRowCount();
    let proteins = data.getColumn("Protein");
    let names = data.getColumn("Food");

    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Protein", width / 2, 50);

    for (let i = 0; i < numRows; i++) {
      let x = width / 2;
      let y = 120 + i * 110; // spacing between each food entry
      let size = proteins[i] * 4; // scale the image size directly from protein

      // draw the food name first (above the image)
      fill(255);
      textSize(14);
      text(names[i], x, y - size / 2 - 10);

      // draw the image below the name
      image(img, x, y, size, size);
    }
  }
}

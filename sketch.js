function setup() {
  createCanvas(windowWidth, windowHeight);

  circlegrid = new Circlegrid();
  circlegrid.prepare(int(random(2, 5)));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  circlegrid.display(10, 10, windowWidth - 20, windowHeight - 20);
}

class Circlegrid {
  //this will need to have a start position specced probably in the display part

  constructor() {
    this.randomX = [];
    this.randomY = [];
  }

  prepare(tempG) {
    this.randSumX = 0;
    this.randSumY = 0;
    this.gridSize = tempG;
    this.randomX = new Array(this.gridSize);
    for (let i = 0; i < this.randomX.length; i++) {
      this.randomX[i] = random(0.1, 2);
      this.randSumX += this.randomX[i];
    }
    this.randomY = new Array(this.gridSize);
    for (let i = 0; i < this.randomY.length; i++) {
      this.randomY[i] = random(0.1, 2);
      this.randSumY += this.randomY[i];
    }
  }

  display(gridBeginX, gridBeginY, gridWidth, gridHeight) {
    this.grdHt = gridHeight;
    this.grdWt = gridWidth;

    ellipseMode(CORNER);

    this.startX = gridBeginX;
    this.startY = gridBeginY;
    let index = 0;
    for (let j = 0; j < this.randomY.length; j++) {
      let cellHeight = map(this.randomY[j], 0, this.randSumY, 0, this.grdHt);
      for (let i = 0; i < this.randomX.length; i++) {
        let cellWidth = map(this.randomX[i], 0, this.randSumX, 0, this.grdWt);
        noStroke();
        //fill(255, 200, 110);
        fill(0);
        ellipse(this.startX, this.startY, cellWidth, cellHeight);
        // rect(this.startX, this.startY, cellWidth, cellHeight,20);
        this.startX += cellWidth;
        index++;
      }
      this.startX = gridBeginX;
      this.startY += cellHeight;
    }
  }
}

function mousePressed() {
  circlegrid.prepare(int(random(2, 5)));
}

function keyPressed(){
  save();
}
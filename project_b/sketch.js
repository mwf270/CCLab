let ingredients = [];
let counterToBlue = 0;
let specialBackgroundColor;

function setup() {
  createCanvas(600, 600);
  let avocado = new Avocado("avocado", 300, 0);
  ingredients.push(avocado);
  let ketchup = new Ketchup("ketchup", 300, 0);
  ingredients.push(ketchup);
  let mayo = new Mayo("mayo", 400, 50);
  ingredients.push(mayo);
  let chicken = new Chicken("chicken", 300, 50);
  ingredients.push(chicken);
  let sausage = new Sausage("sausage", 200, 0);
  ingredients.push(sausage);
}

function draw() {
  if (counterToBlue == 0) {
    background(100, 210, 255);
  } else {
    background(specialBackgroundColor);
    counterToBlue = counterToBlue - 1;
  }

  if (random(100) > 99.5) {
    let avocado = new Avocado("avocado", random(width), 0);
    ingredients.push(avocado);
  }
  if (random(100) > 99.7) {
    let ketchup = new Ketchup("ketchup", 300, 0);
    ingredients.push(ketchup);
  }
  if (random(100) > 99.6) {
    let mayo = new Mayo("mayo", 400, 50);
    ingredients.push(mayo);
  }
  if (random(100) > 99.7) {
    let chicken = new Chicken("chicken", 300, 50);
    ingredients.push(chicken);
  }
  if (random(100) > 99.5) {
    let sausage = new Sausage("sausage", 200, 0);
    ingredients.push(sausage);
  }

  push();
  let x = mouseX;
  //x = constrain(x, 100, 500);
  let y = mouseX - 100;
  y = constrain(x, 100, 500);

  //Pan Adentro
  fill(255);
  stroke(205, 140, 10);
  strokeWeight(3);
  ellipse(x, 625 - 75, 200, 75, 10);
  
  //Pan Afuera
  fill(250, 190, 70);
  ellipse(x, 640 - 75, 200, 60, 10);

  //line(x - 20, 640 - 65 - 40, x + 40, 590 - 55 + 40);
  //line(x - 20, 640 - 45 - 30, x + 40, 590 - 35 + 40);
  //line(x - 40, 645 - 65 - 40, x + 60, 595 - 55 + 40);
  pop();

  for (let i = 0; i < ingredients.length; i++) {
    ingredients[i].move();
    ingredients[i].display();
  }
}

class Avocado {
  constructor(avocado, x, y) {
    this.x = x;
    this.y = y;

    this.speedY = 4;
    this.falling = true;
  }
  move() {
    if (this.falling) {
      let oldY = this.y;

      this.y = this.y + this.speedY;

      if (oldY < 600 - 75 && this.y >= 600 - 75) {
        if (this.x > mouseX - 100 && this.x < mouseX + 100) {
          this.falling = false;
          counterToBlue = 60;
          specialBackgroundColor = color(95, 235, 140);
        }
      }
    } else {
      this.x = mouseX - 3;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    //Body of Avocado
    fill(95, 235, 140);
    stroke(45, 175, 85);
    strokeWeight(2);
    ellipse(0, 0, 50, 60);
    ellipse(0, -20, 40, 60);

    //Center of Avocado
    fill(145, 110, 30);
    stroke(120, 90, 25);
    ellipse(0, 0, 30, 30);
    pop();
  }
}

class Mayo {
  constructor(mayo, x, y) {
    this.x = x;
    this.y = y;

    this.speedY = 6;
    this.falling = true;
  }
  move() {
    if (this.falling) {
      let oldY = this.y;

      this.y = this.y + this.speedY;

      if (oldY <= 600 - 75 && this.y >= 600 - 75) {
        if (this.x > mouseX - 100 && this.x < mouseX + 100) {
          this.falling = false;
          counterToBlue = 60;
          specialBackgroundColor = color(255);
        }
      }
    } else {
      this.x = mouseX - 3;
    }
  }

  display() {
    push();
    translate(this.x, this.y);

    //Body
    fill(255);
    stroke(255);
    rect(0, 0, 40, 70);

    //Center
    stroke(10, 15, 160);
    fill(60, 95, 240);
    rect(5, 5, 30, 55);

    //Tag
    fill(100, 210, 255);
    stroke(255);
    rect(0, 20, 40, 15);

    //Text
    fill(255);
    //textAlign(CENTER);
    text("M", 15, 32);
    pop();
  }
}

class Ketchup {
  constructor(ketchup, x, y) {
    this.x = x;
    this.y = y;

    this.speedY = 7;
    this.falling = true;
  }
  move() {
    if (this.falling) {
      let oldY = this.y;

      this.y = this.y + this.speedY;

      if (oldY <= 600 - 75 && this.y >= 600 - 75) {
        if (this.x > mouseX - 100 && this.x < mouseX + 100) {
          this.falling = false;
          counterToBlue = 60;
          specialBackgroundColor = color(200, 30, 30);
        }
      }
    } else {
      this.x = mouseX - 3;
    }
  }
  display() {
    push();
    fill(200, 30, 30);
    //stroke(135,20,20);
    stroke(120, 45, 45);
    strokeWeight(2);
    translate(this.x, this.y);

    //Package
    rect(0, 0, 40, 70);
    fill(255);
    rect(5, 5, 30, 55);

    //Tomato
    fill(200, 30, 30);
    ellipse(20, 40, 23, 17);
    fill(45, 175, 85);
    noStroke();
    ellipse(20, 32, 15, 5);
    rect(17, 25, 5, 7);
    pop();
  }
}
class Chicken {
  constructor(chicken, x, y) {
    this.x = x;
    this.y = y;

    this.speedY = 4;
    this.falling = true;
  }
  move() {
    if (this.falling) {
      let oldY = this.y;

      this.y = this.y + this.speedY;

      if (oldY <= 600 - 75 && this.y >= 600 - 75) {
        if (this.x > mouseX - 100 && this.x < mouseX + 100) {
          this.falling = false;
          counterToBlue = 60;
          specialBackgroundColor = color(215, 160, 25);
        }
      }
    } else {
      this.x = mouseX - 3;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    //Bone
    fill(255);
    stroke(245, 200, 95);
    strokeWeight(2);
    rect(15, -10, 50, 15);
    noStroke();
    ellipse(65, -10, 15, 15);
    ellipse(65, 5, 15, 15);

    //Meat
    stroke(180, 140, 15);
    strokeWeight(2);
    fill(215, 160, 25);
    ellipse(0, 0, 60, 50);
    pop();
  }
}

class Sausage {
  constructor(sausage, x, y) {
    this.x = x;
    this.y = y;

    this.speedY = 5;
    this.falling = true;
  }
  move() {
    if (this.falling) {
      let oldY = this.y;

      this.y = this.y + this.speedY;

      if (oldY <= 600 - 75 && this.y >= 600 - 75) {
        if (this.x > mouseX - 100 && this.x < mouseX + 100) {
          this.falling = false;
          counterToBlue = 60;
          specialBackgroundColor = color(240, 65, 65);
        }
      }
    } else {
      this.x = mouseX - 3;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    //Centro del Chorizo
    fill(255, 110, 110);
    noStroke();
    ellipse(0, 0, 70, 15);

    //Puntas del Chorizo
    rotate(radians(25));
    ellipse(-34, 10, 30, 13);
    rotate(radians(130));
    ellipse(-34, -10, 30, 13);
    pop();
  }
}

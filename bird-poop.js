function setup() {
  createCanvas(400, 400);
}

let poops = [];

function draw() {
  background(200, 240, 255, 20);

  for (let i = 0; i < poops.length; i++) {
    noStroke();
    fill(poops[i].color, poops[i].color, poops[i].color, poops[i].opacity);
    ellipse(poops[i].x, poops[i].y, 5, 5);
    poops[i].y += 1.25;
    if (poops[i].y > poops[i].r) {
      poops[i].y = poops[i].r;
      poops[i].opacity--;
      if (poops[i].opacity <= 0) {
        poops.splice(i, 1);
      }
    }
  }
}
function mouseClicked() {
  if (mouseY <= 400) {
    poops[poops.length] = {
      x: mouseX,
      y: mouseY,
      color: random(100, 300),
      r: random(mouseY + 50, 400),
      opacity: 255,
    };
  }
}

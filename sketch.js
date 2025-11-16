// ========================
// 800x800 Canvas – CircleArt Sequential Pop-In
// ========================
let cnv;
let circles = [];
let startTime;

function setup() {
  cnv = createCanvas(800, 800);
  centerCanvas();
  angleMode(DEGREES);
  startTime = millis();

  // Sequential delay settings
  let delay = 0;
  const delayStep = 800; // 0.8s between each circle

  // Add all 12 circles
  circles.push(new CircleArt(10, 10, 1.0, drawCircle6, delay));
  delay += delayStep;
  circles.push(new CircleArt(220, 180, 0.9, drawCircle4, delay));
  delay += delayStep;
  circles.push(new CircleArt(400, -30, 0.4, drawCircle7, delay));
  delay += delayStep;
  circles.push(new CircleArt(530, 180, 0.6, drawCircle8, delay));
  delay += delayStep;
  circles.push(new CircleArt(785, 80, 0.8, drawCircle4, delay));
  delay += delayStep;
  circles.push(new CircleArt(-45, 270, 0.9, drawCircle3, delay));
  delay += delayStep;
  circles.push(new CircleArt(154, 460, 1.4, drawCircle1, delay));
  delay += delayStep;
  circles.push(new CircleArt(434, 460, 1.4, drawCircle2, delay));
  delay += delayStep;
  circles.push(new CircleArt(760, 410, 1.2, drawCircle3, delay));
  delay += delayStep;
  circles.push(new CircleArt(20, 700, 1, drawCircle5, delay));
  delay += delayStep;
  circles.push(new CircleArt(295, 730, 1.1, drawCircle6, delay));
  delay += delayStep;
  circles.push(new CircleArt(610, 730, 0.7, drawCircle7, delay));

  loop(); // ensure draw() loops for animation
}

function draw() {
  clear();
  drawBackgroundGrid();
  drawAllCircles();
}

// ==================== CircleArt Class ====================
class CircleArt {
  constructor(x, y, baseScale, drawFn, startDelay) {
    this.x = x;
    this.y = y;
    this.baseScale = baseScale;
    this.drawFn = drawFn;
    this.startDelay = startDelay;

    this.popDuration = 1200; // pop-in duration
    this.totalDuration = 30000;
    this.fadeDuration = 8000;

    this.angle = random(0, 360); // random initial rotation
    this.rotationSpeed = random(0.03, 0.08); // rotation speed

    this.alpha = 0;
  }

  display() {
    const elapsed = millis() - startTime;
    const t = elapsed - this.startDelay;

    if (t < 0) return; // not started yet

    // Pop-in scaling
    let scaleFactor = 1;
    if (t < this.popDuration) {
      const p = t / this.popDuration;
      scaleFactor = easeOutCubic(p);
    }

    // Rotation
    this.angle += this.rotationSpeed * deltaTime;

    // Fade out after total duration
    if (t > this.totalDuration) {
      const fadeT = (t - this.totalDuration) / this.fadeDuration;
      this.alpha = 1 - constrain(fadeT, 0, 1);
    } else {
      this.alpha = 1;
    }

    if (this.alpha <= 0) return;

    push();
    drawingContext.save();
    drawingContext.globalAlpha = this.alpha;

    translate(this.x, this.y);
    rotate(this.angle);
    scale(this.baseScale * scaleFactor);
    this.drawFn();

    drawingContext.restore();
    pop();
  }
}

// ==================== Helper Functions ====================
function drawAllCircles() {
  for (const c of circles) c.display();
}

function easeOutCubic(t) {
  return 1 - pow(1 - t, 3);
}

// ==================== Background Grid ====================
function drawBackgroundGrid() {
  const cols = ['#d14a2a', '#4c95e0', '#558f48', '#de7b2e'];
  const cell = width / 2;

  noStroke();
  fill(cols[0]); rect(0, 0, cell, cell);
  fill(cols[1]); rect(cell, 0, cell, cell);
  fill(cols[2]); rect(0, cell, cell, cell);
  fill(cols[3]); rect(cell, cell, cell, cell);

  randomSeed(9103);
  const dotConfig = [
    { gx: 0, gy: 0, count: 25, rMin: 15, rMax: 45 },
    { gx: 1, gy: 0, count: 25, rMin: 15, rMax: 45 },
    { gx: 0, gy: 1, count: 15, rMin: 10, rMax: 36 },
    { gx: 1, gy: 1, count: 15, rMin: 10, rMax: 36 }
  ];

  for (const q of dotConfig) {
    const baseX = q.gx * cell;
    const baseY = q.gy * cell;
    for (let i = 0; i < q.count; i++) {
      const r = random(q.rMin, q.rMax);
      const margin = 10;
      const cx = baseX + random(margin + r, cell - margin - r);
      const cy = baseY + random(margin + r, cell - margin - r);
      fill(0);
      noStroke();
      circle(cx, cy, r);
    }
  }
}

function centerCanvas() {
  const x = max(0, (windowWidth - width) / 2);
  const y = max(0, (windowHeight - height) / 2);
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

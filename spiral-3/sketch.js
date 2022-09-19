let scale = 2;

let theta1 = 0;
let cx1 = 800 / 2, cy1 = 800 / 2;
let x1, y1;
let px1 = x1, py1 = y1;

let theta2 = 0;
let cx2 = 800 / 2, cy2 = 800 / 2;
let x2, y2;
let px2 = x2, py2 = y2;

function setup() {
    createCanvas(800, 800);
    noFill();
    ellipseMode(RADIUS);

    background("black");
    theta1 = 0;
    cx1 = 800 / 2, cy1 = 800 / 2;
    x1, y1;
    px1 = x1, py1 = y1;

    theta2 = 0;
    cx2 = 800 / 2, cy2 = 800 / 2;
    x2, y2;
    px2 = x2, py2 = y2;
}



function draw() {
    let t = (frameCount + 100) / 100
    let i = Math.floor(t);

    let radius1 = F(i) * scale;

    px1 = x1;
    py1 = y1;

    x1 = cx1 + radius1 * cos((t - 1) * PI / 2);
    y1 = cy1 + radius1 * sin((t - 1) * PI / 2);
    strokeWeight(2);
    stroke(0, 0, 255, 255);
    line(px1, py1, x1, y1);
    strokeWeight(4);
    stroke(0, 0, 255, 64);
    line(px1, py1, x1, y1);

    if ((frameCount + 100) % 100 == 0) {
        let step = F(i - 2) * scale;
        cx1 += step * sin(theta1);
        cy1 -= step * cos(theta1);
        theta1 += PI / 2;
    }

    let radius2 = G(i) * scale;

    px2 = x2;
    py2 = y2;

    x2 = cx2 + radius2 * cos((t - 1) * PI / 2);
    y2 = cy2 + radius2 * sin((t - 1) * PI / 2);
    strokeWeight(2);
    stroke(0, 255, 0, 255);
    line(px2, py2, x2, y2);
    strokeWeight(4);
    stroke(0, 255, 0, 64);
    line(px2, py2, x2, y2);

    if ((frameCount + 100) % 100 == 0) {
        let step = G(i - 2) * scale;
        cx2 += step * sin(theta2);
        cy2 -= step * cos(theta2);
        theta2 += PI / 2;
    }

    if (frameCount > 60 * 6) {
        setup();
    }
}

function F(n) {
    let a = 0, b = 1, c = 0;
    if (n == 0) return a;
    if (n == 1) return b;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

function G(n) {
    return Math.pow(2, n);
}


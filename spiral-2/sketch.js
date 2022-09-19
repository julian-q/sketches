function setup() {
    createCanvas(500, 500);
    background("black");
    noFill();
    stroke("white");
    ellipseMode(RADIUS);
}

let scale = 2;
let theta = 0;
let cx = 500 / 2, cy = 500 / 2;
let x, y;
let px = x, py = y;

function draw() {
    let t = (frameCount + 100) / 100
    let i = Math.floor(t);
    let radius = F(i) * scale;

    px = x;
    py = y;

    x = cx + radius * cos((t - 1) * PI / 2);
    y = cy + radius * sin((t - 1) * PI / 2);
    strokeWeight(2);
    stroke("white")
    line(px, py, x, y);

    if ((frameCount + 100) % 100 == 0) {
        let step = F(i - 2) * scale;
        cx += step * sin(theta);
        cy -= step * cos(theta);
        theta += PI / 2;
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


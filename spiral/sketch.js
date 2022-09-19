function setup() {
    createCanvas(500, 500);
    background("black");
    noFill();
    stroke("white");
    ellipseMode(RADIUS);
}

function draw() {
    let scale = mouseX * 0.01;
    let theta = 0;
    let x = width / 2, y = height / 2;

    background("black");

    for (let i = 1; i <= 10; i++) {
        let radius = F(i) * scale;
        arc(x, y, radius, radius, theta, theta + PI / 2);
        let step = F(i - 1) * scale;
        x += step * sin(theta);
        y -= step * cos(theta);
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

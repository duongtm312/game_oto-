function myCanvas() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    return ctx;
}

function drawCar(i, x, y) {
    base_image = new Image();
    base_image.src = `oto${i}.png`;
    base_image.onload = function () {
        ctx.drawImage(base_image, x, y, 45, 45);
    }
}

function clearCanvas(x, y) {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(x, y, 600, 600);

}

let ctx = myCanvas();
let x = 0;
let y = 0;
let i = 1;
let a = 250;
let b = 150;
let count = 0;
drawCar(i, x, y);

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            goCar(-20, 0, 4)
            break;
        case 39:
            goCar(20, 0, 2);
            break;
        case 38:
            goCar(0, -20, 1);
            break
        case 40:
            goCar(0, 20, 3);
            break
    }
}

function goCar(t, p, o) {
    clearCanvas(x, y)
    x = x + t;
    y = y + p
    i = o;
    drawCar(i, x, y);
    drawCoin()
    checkLose()
    checkpoint()
}

function checkLose() {
    if (x > 560 || x < 0 || y > 560 || y < 0) {
        count = 0;
        x = 200, y = 200
        document.getElementById("point").innerHTML = "Điểm :" + count
        clearCanvas()
        drawCar()
    }
}

function checkpoint() {
    if (a > x && a < x + 45 && b < y + 45 && b > y) {
        a = radom()
        b = radom()
        drawCoin(a, b)
        drawCar(i, x, y)
        count++
        document.getElementById("point").innerHTML = "Điểm :" + count
    }
}

function radom() {
    let r = Math.random() * 400
    return r
}

function drawCoin() {
    ctx.fillStyle = "#ff0066"
    ctx.fillRect(a, b, 20, 20);
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}

drawCoin()
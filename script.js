let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let background = new Image();
let carimg= new Image();
let coinimg=new Image();
let x=0;
let y=-5;
let img=1
let fame=60
let count=0;
let check=true;
background.src="hinhnen.jpg";
coinimg.src="coin.png";
carimg.src;

let car={
    x:400,
    y:200
}
let coin= {
    x: Math.floor(Math.random()*100 )*5,
    y: Math.floor(Math.random()*100 )*5,
}
console.log(coinimg);
console.log(coin)

function run(){
    ctx.drawImage(background,0,0)
    carimg.src=`oto${img}.png`
    ctx.drawImage(carimg,car.x,car.y,30,30)
    ctx.drawImage(coinimg,coin.x,coin.y,30,30)
    car.x+=x;
    car.y+=y;
    if (car.x + 30> 800 || car.x < 0 || car.y+30 > 400 || car.y < 0) {
        count = 0;
        car.y = 200, car.y = 200
        document.getElementById("point").innerHTML = "Điểm :" + count
        return;
    }
    if (car.x==coin.x+15&&car.y==coin.y){
        count++
        document.getElementById("point").innerHTML = "Điểm :" + count
    }
    // requestAnimationFrame(run)
    setTimeout(run,fame)

}

run()
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            x=-5
            y=0
            img=4
            break;
        case 39:
            x=5
            y=0
            img=2
            break;
        case 38:
            x=0
            y=-5
            img=1
            break
        case 40:
            x=0
            y=5
            img=3
            break
        case 17:
            if (check){
                fame=10;
                check=false;
            }else {
                fame=60;
                check=true;
            }
    }
}



function docReady() {
    window.addEventListener('keydown', moveSelection);
}
var canvas = document.getElementById('canvas');

var c = canvas.getContext("2d");

var v = canvas.width = window.innerWidth -3;
var h = canvas.height = window.innerHeight -3;


d_x =0;
d_y = 0;

document.onkeydown = function () {
    switch (e.keyCode){
        case 37:
            d_x _=20;
            break;
        case 38:
            d_x _=20;
            break;
        case 39:
            d_x _=20;
            break;
        case 40:
            d_x _=20;
            break;
    }
};


//Kvadratas
// c.moveTo((v/2)-200,300 );
// c.lineTo((v/2)-200,600 );
// c.lineTo((v/2)+200,600 );
// c.lineTo((v/2)+200,300 );
// c.lineTo((v/2)-200,300);
// c.lineTo(v / 2,100);
// c.lineTo((v/2)+200,300);
// c.fillStyle = "red";
// c.fill();
// c.stroke();
//
//Skritulis
// c.fillStyle = "green";
// c.beginPath();
// c.arc(200,200,100,0,2*Math.PI);
// c.fill();
// c.stroke();
//
// c.fillStyle = "white";
// c.beginPath();
// c.arc(200,200,90,0,2*Math.PI);
// c.fill();
// c.stroke();

//rutuliukai

// function buble() {
//
//     for (var i = 0; i < 20; i++) {
//         var x = Math.random() * window.innerWidth;
//         var y = Math.random() * window.innerHeight;
//
//         var r = Math.floor(Math.random() * 255);
//         var g = Math.floor(Math.random() * 255);
//         var b = Math.floor(Math.random() * 255);
//
//         var radius = (Math.random() * 25) + 5;
//
//
//         c.fillStyle = 'rgb(' + r + ', ' + g + ',' + b + ')';
//         c.beginPath();
//         c.arc(x, y, radius, 0, 2 * Math.PI);
//         c.fill();
//     }
// }
//
//

//atsokantis rutuliukas
// var x = 100;
// var y = 100;
// var dx = 4;
// var dy = 4;
// var radius = 20;
//
// function animate(){
//     requestAnimationFrame(animate);
//
//     c.clearRect(0,0,innerWidth,innerHeight);
//
//     c.fillStyle = 'black';
//     c.beginPath();
//     c.arc(x , y , radius, 0, 2 * Math.PI);
//     c.fill();
//
//     if(x + radius >= innerWidth || x - radius < 0){
//         dx = - dx;
//     }
//
//     if(y + radius >= innerHeight || y - radius < 0){
//         dy = - dy;
//     }
//
//     x += dx;
//     y += dy;
//
// }
// animate();
// buble();


function Circle(x,y,dx,dy,radius) {

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.update = function () {

        if (this.x + this.radius >= innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius >= innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.drow();
    }

    this.drow = function () {
        c.fillStyle = 'green';
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fill();
    }
}

    var circleArrey = [];

    for (i = 0; i < 100; i++) {
        var x = Math.floor(Math.random() * (window.innerWidth - 20) + 20);
        var y = Math.floor(Math.random() * (window.innerWidth - 20) + 20);
        var dx = (Math.random() - 0.5) * 10;
        var dy = (Math.random() - 0.5) * 10;
        circleArrey.push(new Circle(x, y, dx, dy, 20));

    }


    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0,0,innerWidth,innerHeight);

        for (var i = circleArrey.length - 1; i >= 0; i--) {
            circleArrey[i].update();
        }
    }
animate();








var canvas = document.getElementById("game");
var c = canvas.getContext("2d");

console.log(c);
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

c.fillStyle = "lime";
c.fillRect(350, 150, 100, 100);
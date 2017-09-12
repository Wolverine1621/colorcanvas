var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;

function draw(e) {
  var clickX = e.pageX;
  var clickY = e.pageY;
  var radius = generateRadius();

  //ctx.fillStyle = "#2980b9";
  ctx.fillStyle = generateRGB();
  ctx.beginPath();
  ctx.arc(clickX, clickY, radius, 0, 2 * Math.PI);
  ctx.fill();
}

function generateRadius() {
  return Math.random() * (50 - 10) + 10;
}

function generateColor() {
  var num = Math.round(Math.random() * 255);
  return Math.round(Math.random() * 255);
}

function generateRGB() {
  var color = {
    r: generateColor(),
    g: generateColor(),
    b: generateColor()
  };

  return "rgb(" + color.r + "," + color.g + "," + color.b +")";
}

window.onresize = function() {
  c.width = window.innerWidth;
  c.height = window.innerHeight;
}

$(window).keypress(function(e) {
  if (e.keyCode == 0 || e.keyCode == 32) {
    document.getElementById("canvas").style.background = generateRGB();
  }
});

$(document).keydown(function(e) {
  if (e.keyCode == 8) {
    ctx.clearRect(0, 0, c.width, c.height);
  }
});

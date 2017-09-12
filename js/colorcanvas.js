var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var defaultColor;
var defaultRadius;
var globalMouseState = 0 // 0 is up, 1 is down
var mouseJustUp = 0 // Handles the circle drawn immediately after the mouseup event

c.width = window.innerWidth;
c.height = window.innerHeight;

// Main function
function draw(e) {
  var clickX = e.pageX;
  var clickY = e.pageY;

  if (globalMouseState === 1 || mouseJustUp === 1) { // If circles are being drawn while mouse is down
    ctx.fillStyle = defaultColor;
    ctx.beginPath();
    ctx.arc(clickX, clickY, defaultRadius, 0, 2 * Math.PI);
    ctx.fill();
    mouseJustUp = 0;
  } else {
    var radius = generateRadius();
    ctx.fillStyle = generateRGB();
    ctx.beginPath();
    ctx.arc(clickX, clickY, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}


// Helper methods
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


// Event handlers
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

// Drag and Draw functionality
$(document).mousedown(function(){
    globalMouseState = 1;
    defaultColor = generateRGB();
    defaultRadius = generateRadius();
});

$(document).mouseup(function(){
    globalMouseState = 0;
    mouseJustUp = 1;
});

$(document).mousemove(function(e){
    if (globalMouseState === 1) {
      draw(e);
    }
});

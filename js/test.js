var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var letterPosX = [174,208,246,283,309,327,338,339,333,310,282,251,217,175,138,100,65,36,24,10,10,19,41,63,101,136];
var letterPosY = [13,17,26,47,78,114,156,192,231,266,295,314,332,333,331,315,297,272,236,197,159,115,81,50,28,17];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}


//Change to 'mousemove', comment out lines 20+21 and uncomment 22 if you want the other mode it's pretty cool too
canvas.addEventListener('mousedown', function(evt) {
  ctx.clearRect (0, 0, canvas.width, canvas.height);
  var mousePos = getMousePos(canvas, evt);
  var theWord = prompt("Enter some text", "and");
  drawWords(canvas, theWord);
  //drawLine(canvas, mousePos.x, mousePos.y);
}, false);


function drawLine(canvas, xCord, yCord){
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  //Mode 1
  //ctx.moveTo(xCord, yCord);
  //ctx.bezierCurveTo(Math.floor(Math.random()*1000),Math.floor(Math.random()*500), 1000 - xCord, 1000 - yCord, 0, 0)

  // Mode 2
  //ctx.moveTo(Math.floor(Math.random()*1000), Math.floor(Math.random()*500));
  //ctx.bezierCurveTo(1000 - xCord, 1000 - yCord, xCord, yCord, 0, 0)

  //Mode 3
  //ctx.moveTo(Math.floor(Math.random()*1000), Math.floor(Math.random()*500));
  //ctx.bezierCurveTo(xCord, yCord, 0, 0, 1000 - xCord, 1000 - yCord)

  //Mode 4
  //ctx.moveTo(Math.floor(Math.random()*1000), Math.floor(Math.random()*500));
  //ctx.bezierCurveTo(1000 - xCord, 1000 - yCord, 0, 0, xCord, yCord);

  ctx.strokeStyle = '#' + (Math.floor(Math.random()*16777215)).toString(16);
  ctx.stroke();
}

function getLetterPos(letter){
  var letIndex = letters.indexOf(letter);
  if(letIndex == -1){
    return {
      x: 0,
      y: 0
    };
  } else {
    return {
      x: letterPosX[letIndex],
      y: letterPosY[letIndex]
    };
  }
}

function drawWords(canvas, word){
  word = breakWords(word);
  var ctx = canvas.getContext("2d");
  for(i = 0; i < word.length - 3; i++){
    ctx.beginPath();
    ctx.moveTo(174, 177);
    var char1 = word.charAt(i);
    var charPos1 = getLetterPos(char1);
    var char2 = word.charAt(i+1);
    var charPos2 = getLetterPos(char2);
    var char3 = word.charAt(i+2);
    var charPos3 = getLetterPos(char3);
    ctx.bezierCurveTo(charPos1.x, charPos1.y, charPos2.x, charPos2.y, charPos3.x, charPos3.y);
    ctx.strokeStyle = '#' + (Math.floor(Math.random()*16777215)).toString(16);
    ctx.stroke();
  }
}

function breakWords(word){
  word = word.replace(/\s/g, '');
  return word
}

//TO-DO: Make the drawLine thing prettier

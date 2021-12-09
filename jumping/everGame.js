const elements = [
  [0, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0],
  [2, 0, 0, 0, 0, 0],
];
let isHeJump = false;
let speed = 1000;
const bot = {
  x: 5,
  y: 2,
};
let timer;

function moveBot() {
  removebot();
  bot.x--;
  elements[bot.y][bot.x] = 1;
  end()
  draw();
  timer = setTimeout(moveBot, speed);
}

function removebot() {
  elements[bot.y][bot.x] = 0;
  console.log(bot.x);
}

function end(){
    if(bot.x === 0){
        console.log('alim')
        clearTimeout(timer)
        // console.log('d')
        // bot.x = 5
        // moveBot()
    }
}

document.addEventListener("keyup", function (event) {
  if (event.keyCode === 38) {
    isHeJump = true;
    console.log("hi");
    player()  
    setInterval(playerBack, speed);
  }
});

function player(){
if (isHeJump === true) {
  elements[2][0] = 0;
  elements[0][0] = 2;
  draw();
   
}
}
function playerBack(){
    elements[2][0] = 2;
  elements[0][0] = 0;
  draw();

}

for (let i in elements) {
  for (let j in elements[i]) {
    const $main = document.querySelector(".container");
    const $element = document.createElement("div");
    $element.classList.add("bot");
    $element.id = `s-${i}-${j}`;
    $main.append($element);
  }
}
function draw() {
  for (let i in elements) {
    for (let j in elements[i]) {
      if (elements[i][j] === 2) {
        let div = document.getElementById(`s-${i}-${j}`);
        div.classList.add("red");
      }
      if (elements[i][j] === 1) {
        let div = document.getElementById(`s-${i}-${j}`);
        div.classList.add("blue");
      }
      if (elements[i][j] === 0) {
        let div = document.getElementById(`s-${i}-${j}`);
        div.className = "bot";
      }
    }
  }
}
moveBot();

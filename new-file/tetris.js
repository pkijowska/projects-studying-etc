const para = document.createElement('div');
para.className = 'firstElement'
// const node = document.createTextNode("This is new.");
// const findWrapper = document.getElementsByClassName('wrapper')[0]
// findWrapper.appendChild(para);

//move the block
let posDown = 10;
let posLeft = 10;
let rotateNum = 90;

const canvas = document.getElementById("tetris");
const ctx = document.getElementById("tetris").getContext("2d");

const piece = [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 0],
]

const down = 20;
const right = 20;

function createElements(y) {
  const double = x => x;
  const doubledArray = piece.map( subarray => subarray.map( double ));

  const elem = doubledArray.map(function(firstLayer, row) {
    firstLayer.map(function(el, column) {
      console.log(el, row, column)
      if (el === 1) {
        ctx.fillStyle = '#F9DC5C';
        ctx.fillRect(100+(right*column), 20+(down*row)+y, 20, 20);
        // ctx.closePath();
        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        // ctx.restore();
      }

    })
  })
}
function clear() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

document.addEventListener("keydown", function(e) {
  if (e.key === 'ArrowDown' && para.getBoundingClientRect().bottom < 695)
  {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ctx.rotate(10*Math.PI/180);
    // cw = ctx.canvas.height;
    //         cw = ctx.canvas.width;
    //         ch = ctx.canvas.height;
    // ctx.translate(cw, ch / cw);
    // ctx.translate(0,50);
    createElements(posDown);

    ctx.translate(110, 20);
    ctx.rotate(90*Math.PI/180);
    // un-translate the canvas back to origin==top-left canvas

    ctx.translate(-120, -20);
    // para.getBoundingClientRect().y +1;
    // para.style.top = posDown + 20 + 'px';
    posDown = posDown + 20;
    // requestAnimationFrame(clear);
  }

  if (e.key === 'ArrowRight' && para.getBoundingClientRect().right <= 778)
  {
    para.style.left = posLeft + 10 + 'px';
    posLeft = posLeft + 10;
  }

  if (e.key === 'ArrowLeft' && para.getBoundingClientRect().left > 194) {
    para.style.left = posLeft - 10 + 'px';
    posLeft = posLeft - 10;
  }

  if (e.key === 'ArrowUp') {
    para.style.transform = 'rotate('+rotateNum+'deg)'
    console.log(para.style.transform, rotateNum)
    rotateNum = rotateNum + 90;
  }

});

//start game
const startButton = document.querySelector('#start-game');
startButton.addEventListener('click', function(){
    setInterval(function() {
      if (para.getBoundingClientRect().bottom < 695) {
        para.style.top = posDown + 40 + 'px';
        posDown = posDown + 40;
      }
    }, 1000);

})

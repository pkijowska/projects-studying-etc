const para = document.createElement('div');
para.className = 'firstElement'
// const node = document.createTextNode("This is new.");
const findWrapper = document.getElementsByClassName('wrapper')[0]
findWrapper.appendChild(para);

//move the block
let posDown = 10;
let posLeft = 10;
let rotateNum = 90;

document.addEventListener("keydown", function(e) {
  if (e.key === 'ArrowDown' && para.getBoundingClientRect().bottom < 695)
  {
    // para.getBoundingClientRect().y +1;
    para.style.top = posDown + 20 + 'px';
    posDown = posDown + 20;
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

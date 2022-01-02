const para = document.createElement('div');
para.className = 'firstElement'
// const node = document.createTextNode("This is new.");
const findWrapper = document.getElementsByClassName('wrapper')[0]
findWrapper.appendChild(para);
//move the block
let pos = 10;
document.addEventListener("keydown", function(e) {
  if (e.key === 'ArrowDown' && para.getBoundingClientRect().bottom < 695) {
    // para.getBoundingClientRect().y +1;
    para.style.top = pos + 10 + 'px';
    pos = pos + 10;
  }
});

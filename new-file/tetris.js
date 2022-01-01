const para = document.createElement('div');
para.className = 'firstElement'
// const node = document.createTextNode("This is new.");
const findBody = document.getElementsByTagName('body')[0]
findBody.appendChild(para);
console.log(para.getBoundingClientRect().y)
//move the block
document.addEventListener("keydown", function(e) {
  if (e.key === 'ArrowDown') {
    para.getBoundingClientRect().y +1;
    console.log(  para.getBoundingClientRect().y)
  }
});

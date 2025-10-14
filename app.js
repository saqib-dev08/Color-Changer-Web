function bgChanger(){
const mathRan = Math.random()*1677215;
const mathfloor = Math.floor(mathRan);
var randomnum = mathfloor.toString(16);
var hexcode = "#" + randomnum;
document.body.style.backgroundColor = hexcode;

const h3 = document.getElementsByTagName("h3");
h3[1].textContent = hexcode;
}

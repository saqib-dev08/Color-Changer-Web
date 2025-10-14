function bgChanger(){
const mathRan = Math.random()*1677215;
const mathfloor = Math.floor(mathRan);
var randomnum = mathfloor.toString(16);
var hexcode = "#" + randomnum;
document.body.style.backgroundColor = hexcode;

const hexcodeh3 = document.getElementsByTagName("h3");
hexcodeh3[1].textContent = hexcode;

var color = ntc.name(hexcode);
var colorname = color[1]; 
const colornameh3 = document.getElementsByTagName("h3");
colornameh3[0].textContent = "Color Name: " + colorname;


};

bgChanger();


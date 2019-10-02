function test() {
  alert("I am a test alert!");
}

function button1() {
  var elmnt = document.getElementById("red");
  elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function button2() {
  var elmnt = document.getElementById("orange");
  elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function button22() {
  document.querySelector("#orange").scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function button3() {
  var elmnt = document.getElementById("yellow");
  elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function button4() {
  var elmnt = document.getElementById("green");
  elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function button5() {
  var elmnt = document.getElementById("blue");
  elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}
function button6() {
  var elmnt = document.getElementById("purple");
  elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

function myFunction(parameter) {
  var x = parameter;
  document.getElementById(x).scrollIntoView({ block: 'end',  behavior: 'smooth' });
}

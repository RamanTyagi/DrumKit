document.querySelector(".w").addEventListener("click",clickHandler1);
document.querySelector(".a").addEventListener("click",clickHandler2);
document.querySelector(".s").addEventListener("click",clickHandler3);
document.querySelector(".d").addEventListener("click",clickHandler4);
document.querySelector(".j").addEventListener("click",clickHandler5);
document.querySelector(".k").addEventListener("click",clickHandler6);
document.querySelector(".l").addEventListener("click",clickHandler7);
document.addEventListener("keypress",keyPressHandler1);
document.addEventListener("keypress",keyPressHandler2);
document.addEventListener("keypress",keyPressHandler3);
document.addEventListener("keypress",keyPressHandler4);
document.addEventListener("keypress",keyPressHandler5);
document.addEventListener("keypress",keyPressHandler6);
document.addEventListener("keypress",keyPressHandler7);
var audio1 = new Audio('sounds/tom-1.mp3');
var audio2 = new Audio('sounds/tom-2.mp3');
var audio3 = new Audio('sounds/tom-3.mp3');
var audio4 = new Audio('sounds/tom-4.mp3');
var audio5 = new Audio('sounds/crash.mp3');
var audio6 = new Audio('sounds/kick-bass.mp3');
var audio7 = new Audio('sounds/snare.mp3');
function clickHandler1()
{
audio1.play();
document.querySelector(".w").classList.add("pressed");
setTimeout(function(){ document.querySelector(".w").classList.remove("pressed"); }, 100);
}
function clickHandler2()
{
audio2.play();
document.querySelector(".a").classList.add("pressed");
setTimeout(function(){ document.querySelector(".a").classList.remove("pressed"); }, 100);
}
function clickHandler3()
{
audio3.play();
document.querySelector(".s").classList.add("pressed");
setTimeout(function(){ document.querySelector(".s").classList.remove("pressed"); }, 100);
}
function clickHandler4()
{
audio4.play();
document.querySelector(".d").classList.add("pressed");
setTimeout(function(){ document.querySelector(".d").classList.remove("pressed"); }, 100);
}
function clickHandler5()
{
audio5.play();
document.querySelector(".j").classList.add("pressed");
setTimeout(function(){ document.querySelector(".j").classList.remove("pressed"); }, 100);
}
function clickHandler6()
{
audio6.play();
document.querySelector(".k").classList.add("pressed");
setTimeout(function(){ document.querySelector(".k").classList.remove("pressed"); }, 100);
}
function clickHandler7()
{
audio7.play();
document.querySelector(".l").classList.add("pressed");
setTimeout(function(){ document.querySelector(".l").classList.remove("pressed"); }, 100);
}
function keyPressHandler1(event)
{
if(event.key==='w')
{
  audio1.play();
  document.querySelector(".w").classList.add("pressed");
  setTimeout(function(){ document.querySelector(".w").classList.remove("pressed"); }, 100);
}
}
function keyPressHandler2()
{
  if(event.key==='a')
  {
    audio2.play();
    document.querySelector(".a").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".a").classList.remove("pressed"); }, 100);
  }
}
function keyPressHandler3()
{
  if(event.key==='s')
  {
    audio3.play();
    document.querySelector(".s").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".s").classList.remove("pressed"); }, 100);
  }
}
function keyPressHandler4()
{
  if(event.key==='d')
  {
    audio4.play();
    document.querySelector(".d").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".d").classList.remove("pressed"); }, 100);
  }
}
function keyPressHandler5()
{
  if(event.key==='j')
  {
    audio5.play();
    document.querySelector(".j").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".j").classList.remove("pressed"); }, 100);
  }
}
function keyPressHandler6()
{
  if(event.key==='k')
  {
    audio6.play();
    document.querySelector(".k").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".k").classList.remove("pressed"); }, 100);
  }
}
function keyPressHandler7()
{
  if(event.key==='l')
  {
    audio7.play();
    document.querySelector(".l").classList.add("pressed");
    setTimeout(function(){ document.querySelector(".l").classList.remove("pressed"); }, 100);
  }
}

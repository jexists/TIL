

<script></script>
window.onload = function(){};

window.addEventListener;

window.addEventListener('load', function(){});


// ---
var menu = document.querySelector('menu');
function clickHandler(){
  console.log(this);
}
menu.addEventListener('click', clickHandler);
//this = menu =jQuery $(this)랑 같은것

// ---
var menu = document.querySelector('menu');
function clickHandler(e){
  console.log(e);
  console.log(e.target); //진짜 누른애
}
menu.addEventListener('click', clickHandler);

// ---
var currentMenu;
var menu = document.querySelector('menu');
function clickHandler(e){
  if (currentMenu) {
    currentMenu.classList.remove('menu-active');
  }
  e.target.classList.add('menu-active');
  currentMenu = e.target;
}
menu.addEventListener('click', clickHandler);

//== jQuery 이벤트 위임
$('.menu').on('click', 'menu-link', funcion(){
  $(this) //this = menu-link
});

//---- final 정리 (따로 기능을 놓고 이벤트리스너에는 함수만 불러오기)
var currentMenu;
var menu = document.querySelector('menu');

function active(elem) {
  elem.classList.add('menu-active');
  currentMenu = elem;
}
function inactive(elem){
  elem.classList.remove('menu-active');
}
function clickHandler(e){
  if (currentMenu) {
    inactive(currentMenu);
  }
  active(e.target);
}
menu.addEventListener('click', clickHandler); 
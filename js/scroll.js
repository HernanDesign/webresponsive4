const mediaQuery = window.matchMedia('(min-width: 768px)');
let lastScroll=0;
const SCROLL_THRESHOLD=100;

const dropdownMenu=document.querySelector('.navbar-nav')
const barraMenu2=document.querySelector('.barraMenu')


function handleScroll(){

let currentScroll=window.pageYOffset || document.documentElement.scrollTop;
  if(currentScroll===0){
    barraMenu2.style.opacity='1'
  }
 else if (currentScroll>SCROLL_THRESHOLD) {
  
  if(currentScroll>lastScroll){

      barraMenu2.style.opacity='0'
      }
 }
 lastScroll=currentScroll
}

if (mediaQuery.matches) {
window.addEventListener('scroll', handleScroll);
}

// Escuchar cambios en la media query para habilitar o deshabilitar el evento de scroll dinámicamente
mediaQuery.addListener(function (e) {
if (e.matches) {
  window.addEventListener('scroll', handleScroll);
} else {
  window.removeEventListener('scroll', handleScroll);
}
});

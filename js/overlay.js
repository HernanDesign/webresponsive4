
const carritoCheckbox=document.getElementById('carrito-bar')
const menuCheckbox=document.getElementById('menu-bar')

const carritoClose=document.getElementById('carrito-close')



const menuBar=document.getElementById('menu-bar')
const barraMenu=document.querySelector('.barraMenu')

const overlay=document.querySelector('#overlay')

//cierro el carrito si pulso en la X y reseteo el comportamiento del check del carritoBar
document.querySelector('.close-button').addEventListener('click',()=>{
    carritoClose.checked=true;
    carritoCheckbox.checked=false
    overlay.style.display='none';
})

overlay.addEventListener('click',()=>{

  if (menuCheckbox.checked) {
    menuCheckbox.checked=false;       
  }else{
    carritoCheckbox.checked=false;
  }

  overlay.style.display='none';
  
})

function actualizarOverlay() {

  if(menuCheckbox.checked || carritoCheckbox.checked){
    overlay.style.display='block'
  }else{
    overlay.style.display='none'
  }
  
}

menuCheckbox.addEventListener('change',actualizarOverlay)
carritoCheckbox.addEventListener('change',actualizarOverlay)
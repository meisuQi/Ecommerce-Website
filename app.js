const bars=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close');
if(bars){
  bars.addEventListener('click',()=>{
    nav.classList.add('active');
  })
}
if(close){
  bars.addEventListener('click',()=>{
    nav.classList.remove('active');
  })
}

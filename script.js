
const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(btn) btn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('open'));
});

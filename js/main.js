(()=>{
const h=document.querySelector('.site-header'),b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
const s=()=>h.classList.toggle('scrolled',scrollY>20);s();addEventListener('scroll',s,{passive:true});
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',e=>{if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
addEventListener('keydown',e=>{if(e.key==='Escape'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
const els=document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
els.forEach((e,i)=>{e.style.transitionDelay=(i%3)*70+'ms';io.observe(e)});
})();
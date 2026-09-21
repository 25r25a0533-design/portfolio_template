const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const words=['Web Developer','Software Developer','Tech Enthusiast'];
let wi=0,ci=0,deleting=false;
const typing=document.getElementById('typing');
function type(){
  const word=words[wi];
  typing.textContent=word.slice(0,ci);
  if(!deleting){
    ci++;
    if(ci>word.length){deleting=true;setTimeout(type,1100);return;}
  }else{
    ci--;
    if(ci<0){deleting=false;wi=(wi+1)%words.length;ci=0;}
  }
  setTimeout(type,deleting?55:90);
}
type();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(window.scrollY/h*100)+'%';
});
document.getElementById('year').textContent=new Date().getFullYear();

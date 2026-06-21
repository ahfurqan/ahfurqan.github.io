/* ===================================
   NAVBAR SCROLL EFFECT
=================================== */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        navbar.style.background =
        'rgba(5,8,22,.95)';

        navbar.style.boxShadow =
        '0 10px 30px rgba(0,0,0,.25)';

    }else{

        navbar.style.background =
        'rgba(5,8,22,.8)';

        navbar.style.boxShadow =
        'none';
    }

});


/* ===================================
   ACTIVE MENU
=================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href") ===
`#${current}`
){
link.classList.add("active");
}

});

});


/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements =
document.querySelectorAll(

'.glass-card,\
.timeline-item,\
.project-card,\
.stat-card,\
.stack-grid span,\
.architecture-card'

);

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el=>{

el.classList.add('hidden');

revealObserver.observe(el);

});


/* ===================================
   COUNTER ANIMATION
=================================== */

const counters =
document.querySelectorAll('.stat-card h3');

let counterStarted = false;

function animateCounters(){

if(counterStarted) return;

counterStarted = true;

counters.forEach(counter=>{

const text =
counter.innerText;

let target = 0;

if(text.includes('5')){
target = 5;
}

if(text.includes('50')){
target = 50;
}

if(text.includes('99.9')){
target = 100;
}

if(text.includes('24')){
target = 24;
}

let count = 0;

const increment =
target / 60;

const update = ()=>{

count += increment;

if(count < target){

if(target === 100){

counter.innerText =
count.toFixed(1) + '%';

}else{

counter.innerText =
Math.floor(count) + '+';

}

requestAnimationFrame(update);

}else{

if(target === 100){

counter.innerText =
'99.9%';

}else if(target === 24){

counter.innerText =
'24/7';

}else{

counter.innerText =
target + '+';

}

}

};

update();

});

}

const statsSection =
document.querySelector('.stats-section');

if(statsSection){

const statsObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounters();

}

});

},

{
threshold:0.3
}

);

statsObserver.observe(statsSection);

}


/* ===================================
   3D HOVER CARD
=================================== */

const cards =
document.querySelectorAll(

'.project-card,\
.timeline-item,\
.stat-card'

);

cards.forEach(card=>{

card.addEventListener('mousemove',(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5) * 8;

const rotateX =
((y / rect.height)-0.5) * -8;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener('mouseleave',()=>{

card.style.transform = '';

});

});


/* ===================================
   HERO TYPING EFFECT
=================================== */

const heroTitle =
document.querySelector('.hero h2');

if(heroTitle){

const originalText =
heroTitle.innerText;

heroTitle.innerText = '';

let i = 0;

function typeEffect(){

if(i < originalText.length){

heroTitle.innerText +=
originalText.charAt(i);

i++;

setTimeout(typeEffect,40);

}

}

setTimeout(typeEffect,500);

}


/* ===================================
   PARALLAX HERO
=================================== */

window.addEventListener('mousemove',(e)=>{

const profile =
document.querySelector('.profile-card');

if(!profile) return;

const x =
(window.innerWidth / 2 - e.clientX)
/ 40;

const y =
(window.innerHeight / 2 - e.clientY)
/ 40;

profile.style.transform =

`translate(${x}px, ${y}px)`;

});


/* ===================================
   SMOOTH SCROLL
=================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener('click',
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute('href')
);

if(target){

target.scrollIntoView({

behavior:'smooth',
block:'start'

});

}

});

});


/* ===================================
   PROGRESS BAR ANIMATION
=================================== */

const bars =
document.querySelectorAll(
'.bar span'
);

const barObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width =
entry.target.style.width;

entry.target.style.width =
'0';

setTimeout(()=>{

entry.target.style.width =
width;

},200);

}

});

},

{
threshold:0.3
}

);

bars.forEach(bar=>{

barObserver.observe(bar);

});


/* ===================================
   FLOATING GLOW EFFECT
=================================== */

const glow =
document.createElement('div');

glow.classList.add('mouse-glow');

document.body.appendChild(glow);

window.addEventListener('mousemove',(e)=>{

glow.style.left =
e.clientX + 'px';

glow.style.top =
e.clientY + 'px';

});

console.log(
'Ahmad Furqan Portfolio Loaded'
);

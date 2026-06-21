```javascript
/* =====================================
   PORTFOLIO V3
   Ahmad Furqan
===================================== */

/* =====================================
   ACTIVE MENU
===================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.offsetHeight;

if(
window.scrollY >= sectionTop &&
window.scrollY <
sectionTop + sectionHeight
){
current =
section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){
link.classList.add("active");
}

});

});

/* =====================================
   REVEAL ANIMATION
===================================== */

const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(

".card,\
.stat-card,\
.timeline-card,\
.project-card,\
.arch-node,\
.contact-item,\
.skill-item"

)

.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});

/* =====================================
   MOUSE GLOW
===================================== */

const glow =
document.createElement("div");

glow.className =
"mouse-glow";

document.body.appendChild(glow);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);

/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 50){

navbar.style.background =
"rgba(15,23,42,.90)";

navbar.style.borderColor =
"rgba(255,255,255,.10)";

navbar.style.backdropFilter =
"blur(24px)";

}else{

navbar.style.background =
"rgba(15,23,42,.70)";

navbar.style.borderColor =
"rgba(255,255,255,.08)";

}

}
);

/* =====================================
   SMOOTH BUTTON EFFECT
===================================== */

document
.querySelectorAll(
'a[href^="#"]'
)

.forEach(anchor => {

anchor.addEventListener(
"click",

function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

}

);

});

/* =====================================
   HERO TAG ANIMATION
===================================== */

const tags =
document.querySelectorAll(
".hero-tags span"
);

tags.forEach((tag,index)=>{

tag.style.animationDelay =
(index * 0.08) + "s";

});

/* =====================================
   FADE IN HERO
===================================== */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

}
);

/* =====================================
   COUNTER ANIMATION
===================================== */

const counters =
document.querySelectorAll(
".stat-card h3"
);

const animateCounter = (counter)=>{

const target =
counter.innerText;

const numeric =
parseFloat(
target.replace(/[^\d.]/g,"")
);

if(isNaN(numeric))
return;

let current = 0;

const increment =
numeric / 50;

const updateCounter = ()=>{

if(current < numeric){

current += increment;

if(target.includes("%")){

counter.innerText =
current.toFixed(1) + "%";

}
else if(target.includes("+")){

counter.innerText =
Math.floor(current) + "+";

}
else{

counter.innerText =
Math.floor(current);

}

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText =
target;

}

};

updateCounter();

};

const statsObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(

entry.target.querySelector("h3")

);

statsObserver.unobserve(
entry.target
);

}

});

},

{
threshold:0.5
}

);

document
.querySelectorAll(".stat-card")
.forEach(card => {

statsObserver.observe(card);

});

/* =====================================
   PROJECT CARD HOVER
===================================== */

document
.querySelectorAll(".project-card")
.forEach(card => {

card.addEventListener(
"mouseenter",
()=>{

card.style.transform =
"translateY(-6px)";

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"translateY(0px)";

}
);

});

/* =====================================
   CONSOLE LOG
===================================== */

console.log(
"%cAhmad Furqan Portfolio V3",
"color:#3b82f6;font-size:18px;font-weight:bold;"
);

console.log(
"%cInfrastructure & Security Engineer",
"color:#94a3b8;font-size:12px;"
);
```

.hidden{
opacity:0;
transform:translateY(40px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

.active{
color:#ffffff !important;
font-weight:600;
}

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-menu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});

}

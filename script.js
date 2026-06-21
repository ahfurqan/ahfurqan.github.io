const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-menu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("mobile-open");

});

}

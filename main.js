const mobileNav = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-nav");

mobileNav.addEventListener("click", function(){
  primaryNav.toggleAttribute("data-visible");
})
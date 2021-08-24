const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav")

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav__ul--visible")
})
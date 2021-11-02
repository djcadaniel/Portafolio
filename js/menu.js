const navToggle = document.querySelector(".nav__toggle")
const navMenu = document.querySelector(".nav")

navMenu.classList.remove("nav__ul--visible")

navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav__ul--visible")
})
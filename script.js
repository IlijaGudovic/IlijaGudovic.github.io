const header = document.querySelector("header");

console.log("test");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {

    menu.classList.toggle("bx-x")
    navbar.classList.toggle("open")
}
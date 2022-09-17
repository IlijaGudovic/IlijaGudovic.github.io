const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
})

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {

    menu.classList.toggle("bx-x")
    navbar.classList.toggle("open")
}

// mobileAndTabletCheck 
if(window.mobileCheck != true)
{
    let links = document.querySelectorAll(".links");

    console.log(links.length)

    for (let i = 0; i < links.length; i++)
    {
        links[i].target = "_blank";
    }
}

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

const isMobile = function()
{
    const match = window.matchMedia("(pointer:coarse)");
    return(match && match.matches);
}

//console.log(isMobile());

// mobileAndTabletCheck // !window.mobileCheck
if(!isMobile())
{
    
    let links = document.querySelectorAll(".links");

    for (let i = 0; i < links.length; i++)
    {
        links[i].target = "_blank";
    }

    //Animations
    var servicesIcons = document.querySelectorAll(".box");

    for (let i = 0; i < servicesIcons.length; i++)
    {
        servicesIcons[i].addEventListener('click', function(){shake(i + 1)});
        servicesIcons[i].addEventListener('mouseenter', function(){shake(i + 1)});
    }

    var galleryButtons = document.querySelectorAll(".title-box");
    for (let i = 0; i < links.length; i++)
    {
        //galleryButtons[i].addEventListener('touchcancel', function(){openGall()});
    }

}
else
{

    //Mobile User
    var servicesIcons = document.querySelectorAll(".box");

    for (let i = 0; i < servicesIcons.length; i++)
    {
        servicesIcons[i].addEventListener('touchstart', function(){shake(i + 1)});
    }

}

var objAniamtion = document.getElementById("1");
var cycle = 0;

function shake(index)
{
    if(cycle > 3) 
    {
        console.log(cycle)
        return;
    }
    cycle ++;

    objAniamtion = document.getElementById(index);

    objAniamtion.style.animationPlayState = "initial"
    objAniamtion.style.animation = "shakeAnim 0.66s";

    setTimeout(resetAnimation.bind(null, objAniamtion), 660);
}

function resetAnimation(resetObj)
{
    cycle --;
    resetObj.style.animation = '';
}

function test(obj)
{
    if (obj.style.background == "black")
    {
        obj.style.background = "white"
    }    
    else
    {
        obj.style.background = "black"
    }
}

function noHistory(e)
{
     document.location.replace(e.href);
     return false;
}



function openGall()
{
    location.href = "gallery.html";
}

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

var navbarElements = document.querySelectorAll("ul.navbar > li");
for (let i = 0; i < navbarElements.length; i++)
{
    navbarElements[i].addEventListener('click', function()
    {
        if (navbar.classList != "navbar") //Responsive Format
        {
            menu.classList.toggle("bx-x")
            navbar.classList.toggle("open")
        }
        
    });
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

    // var galleryButtons = document.querySelectorAll(".title-box");
    // for (let i = 0; i < links.length; i++)
    // {
    //     //galleryButtons[i].addEventListener('touchcancel', function(){openGall()});
    // }

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

var duration = [];

function shake(index)
{

    for (let i = 0; i < duration.length; i++)
    {
        if (index == duration[i])
        {
            return;
        } 
    }

    duration.push(index);

    objAniamtion = document.getElementById(index);

    objAniamtion.style.animationPlayState = "initial"
    objAniamtion.style.animation = "shakeAnim 0.66s";

    setTimeout(resetAnimation.bind(null, objAniamtion, index), 660);
}

function resetAnimation(resetObj, animIndex)
{
    resetObj.style.animation = '';

    for (let i = 0; i < duration.length; i++)
    {
        if (duration[i] == animIndex)
        {
            duration.splice(i, 1);
            break;
        } 
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
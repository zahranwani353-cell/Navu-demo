// PRELOADER

window.addEventListener("load", () => {

    const preloader =
        document.querySelector(".preloader");

    if(preloader){

        setTimeout(() => {

            preloader.style.opacity = "0";

            preloader.style.pointerEvents = "none";

        },1000);

    }

});



// REVEAL ANIMATION

const reveals =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

reveals.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";
item.style.transition="all .8s ease";

observer.observe(item);

});



// CUSTOM CURSOR

const dot =
document.querySelector(".cursor-dot");

const ring =
document.querySelector(".cursor-ring");

document.addEventListener("mousemove",(e)=>{

if(dot){

dot.style.left=e.clientX+"px";
dot.style.top=e.clientY+"px";

}

if(ring){

ring.style.left=e.clientX+"px";
ring.style.top=e.clientY+"px";

}

});

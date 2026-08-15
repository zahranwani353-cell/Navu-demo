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
// HERO PARALLAX

window.addEventListener("scroll", () => {

  const scrolled = window.scrollY;

  const heroImage =
    document.querySelector(".hero-image");

  if(heroImage){

    heroImage.style.transform =
      `translateY(${scrolled * 0.15}px)`;

  }

});
// HERO FADE

window.addEventListener("load",()=>{

const hero =
document.querySelector(".hero-content");

if(hero){

hero.animate(

[
{
opacity:0,
transform:"translateY(50px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:1200,
easing:"ease-out"
}

);

}

});

const roles = [

"Bridal Specialist",
"Luxury Makeup Artist",
"Content Creator",
"Beauty Influencer",
"Wedding Glam Expert"

];

let currentRole = 0;

setInterval(() => {

const roleElement =
document.getElementById("changing-role");

if(roleElement){

currentRole++;

if(currentRole >= roles.length){

currentRole = 0;

}

roleElement.textContent =
roles[currentRole];

}

},2000);
.menu-btn{
display:none;
font-size:30px;
cursor:pointer;
color:#d4af37;
}

@media(max-width:900px){


// FOR THE CUSTOM CURSOR
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"})
});

// FOR THE PRELOADER PAGE
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

// FOR THE TYPING ANIMATION
// var typed = new Typed(".auto-type", {
//     strings: ["Based in Nigeria", "web goat", "good girl"],
//     typeSpeed: 100,
//     backSpeed: 100,
//     loop: true  
// })

// FOR THE LIGHT MODE
const icon = document.getElementById('theme')
const iconImg = document.querySelector('.theme-img')
icon.onclick = function(){
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains('light-theme')){
        iconImg.src = "./icons/icons8-fancymoon-30.png"
    }else{
        iconImg.src = "./icons/icons8-bulb-32.png"
    }


}





// FOR THE SKILLS ANIMATION
// const colors = ['#ededed', '#be8dff', '#ededed', '#be8dff', '#ededed', '#be8dff', '#ededed'];
// const tags = ['HTML', 'CSS3', 'JS', 'Bootstrap', 'React', 'Random']
// const Duration = 15000;
// const rows = 5;
// const tags_per_row = 5;

// const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// const shuffle = arr => [...arr].sort(() => .5 - Math.random());
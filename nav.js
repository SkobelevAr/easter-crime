//menu toggle code start
const navbar = document.getElementById("navbar");
const btn = document.getElementById("toggle-btn");
const menuTxt = document.getElementById("text-lol");

function toggle() {
    if(window.innerWidth <= 1600) {
        navbar.classList.toggle("yes");
        menuTxt.classList.toggle("yes-txt");
        if(!navbar.classList.contains("anim")) {
            navbar.classList.add("anim");
            navbar.classList.remove("anim2");
            menuTxt.classList.add("anim");
        } else {
            navbar.classList.remove("anim");
            navbar.classList.add("anim2");
            menuTxt.classList.remove("anim");
        }
    }
}



//menu toggle code end
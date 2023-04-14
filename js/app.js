// menu-bar
let menu = document.querySelector (`.menu i`) 
let sidbar = document.querySelector (`.sidbar`)

function openSidebar (){
    sidbar.classList.add(`active`)
}

menu.addEventListener (`click`,openSidebar )






// close-bar
let closeBtn = document.querySelector (`.close_sidebar i`)

function closeSidebar(){
    sidbar.classList.remove(`active`)
}

closeBtn.addEventListener(`click`,closeSidebar )
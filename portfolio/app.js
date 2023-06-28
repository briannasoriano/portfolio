const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')  //makes class list named show//
}
//where is it getting "click" from//
hamburgerButton.addEventListener('click', toggleButton)
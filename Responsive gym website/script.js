let menu_icon = document.getElementById('menu-icon');
let menu = document.querySelector('.nav-list');


function showMenu(){
    if (menu.style.display === 'none'){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}


menu_icon.addEventListener('click', showMenu)
















const phoneMenu = document.getElementById('phone_menu_list')

function openMenu(){
    phoneMenu.style.transform = "translateX(0)"
}
function closeMenu(){
    phoneMenu.style.transform = "translateX(100%)"
}
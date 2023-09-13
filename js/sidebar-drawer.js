const drawerMenuButtonList = document.querySelectorAll(
    '.sidebar-nav .drawer-menu-button'
)
// console.log(drawerMenuButtonList);

function toggleDrawerMenu() {
    const drawerMenu = this.parentNode;
    drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach(function(e){
    e.addEventListener('click', toggleDrawerMenu)
})



// console.log(drawerMenuButton);
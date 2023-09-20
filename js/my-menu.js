const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function closeMyMenuOnClickingOutside(e){
    console.log('window!!')
    if(!myMenu.contains(e.target)){
        myMenu.classList.remove('is-active')
        window.removeEventListener('click',closeMyMenuOnClickingOutside)
    }
}

function toggleMyMenu() {
    myMenu.classList.toggle('is-active')
    if(myMenu.classList.contains('is-active')) {
        window.addEventListener('click',closeMyMenuOnClickingOutside)
    }
}

myMenuButton.addEventListener('click',toggleMyMenu)


const productTab = document.querySelector(".product-tab")
const productTabButtonList =productTab.querySelectorAll("button")

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab(){
    const tabItem = this.parentNode

    if(currentActiveTab !== tabItem) { // 같지않은걸 눌렀을경우 ?
        tabItem.classList.add('is-active')
        currentActiveTab.classList.remove('is-active')
        currentActiveTab = tabItem
    }
}

productTabButtonList.forEach((button)=>{
    button.addEventListener("click",toggleActiveTab)
})
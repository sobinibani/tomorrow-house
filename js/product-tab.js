const productTab = document.querySelector(".product-tab")
const productTabButtonList =productTab.querySelectorAll("button")
let currentActiveTab = productTab.querySelector('.is-active')

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

function toggleActiveTab(){
    const tabItem = this.parentNode

    if(currentActiveTab !== tabItem) { // 같지않은걸 눌렀을경우 ?
        tabItem.classList.add('is-active')
        currentActiveTab.classList.remove('is-active')
        currentActiveTab = tabItem
    }
}

function scrollToTabpanel(){
    const tabpanelId = this.parentNode.getAttribute('aria-labelledby')
    const tabpanel = document.querySelector(`#${tabpanelId}`)
    const scrollAmount = 
    tabpanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)
    window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
    })
}

productTabButtonList.forEach((button)=>{
    button.addEventListener("click",toggleActiveTab)
    button.addEventListener("click",scrollToTabpanel)
})

const productTabpanelIDList = [
    'product-spec',
    'product-review',
    'product-inquiry',
    'product-shipment',
    'product-recommendation'
]

const productTabpanelList = productTabpanelIDList.map((panelID)=>{
    const tabPanel = document.querySelector(`#${panelID}`)
    return tabPanel
})

const productTabPositionMap = {}

function detectTabPanelPosition(){
    productTabpanelList.forEach((panel)=>{
        const id = panel.getAttribute('id')
        const position = window.scrollY + panel.getBoundingClientRect().top
        productTabPositionMap[id] = position
    })
}

window.addEventListener('load',detectTabPanelPosition)
window.addEventListener('resize',detectTabPanelPosition)
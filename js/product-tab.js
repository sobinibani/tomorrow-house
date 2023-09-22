const productTab = document.querySelector(".product-tab")
const productTabButtonList =productTab.querySelectorAll("button")
let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

function toggleActiveTab(){
    const tabItem = this.parentNode

    if(currentActiveTab !== tabItem) { // 같지않은걸 눌렀을경우 ?
        tabItem.classList.add('is-active')
        currentActiveTab.classList.remove('is-active')
        currentActiveTab = tabItem
        
        disableUpdating = true
        setTimeout(() => {
            disableUpdating = false
        }, 1000);
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

    updateActiveTabOnScroll()
}

function updateActiveTabOnScroll(){
    if(disableUpdating){
        return
    }

    const scrollAmount = window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

    let newActivetab
    if(scrollAmount >= productTabPositionMap['product-recommendation']){
        newActivetab = productTabButtonList[4] // 추천 버튼
    } else if(scrollAmount >= productTabPositionMap['product-shipment']){
        newActivetab = productTabButtonList[3] // 배송/환불 버튼
    } else if(scrollAmount >= productTabPositionMap['product-inquiry']){
        newActivetab = productTabButtonList[2] // 문의 버튼
    } else if(scrollAmount >= productTabPositionMap['product-review']){
        newActivetab = productTabButtonList[1] // 리뷰 버튼
    } else{
        newActivetab = productTabButtonList[0] // 상품정보 버튼
    }

    const bodyHeight = document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0)
    if(window.scrollY + window.innerHeight == bodyHeight){
        newActivetab = productTabButtonList[4] 
    }

    if(newActivetab){
        newActivetab = newActivetab.parentNode

        if(newActivetab !== currentActiveTab){
            newActivetab.classList.add('is-active')
            if(currentActiveTab !== null){
                currentActiveTab.classList.remove('is-active')
            }
            currentActiveTab = newActivetab
        }
    }

}

window.addEventListener('load',detectTabPanelPosition)
window.addEventListener('resize',detectTabPanelPosition)
window.addEventListener('scroll',updateActiveTabOnScroll)
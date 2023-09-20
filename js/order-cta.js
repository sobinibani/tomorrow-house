const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmark, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal(){
    orderModal.classList.add('is-open')
    orderModalOverlay.classList.add('is-active')
}

function closeOrderModal(){
    orderModal.classList.remove('is-open')
    orderModalOverlay.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark(){
    // 1. 버튼 is-active
    //  2. icon클래스 변경 -> ic-bookmark-filled
    // 3. 카운트 숫자 값을 변경
    const [icon, countSpan] = this.children
    const count = Number(countSpan.innerHTML.replaceAll(',',''))
    let newCount = count

    // this.classList.toggle('is-active') 
    
    if(this.classList.contains('is-active')){
        // 비활성화가 되기위한 
        icon.classList.add('ic-bookmark')
        icon.classList.remove('ic-bookmark-filled')
        newCount = newCount - 1
    } else {
        // 활성화가 되기위한 
        icon.classList.add('ic-bookmark-filled')
        icon.classList.remove('ic-bookmark')
        newCount = newCount + 1
    }
    countSpan.innerHTML = newCount.toLocaleString()
    countSpan.setAttribute('aria-label' , `북마크 ${newCount.toLocaleString()}회`)
    this.classList.toggle('is-active')

}

orderCtaBookmark.addEventListener('click',toggleOrderCtaBookmark)

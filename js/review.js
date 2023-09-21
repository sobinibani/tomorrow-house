const revieLikeButton = document.querySelectorAll(".review-card-footer button")

const HELPFUL = "도움됨"
const NOT_HELPFUL = "도움이 돼요"
const checkIcon = '<i class="ic-check" aria-hidden=""></i>'

function toggleReviewLike(){
    const isLiked = this.classList.contains("btn-primary")
    const textElement = this.nextElementSibling
    const reviewCardFooter = this.parentNode
    
    this.classList.toggle('btn-primary')
    this.classList.toggle('btn-outlined')

    if(isLiked){
        this.innerHTML = NOT_HELPFUL
        console.log('비활성화')
    } else {
        this.innerHTML = checkIcon + HELPFUL
        console.log('활성화')
    }

    if(textElement){
        const countSpan = textElement.querySelector('span')
        const count = Number(countSpan.innerHTML.replaceAll(',','')) 
        let newCount = count 

        if(isLiked){
            // newCount - 1
            newCount = newCount - 1
            if (newCount === 0) {
                // 0명에게 도움이 될경우엔
                reviewCardFooter.removeChild(textElement)
            } else {
                countSpan.innerHTML = newCount.toLocaleString()
            }
        } else {
            newCount = newCount + 1
            countSpan.innerHTML = newCount.toLocaleString()
        }
    }else {
        // textelment가 없는 상황
        if(!isLiked){
            const newTextElement = document.createElement('p')
            newTextElement.innerHTML = 
            '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
            reviewCardFooter.appendChild(newTextElement)
        }
    }
}

revieLikeButton.forEach((button)=>{
    button.addEventListener('click',toggleReviewLike)
})

// revieLikeButton.addEventListener("click",toggleReviewLike)
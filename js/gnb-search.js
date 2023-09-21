const gnbSearch = document.querySelector(".gnb-search")
const gnbSearchInput = gnbSearch.querySelector("input")
const gnbSearchHistory = gnbSearch.querySelector(".search-history")
const gnbSearchHistoryList = gnbSearchHistory.querySelector("ol")

const deleteAllButton = gnbSearchHistory.querySelector(".search-history-header button")
const deleteButton = gnbSearchHistoryList.querySelectorAll(".delete-button")
console.log(deleteButton)

function closeGnbSearchHistory(){
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener("click",closeGnbSearchHistoryOnClickOutside)
}

function closeGnbSearchHistoryOnClickOutside(e){
    console.log('111') 
    if(!gnbSearch.contains(e.target)){
        closeGnbSearchHistory()
    }
}

function openGnbSearchHistory() {
    if (gnbSearchHistoryList.children.length === 0){
        return // 아무것도 실행안한단 뜻
    } else {
        gnbSearchHistory.classList.add("is-active") 
    }

    if(gnbSearchHistory.classList.contains("is-active")){ 
        window.addEventListener('click',closeGnbSearchHistoryOnClickOutside)
    }
}

function deleteAllHistory() {
    gnbSearchHistoryList.innerHTML = ""
    closeGnbSearchHistory()
}

function deleteSearchHistoryItem(e){
    e.stopPropagation()
    const itemToDelete = this.parentNode
    gnbSearchHistoryList.removeChild(itemToDelete)
    
    if (gnbSearchHistoryList.children.length === 0){
        closeGnbSearchHistory()
    } 
}

deleteButton.forEach((button)=>{
    button.addEventListener("click",deleteSearchHistoryItem)
})

gnbSearchInput.addEventListener("focus",openGnbSearchHistory)
deleteAllButton.addEventListener("click",deleteAllHistory)
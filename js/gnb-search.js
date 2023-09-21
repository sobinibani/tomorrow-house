const gnbSearch = document.querySelector(".gnb-search")
const gnbSearchInput = gnbSearch.querySelector("input")
const gnbSearchHistory = gnbSearch.querySelector(".search-history")
const gnbSearchHistoryList = gnbSearchHistory.querySelector("ol")

const deleteAllButton = gnbSearchHistory.querySelector(".search-history-header button")


function closeGnbSearchHistoryOnClickOutside(e){
    console.log('111') 
    if(!gnbSearch.contains(e.target)){ // 윈도우가 gnbsearch를 누르지 ! 않았다면? = 바깥영역을 눌렀다면
        gnbSearchHistory.classList.remove("is-active") // is-active 제거 (gnb히스토리 닫힘)
        window.removeEventListener("click",closeGnbSearchHistoryOnClickOutside) // 이 함수도 제거 
    }
}

function openGnbSearchHistory() {
    if (gnbSearchHistoryList.children.length === 0){
        return // 아무것도 실행안한단 뜻
    } else {
        gnbSearchHistory.classList.add("is-active") // gnb히스토리 열림
    }

    if(gnbSearchHistory.classList.contains("is-active")){ // gnb 히스토리에 is-active 상태라면
        window.addEventListener('click',closeGnbSearchHistoryOnClickOutside)
        // 윈도우 바깥영역 눌렀을때 처리기능이 실행
    }
}

function deleteAllHistory() {
    gnbSearchHistoryList.innerHTML = ""
    gnbSearchHistory.classList.remove("is-active") 
}

gnbSearchInput.addEventListener("focus",openGnbSearchHistory)
deleteAllButton.addEventListener("click",deleteAllHistory)
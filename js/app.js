var iconsearch = document.querySelector(".header-icon-area .search-box");
let header_search = document.querySelector(".header-search");
let btnclose = document.querySelector(".close");
iconsearch.addEventListener("click", ()=>{
    header_search.classList.add("open")
})
btnclose.addEventListener("click", ()=>{
    header_search.classList.remove("open")
})
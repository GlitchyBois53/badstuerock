
// Script for opening and closing the filter, turning the arrow next to 'filter', and fades in the menu content


// Assign the html elements to variables in JS for the desktop filter

var filterMenu = document.getElementById("filter-menu")
var filterBtn = document.getElementById("filter-btn")
var filterArrow = document.getElementById("filter-arrow")
var filterContent = document.getElementById("filter-content")


// Functionality for the desktop filter

function filterToggle() {
    if (filterMenu.classList.contains("filter-neutral") || filterMenu.classList.contains("filter-close")) {
        filterMenu.classList.remove("filter-neutral")
        filterMenu.classList.add("filter-open")
        filterMenu.classList.remove("filter-close")
        filterBtn.classList.add("filter-btn-open")
        filterBtn.classList.remove("filter-btn-close")
        filterArrow.classList.add("filter-arrow-active")
        filterArrow.classList.remove("filter-arrow-not-active")
        filterContent.classList.add("filter-content-active")
        filterContent.classList.remove("filter-content-not-active")
    }
    else {
        filterMenu.classList.remove("filter-open")
        filterMenu.classList.add("filter-close")
        filterBtn.classList.remove("filter-btn-open")
        filterBtn.classList.add("filter-btn-close")
        filterArrow.classList.remove("filter-arrow-active")
        filterArrow.classList.add("filter-arrow-not-active")
        filterContent.classList.remove("filter-content-active")
        filterContent.classList.add("filter-content-not-active")
    }
}
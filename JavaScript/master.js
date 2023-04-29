let burgerIcon = document.querySelector(".menu-icon")
let closeIcon = document.querySelector(".close-icon")
let links = document.querySelector(".links")


burgerIcon.onclick = (e) => {
    e.target.classList.add("hide")
    closeIcon.classList.add("show")
    links.classList.add("active")
}

closeIcon.onclick = (e) => {
    e.target.classList.remove("show")
    burgerIcon.classList.remove("hide")
    links.classList.remove("active")
}
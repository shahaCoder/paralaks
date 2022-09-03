let moon = document.querySelector('#moon')
let stars = document.querySelector('#stars')
let mountains_behind = document.querySelector('#mountains_behind')
const exploreBtn = document.querySelector('#btn')
const weproText = document.querySelector('#text')
const mountain = document.querySelector("#mountains_behind")
window.onscroll = () => {
    
    let scrollY = window.scrollY

    console.log(scrollY);

    moon.style.top = scrollY * 0.75 + "px"
    stars.style.marginLeft = scrollY / 2 + "px"

    exploreBtn.style.marginTop = scrollY * 0.85 + "px"

    weproText.style.right = scrollY / 1 + "px"
    mountain.style.top = scrollY * 1 + "px"
}

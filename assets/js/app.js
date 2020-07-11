document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.skills').classList.toggle('add')
})


document.querySelector('.skills').addEventListener('click', function () {
    document.querySelector('.skills').classList.remove('add')
})


document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const lol= e.target.getAttribute('href')
        scrollToTarget(lol) 
    })
})


function scrollToTarget(sel) {
    document.querySelector(sel).scrollIntoView({
        behavior: 'smooth'
    })
}



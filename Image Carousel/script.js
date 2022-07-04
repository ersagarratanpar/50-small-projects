const imgs = document.getElementById('imgs')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 5000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translate(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval()
    interval = setInterval(run, 5000)
}

nextBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

prevBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
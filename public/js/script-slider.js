const items_slider = document.getElementsByClassName('slide-item')
const control_left = document.querySelector('.control-left')
const bars = document.getElementsByClassName('bar-slide')
let cont = items_slider.length
let count = 0
let array = [1,2,3]


control_left.addEventListener('click', () => {
    if(count > 3) {
        bars.item().classList.remove('active')
    }
    count++; 
    items_slider.item(count).classList.add('esconedr')
    bars.item(count).classList.add('active')
})


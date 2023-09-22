import json from '../data/data.json';
const arr = Array.from(json)

const currentElements = document.querySelectorAll('.current-hour')
const previousElements = document.querySelectorAll('.previous-hour')

const btnDay = document.querySelector('.day')
const btnWeek = document.querySelector('.week')
const btnMonth = document.querySelector('.month')




btnDay.addEventListener('click', () => {
    clearBtnClassActive()
    btnDay.classList.add('active')
    printHtml('daily')
})

btnWeek.addEventListener('click', () => {
    clearBtnClassActive()
    btnWeek.classList.add('active')
    printHtml('weekly')
})

btnMonth.addEventListener('click', () => {
    clearBtnClassActive()
    btnMonth.classList.add('active')
    printHtml('monthly')
})

function printHtml(time) {
    
    for (let index = 0; index < arr.length; index++) {
        currentElements[index].innerHTML = arr[index].timeframes[time].current
        previousElements[index].innerHTML = arr[index].timeframes[time].previous
    }
}

function clearBtnClassActive() {
    document.querySelectorAll('.active')
    .forEach(e => e.classList.remove('active'))
}
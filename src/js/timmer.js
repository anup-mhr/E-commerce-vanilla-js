let months = ['Janauray','Febrauary','March','April','May','June','July','August','Septemeber','October','November','December']
let days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']

let countDownDate = new Date()
countDownDate.setDate(countDownDate.getDate() + 12)
countDownDate.setHours('09')
countDownDate.setMinutes('15')
let countdownTime = countDownDate.getTime()



let countdown = document.getElementById('countdown-date')
countdown.innerHTML = `Offer ends on ${days[countDownDate.getDay()]}, ${countDownDate.getDate()} ${months[countDownDate.getMonth()]} ${countDownDate.getFullYear()} 9:15`

let x = setInterval(() => {
    let now = new Date().getTime()
    let distance = countdownTime - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    let dateObj = { days, hours, minutes, seconds }

    for (let key in dateObj) {
        let value = dateObj[key]
        value = value < 10 ? '0' + value : value
        document.getElementById(key).innerHTML = value
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = '00'
        document.getElementById('hours').innerHTML = '00'
        document.getElementById('minutes').innerHTML = '00'
        document.getElementById('seconds').innerHTML = '00'
    }

}, 1000)
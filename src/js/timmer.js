let countDownDate = new Date('Nov 16, 2023 00:00:00').getTime()
console.log(countDownDate)
let x = setInterval(() => {
    let now = new Date().getTime()
    let distance = countDownDate - now;

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
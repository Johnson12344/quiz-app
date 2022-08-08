setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock(){
const currentDate =new Date()
const secondsRatio = currentDate.getSeconds()/60
const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
const hoursRatio = (minutesRatio + currentDate.getHours())/12
setRotation(secondHand, secondsRatio)
setRotation(minuteHand, minutesRatio)
setRotation(hourHand, hoursRatio)


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}


setClock()


function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";


    if (h > 12){
        session = "PM";
    }

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();


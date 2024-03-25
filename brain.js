function clock(){
    let hrDot = document.getElementById("hrDot");
    let minDot = document.getElementById("minDot");
    let secDot = document.getElementById("secDot");

    let date = new Date();
    let hours = date.getHours() % 12;
    hours = hours === 0 ? 12 : hours;
    let amPm = date.getHours() >= 12 ? 'PM' : 'AM';
    let min = date.getMinutes();
    let sec = date.getSeconds();

    /*let secRot = '';
    for(let i = 1; i <= 60; i++){
        let rot = i * 6;

        if(i === sec){
            secRot += '<div class="dot_active" style="transform:rotate('+rot+'deg)"></div>';
        } else {
            secRot += '<div class="dot" style="transform:rotate('+rot+'deg)"></div>';
        }
    }*/

    secDot.innerHTML = '<b>' + amPm + '</b>' + '<h2>' + zero(sec) + '<br><span>Seconds</span>' + '</h2>';
   /* secDot.innerHTML += secRot; // Append the loader dots after the content*/
    minDot.innerHTML = '<h2>' + zero(min) + '<br><span>Minutes</span>' + '</h2>';
    hrDot.innerHTML = '<h2>' + zero(hours) + '<br><span>Hours</span> ' + '</h2>';
}

function zero(num){
    if(num < 10){
        return '0' + num;
    }
    return num;
}

setInterval(clock,1000);

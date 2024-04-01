let currentDate = new Date();
console.log(currentDate);
let targetDate = new Date('2024-03-14T12:00:00');
console.log(targetDate);
let difference = targetDate - currentDate;
console.log(difference);

function updateCountdown(){
    const currentTime = new Date();
    difference = targetDate - currentTime;

    if (difference<0){
        clearInterval(interval);
        document.getElementById("timer").style.display="none";
        document.getElementById("message").style.display="block";
        return;
    }

    document.getElementById("timer").style.display="";
    document.getElementById("message").style.display="none";

    let days = Math.floor(difference/(1000*60*60*24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText=days;
    document.getElementById("hours").innerText=hours;
    document.getElementById("minutes").innerText=minutes;
    document.getElementById("seconds").innerText=seconds;

    console.log("working");
}

let interval = setInterval(updateCountdown, 1000);

document.getElementById("reset-button").addEventListener('click', function() {
    let userDate = prompt("Enter a new date and time in the format YYYY-MM-DDTHH:MM:SS (e.g., 2024-12-31T23:59:59)");
    let newTargetDate = new Date(userDate);
    

    if(isNaN(newTargetDate.getTime())){
        alert("Invalid Date or Time. Try again");
    }
    else{
        targetDate = newTargetDate;
        document.getElementById("timer").style.display="";
        document.getElementById("message").style.display="none";
        clearInterval(interval);
        updateCountdown();
        interval = setInterval(updateCountdown, 1000);
    
    }
});
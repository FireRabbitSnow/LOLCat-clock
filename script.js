var wakeUptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

//showing current time on  the page//
var showCurrentTime=function()
{

    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds =  currentTime.getSeconds();
    var meridian = AM;

    //setting hours
    if (hors >= noon)
    {
        meridian = "PM";
    }

    if (hours > noon)
    {
        hours = hours - 12;
    }

    //setting minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    //set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    //string displaying the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clocktime;
};

//Getting the clock to increment on its own and change the messages
var updateClock = function()
{
    var time = new Date (). getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    vartimeEventJS = document.getElementById("timeEvent");
    var lolcatImagesJS = document.getElementById('lolcatImage');

    if (time == partyTime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = "Let's party!";
    }
    else if (time== wakeuptime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    }
    else if (time == naptime)
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Sleep tight!";
    }

    else if (time >= evening)
    {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    }
    else
    {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }
    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImagesJS.src = image;

    showCurrentTime();
};
updateClock();

//setting the lock to imcrement once a second
var oneSecond = 1000;
setInterval (updateClock, oneSecond);

//Getting the party Time button to work
var partyButtone = document.getElementById("partyTimeButton");

var partyEvent = function()
{if (partytime < 0 )
    {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyTimeButtone.innerText = "Party Time!"
        partyTimeButton.style.backgroundColor = "#222";
    }

};

partyButtone.addEventListener("click", partyEvent);
partyEvent();

//activate Wake--up selector
var wakeUptimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function();
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUptimeSelector.addEventListener("change", wakeUpEvent);

//activate lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener ("change", lunchEvent);

//Activates Nap-Time selector
var napTimeSelector = document.getElementById("naptimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};
naptTimeSelector.addEventListener("change", napEvent);

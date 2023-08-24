
// let date=new Date();
// let hours=date.getHours();
// let minutes=date.getMinutes();
// let second=date.getSeconds();
// let hours1=document.querySelector('.hours1');
// let minutes1=document.querySelector('.minutes')
// let second1=document.querySelector('.second')
// hours1.textContent=hours
// minutes1.textContent=minutes
// second1.textContent= second
// let AMPM=document.querySelector('.AM')
// AMPM.textContent="AM"


function clock() {
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let second=date.getSeconds();
var timeZone=""

if(hours==0)
{
   hours=12;
}
if(hours>=12)
{

    hours=hours-12;
    timeZone="PM";
}
else
{
    timeZone="AM";
}

let hours1=document.querySelector('.hours1');
let minutes1=document.querySelector('.minutes')
let second1=document.querySelector('.second')
console.log(minutes1);
minutes<=9?minutes1.textContent="0"+minutes:minutes1.textContent=minutes
hours1.textContent=+hours;
// minutes1.textContent=minutes
second<=9?second1.textContent="0"+second:second1.textContent= second;
// second1.textContent= second
// console.log(hours,minutes,second,timeZone);
let AMPM=document.querySelector('.AMPM')
AMPM.textContent=timeZone

// console.log(hours);
if(hours<=4 && timeZone=="PM" )
{
    let Healthmassage=document.querySelector('.break-fast')
    Healthmassage.textContent="Good Afternoon"
    // let AMPM=document.querySelector('.AMPM')
    // AMPM=timeZone;
}
else if(hours>=5 && hours<=8 && timeZone=="PM" )
{
    let Healthmassage=document.querySelector('.break-fast')
    Healthmassage.textContent="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!" 
    // let AMPM=document.querySelector('.AMPM')
    // AMPM.textContent=timeZone
}
else if(hours>=9 && hours<=11 && timeZone=="PM" )
{
    let Healthmassage=document.querySelector('.break-fast')
    Healthmassage.textContent="Good NIGHT,CLOSE YOUR EYES AND GO TO SLEEP" 
    // let AMPM=document.querySelector('.AMPM')
    // AMPM.textContent=timeZone
}
else if(hours>=1 && hours<=12 && timeZone=="AM")
{
    let Healthmassage=document.querySelector('.break-fast')
    Healthmassage.textContent="Good Morning"
}


// if(hours<=9 || hours<=11 && minutes==59) 
// {
//     let Healthmassage=document.querySelector('.break-fast')
//     Healthmassage.textContent="Good night" 
//     let AMPM=document.querySelector('.AMPM')
//     AMPM.textContent="PM"
// }

// if(hours>12)
// {
//     let Healthmassage=document.querySelector('.break-fast')
//     Healthmassage.textContent="LET'S HAVE SOME LUNCH !!"
//     let wakeup=document.querySelector('.sub-container--2');
//     wakeup.textContent="GOOD AFTERNOON !! TAKE SOME SLEEP"
//     // document.querySelector('.component-image').src="Group 5183\Group 5183.jpg"
//     // componentimg="Group 5183\Group 5183@2x.jpg"
//     let AM=document.querySelector('.AM')
//     AM.textContent="PM"
// } 

// else{
//     let AM=document.querySelector('.AM')
//     AM.textContent="AM"
//     let Healthmassage=document.querySelector('.break-fast')
//     Healthmassage.textContent="GRAB SOME HEALTHY BREAKFAST!!!"
// }
// if(hours<=16)
// {
//     let Healthmassage=document.querySelector('.break-fast')
//     Healthmassage.textContent="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
// }   
}
const clear=setInterval(() => {
clock();

},1000);



let alarmbtn=document.querySelector(".set-alarm")


alarmbtn.addEventListener('click',function ()
{
     // section 1 wake time
     let date=new Date();
     let hrs=date.getHours();
     console.log(hrs,typeof hrs);  

    let wake_up=document.getElementById("Set_wake_up_time").value-1;
    console.log(wake_up);
    let change=Number(wake_up)
    console.log( typeof change);
    let wake=document.getElementById("Set_wake_up_time").options[change].innerHTML;
    console.log(wake);
    let w_up_time=document.getElementById("w_up_time");
    w_up_time.innerHTML=wake;

    if(hrs===change)   //&& timeZone=="AM"
    {
    let image_morning=document.querySelector(".component-image")
    image_morning.setAttribute("src", "good3.jpg"); 
    let morningquote=document.querySelector(".sub-container--2-inside")
    console.log(morningquote);
    morningquote.textContent="Good Morning,Wakeup And  Go To Gym"
    }
    // else if(hrs==change) {
    //     let image_morning=document.querySelector(".component-image")
    //     image_morning.setAttribute("src", "good evening.jpg"); 
    //     let morningquote=document.querySelector(".sub-container--2-inside")
    //     console.log(morningquote);
    //     morningquote.textContent="Good evening,take coffee"

    // }

    //section 2 lunch time
    let lunch=document.getElementById("lunch_time").value-1;   
    console.log(lunch)
    let lunch_value=document.getElementById("lunch_time").options[lunch].innerHTML;
     console.log(lunch_value);
    let  l_time=document.getElementById("l_time");
    l_time.innerHTML=lunch_value
    if(hrs===parseInt(lunch))
    {
    let image_morning=document.querySelector(".component-image")
    image_morning.setAttribute("src", "lunch-image.jpg"); 
    let morningquote=document.querySelector(".sub-container--2-inside")
    console.log(morningquote);
    morningquote.textContent="Good Afternoon,Take Some lunch"
    }
    //section 3   nap time
    let naptime=document.getElementById("nap_time").value-1;   
    let nap_value=document.getElementById("nap_time").options[naptime].innerHTML;
    let  n_time=document.getElementById("n_time");
    n_time.innerHTML=nap_value
    if(hrs===parseInt(naptime))
    {
    let image_morning=document.querySelector(".component-image")
    image_morning.setAttribute("src", "nap-time-real.jpg"); 
    let morningquote=document.querySelector(".sub-container--2-inside")
    console.log(morningquote);
    morningquote.textContent="Good Afternoon,I like naps,I don’t drink coffee."
    }

    //section 4  night time
     
    let nighttime=document.getElementById("night_time").value-1;   
    let night_value=document.getElementById("night_time").options[nighttime].innerHTML;
    console.log(night_value);
    let  night_alarm=document.getElementById("night_alarm");
    night_alarm.innerHTML=night_value
    if(hrs===parseInt(nighttime))
    {
    let image_morning=document.querySelector(".component-image")
    image_morning.setAttribute("src", "Component 32 – 1@2x.jpg"); 
    let morningquote=document.querySelector(".sub-container--2-inside")
    console.log(morningquote);
    morningquote.textContent="Good Night! Go To Bed"
    }
    // let image_morning=document.querySelector(".component-image")
    // image_morning.setAttribute("src", "download.png");
    // console.log(image_morning);
})
// let morningquote=document.querySelector(".sub-container--2-inside")
//     console.log(morningquote);

// Set_wake_up_time
// lunch_time
// nap_time
// night_time

// w_up_time
// l_time
// n_time
// n_time

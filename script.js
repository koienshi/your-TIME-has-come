var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// CLOCK ARMS
const clocks = document.querySelectorAll('.clock');

// get rid of for loop and make it a function 

for (var i=0; i<clocks.length; i++) {
  var currentClock = clocks[i];
  var gmtOffset = currentClock.dataset.timezone;
  console.log(gmtOffset);
  const hr = currentClock.querySelector('.hr');
  const mn = currentClock.querySelector('.mn');
  const sc = currentClock.querySelector('.sc');
  var time = document.querySelector('.time');

 //document.querySelector('h1').innerHTML = currentClock.dataset.title;
  
  setInterval(() => {
    let day = new Date();

    let s = day.getUTCSeconds();
    let ss = s * 6;
    let ms = day.getUTCMilliseconds();
    let mss = (ms * 0.006) + +ss;
    
    let m = day.getUTCMinutes();
    let mm = m * 6; //60min * 6 = 360 (degree around circle)

    if (i == 0) {
      var h = +day.getUTCHours() + +gmtOffset;
    } else if (i == 1) {
      var h = +day.getUTCHours + +gmtOffset - 4;
    
    } else if (i == 2) {
      var h = +day.getUTCHours() + +gmtOffset;
      h -= 6;
    } else if (i == 3) {
      var h = +day.getUTCHours() + +gmtOffset;
      h -= 7;
    } else if (i == 4) {
      var h = +day.getUTCHours() + +gmtOffset;
      h -= 9;
    } else if (i == 5) {
      var h = +day.getUTCHours() + +gmtOffset;
      h += 1;
    }
     //prepended w/ "+" to parse into number
    if (h < 0) h = 24 + +h;
    let hh = h * 30; //hours hand loops around twice (720) (AM + PM)
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)+(mss/3600)}deg)`;
    mn.style.transform = `rotateZ(${(mm)+(mss/60)}deg)`;
    sc.style.transform = `rotateZ(${mss}deg)`;

    time.innerHTML = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2); //adds beginning 0 if under 10
  })
}

// GMT TIME HTTP REQUEST
// var gmt_time;
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(xhttp.responseText);
//       gmt_time = data.datetime;
//       console.log(gmt_time);
//       createClock(gmt_time);
    

//   }

//   if(xhttp.status == 404) {
//     console.log('File not found');
//   }
  
// }
// xhttp.open("GET", "http://worldtimeapi.org/api/timezone/Etc/GMT", true);
// xhttp.send();


// function createClock(response) {
//   var currentClock = clocks[0];
//   const hr = currentClock.querySelector('.hr');
//   const mn = currentClock.querySelector('.mn');
//   const sc = currentClock.querySelector('.sc');
//   var time = document.querySelector('.time');

  
  
//   setInterval (() => {
   
//   var hour = response.slice(11, 13);
//   var minute = response.slice(14, 16);
//   var second = response.slice(17, 19);
//   var millisecond = response.slice(20, 26);

//   let s = second;
//   let ss = s * 6;
//   let ms = millisecond;
//   let mss = (ms * 0.006) + +ss;
    
//   let m = minute;
//   let mm = m * 6; //60min * 6 = 360 (degree around circle)

//   let h = hour; //prepended w/ "+" to parse into number
//   if (h < 0) h = 24 + +h;
//   let hh = h * 30; //hours hand loops around twice (720) (AM + PM)
    
//   hr.style.transform = `rotateZ(${(hh)+(mm/12)+(mss/3600)}deg)`;
//   mn.style.transform = `rotateZ(${(mm)+(mss/60)}deg)`;
//   sc.style.transform = `rotateZ(${mss}deg)`;

//   time.innerHTML = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2); 
//   })
// }

// one function that takes in the response text and chops it up
// in the function, want four things – hours, minutes, seconds, milliseconds
// assign each part of the chopped up part to a specific var
// call a bigger func and have those variables to be the args int he new func
// use those times to use the setinterval function for the clock

//NY TIME HTTP REQUEST
// const xhttp1 = new XMLHttpRequest();
// xhttp1.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(xhttp1.responseText);
//       var ny_time = data.datetime;
//       console.log(ny_time);
//   }

//   if(xhttp1.status == 404) {
//     console.log('File not found');
//   }
  
// }
// xhttp1.open("GET", "http://worldtimeapi.org/api/timezone/America/New_York.txt", true);
// xhttp1.send();


// //MOUNTAIN TIME HTTP REQUEST

// const xhttp2 = new XMLHttpRequest();
// xhttp2.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(xhttp2.responseText);
//       var mdt_time = data.datetime;
//       console.log(mdt_time);
//   }

//   if(xhttp2.status == 404) {
//     console.log('File not found');
//   }
  
// }
// xhttp2.open("GET", "http://worldtimeapi.org/api/timezone/America/Denver.txt", true);
// xhttp2.send();


// //PACIFIC TIME HTTP REQUEST
// const xhttp3 = new XMLHttpRequest();
// xhttp3.onreadystatechange = function() {
//   if(this.readyState == 4 && this.status == 200) {
//       var data = JSON.parse(xhttp3.responseText);
//       var ny_time = data.datetime;
//       console.log(ny_time);
//   }

//   if(xhttp2.status == 404) {
//     console.log('File not found');
//   }
  
// }
// xhttp2.open("GET", "http://worldtimeapi.org/api/timezone/America/Denver.txt", true);
// xhttp2.send();





// xhttp.open("GET", "http://worldtimeapi.org/api/timezone/America/New_York.txt");
// xhttp.send();
// console.log('here1');
// xhttp.open("GET", "http://worldtimeapi.org/api/timezone/America/Denver.txt");
// xhttp.send();
// console.log('here2');
// xhttp.open("GET", "http://worldtimeapi.org/api/timezone/America/Los_Angeles.txt");
// xhttp.send();
// console.log('here3');
// xhttp.open("GET", "http://worldtimeapi.org/api/timezone/Asia/Tokyo.txt");
// xhttp.send();
// console.log('here4');
// xhttp.open("GET", "http://worldtimeapi.org/api/timezone/Europe/London.txt");
// xhttp.send();
// console.log('here5');
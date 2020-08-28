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

    let h = +day.getUTCHours() + +gmtOffset; //prepended w/ "+" to parse into number
    if (h < 0) h = 24 + +h;
    let hh = h * 30; //hours hand loops around twice (720) (AM + PM)
    
    hr.style.transform = `rotateZ(${(hh)+(mm/12)+(mss/3600)}deg)`;
    mn.style.transform = `rotateZ(${(mm)+(mss/60)}deg)`;
    sc.style.transform = `rotateZ(${mss}deg)`;

    time.innerHTML = ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2); //adds beginning 0 if under 10
  })
}

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if(xhttp.readyState == 4) {
    if(xhttp.status == 200) {
      console.log
    }
  }
  
}

const API_URL = "http://worldtimeapi.org/api/timezone"; 

xhttp.open("GET", "http://worldtimeapi.org/api/timezone/Etc/GMT.txt", true);
xhttp.send();
console.log(this.responseText);
xhttp.open("GET", "http://worldtimeapi.org/api/timezone/America/New_York");
xhttp.send();
xhttp.open("GET", "http://worldtimeapi.org/api/timezone/America/Denver");
xhttp.send();
xhttp.open("GET", "http://worldtimeapi.org/api/timezone/America/Los_Angeles");
xhttp.send();
xhttp.open("GET", "http://worldtimeapi.org/api/timezone/Asia/Tokyo");
xhttp.send();
xhttp.open("GET", "http://worldtimeapi.org/api/timezone/Europe/London");
xhttp.send();
//
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// for meet the teamm
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}
//filter buttons 
//source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("each-project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

document.addEventListener('DOMContentLoaded', function() {
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("button-section");
  if (btnContainer) {
    var btns = btnContainer.getElementsByClassName("filter-button");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        console.log(current);
      });
    }
  }

  // // JavaScript code to handle the scroll event about 
  // document.addEventListener("scroll", function () {
  //   var aboutSection = document.getElementById("about");
  //   var scrollPosition = window.scrollY;

  //   // Adjust the threshold value based on your design
  //   var threshold = 100;

  //   // Check if the scroll position is below the threshold
  //   if (scrollPosition > threshold) {
  //     aboutSection.classList.add("fixed-about");
  //   } else {
  //     aboutSection.classList.remove("fixed-about");
  //   }
  // });

  // FAQ section JavaScript
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Set the exact date and time of the hackathon
  var countDownDate = new Date("Sep 25, 2026 09:00:00").getTime();

  // Create a message element
  var messageElement = document.createElement("div");
  messageElement.id = "countdown-message";
  messageElement.style.textAlign = "center";
  messageElement.style.fontSize = "50px";
  messageElement.style.fontWeight = "bold";
  messageElement.style.marginBottom = "20px";
  document.getElementById("countdown-timer").insertAdjacentElement('beforebegin', messageElement);

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get current date + time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days.toString();
    document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);

    // If the countdown is finished, display a message and stop the countdown
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "00";
      document.getElementById("hours").innerHTML = "00";
      document.getElementById("minutes").innerHTML = "00";
      messageElement.innerHTML = "Thanks for hacking with us!";
    }
  }, 1000);
});
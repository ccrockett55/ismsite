var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//timer



var elem = $('#container');
var knobResize = function () {
  var width = Math.floor((elem.width() - 150) / 4);
  elem.find('.knob').trigger('configure', { width: width, height: width });
}

$(window).resize(function () {
  knobResize();
});

var myDate = new Date(2019, 6, 29);


elem.find('#knob-countdown').countdown({
  until: myDate,
  format: 'DHMS',
  onTick: function (e) {
    var secs = e[6], mins = e[5], hr = e[4], ds = e[3];
    elem.find("#countdown-ds").val(ds).trigger("change");
    elem.find("#countdown-hr").val(hr).trigger("change");
    elem.find("#countdown-min").val(mins).trigger("change");
    elem.find("#countdown-sec").val(secs).trigger("change");
  }
});

$('.knob').knob();
knobResize();
//Nav Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function navClose() {
  document.querySelectorAll("a").style.width = "0";
}

//Contact Form
function check_empty() {
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
  alert("Fill All Fields !");
  } else {
  document.getElementById('form').submit();
  alert("Form Submitted Successfully...");
  }
  }
  //Function To Display Popup
  function div_show() {
  document.getElementById('abc').style.display = "block";
  }
  //Function to Hide Popup
  function div_hide(){
  document.getElementById('abc').style.display = "none";
  }
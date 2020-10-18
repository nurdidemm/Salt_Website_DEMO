//slide title in
$(document).ready(function(){
    $('body').hide().fadeIn(2000);
    $("#titleBox").delay(1500).animate({
        width: 240
    }, 1600);
    $("#titleBox2").delay(3200).animate({
        width: 90
    }, 1800);
    // $("#book").delay(3800).animate({
    //     top: -60
    // }, 500);
    startSlideshow();
});


//animate navicon SVG
var myPath = document.querySelector('.path');
var myPathLength = myPath.getTotalLength();

//dropdown menu on hover
$("#navicon").hover(function(){
    $(this).css("-webkit-animation", "dash 3s linear alternate infinite");
});
$("svg").mouseenter(function(){
    $(this).css("width", "55px");
    $(this).css("top", "2px");
    $(this).css("right", "2px");
    $(myPath).attr("fill", "#7d1b08");
}).mouseleave(function() {
    $(this).css("width", "60px");
    $(this).css("top", "0px");
    $(myPath).attr("fill", "none");
});


var initial = true;     //true if first scroll since page load false if not 

window.onscroll = function() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByTagName("nav")[0].style.height = "90px";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "rgba(128, 182, 230, 0.8)";
        document.getElementsByTagName("nav")[0].style.background = "linear-gradient(to bottom, rgba(137,255,241,0) 0%,rgba(0,0,0,1) 100%)";
        document.getElementsByTagName("nav")[0].style.transition = "0.8s";
        document.getElementById("title").style.top = "10px";
        document.getElementById("title").style.fontSize = "30px";
        document.getElementById("title").style.textShadow = "2px 1px #c8b59d";
        document.getElementById("title").style.opacity = "1";
        $("#titleBox2").animate({
            top: 28,
            left: 230,
            width: 0
        }, 400);
        document.getElementsByClassName("list")[0].style.top = "24px";
        $(myPath).attr("fill", "#7d1b08");

        // initial = false;
    } 
    else {
        document.getElementsByTagName("nav")[0].style.height = "122px";
        document.getElementsByTagName("nav")[0].style.backgroundColor = "";
        document.getElementsByTagName("nav")[0].style.background = "";
        document.getElementById("title").style.top = "8px";
        document.getElementById("title").style.fontSize = "60px";
        document.getElementById("title").style.textShadow = "1px 0.8px  #c8b59d";
        document.getElementById("title").style.opacity = "0.8";
        document.getElementsByClassName("list")[0].style.top = "50px";
        $(myPath).attr("fill", "none");

        // if (initial == false) {
        //     console.log("GOT");
        //     $("#titleBox2").animate({
        //         top: 50,
        //         left: 360,
        //         width: 90
        //     }, 400);
        // }
    }

    //make position sticky for footer and change booking fieldset
    var footer = document.getElementsByTagName("footer");
    if (document.body.scrollTop > 77 || document.documentElement.scrollTop > 77) {
        footer[0].style.position = 'sticky';
        footer[0].style.bottom = '0px';



    } else {
        footer[0].style.position = "absolute";
        footer[0].style.bottom = '-75px';
    }
};


//slide show
var slides = new Array(8);
slides[0] = ["surf and relax", "images/S0.png"];
slides[1] = ["sand and the beach", "images/S1.jpg"];
slides[2] = ["lorem ipsum", "images/S2.JPG"];
slides[3] = ["discover the island", "images/S3.png"];
slides[4] = ["fly", "images/S4.png"];
slides[5] = ["relax and play", "images/S5.jpg"];
slides[6] = ["kitesurfing paradise", "images/S6.png"];
slides[6] = ["....best prices...", "images/S7.jpg"];

var mySlide = document.getElementById('mySlide');
var myText = document.getElementById('myText');
var i = 0;

function startSlideshow() {

    $("#myText").html(slides[i][0]);
    $("#mySlide").attr("src", slides[i][1]);

    i++;
    if (i == slides.length){
        i = 0;
    }
    myTimeout = setTimeout("startSlideshow()", 9000);
}

function pauseSlideshow() {
    clearTimeout(myTimeout);
}





//form input
var today = new Date();
var dd = today.getDate()+1;
var mm = today.getMonth()+1; //January is 0
var ddOut = dd+1;

var yyyy = today.getFullYear();
if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;

$('#checkIn').attr('value', yyyy+"-"+mm+"-"+dd);
$('#checkOut').attr('value', yyyy+"-"+mm+"-"+ddOut);







jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
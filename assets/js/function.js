var options = {
  strings: ["Frontend Engineer","UI/UX Enthusiast"],
  typeSpeed: 90,
  showCursor:false,
  backSpeed:50,
  loop:true
  }
  $('#typing-line').text('');
var typed = new Typed("#typing-line", options);

let count=0;
$('.wordText').hide();
$(window).scroll(function(){
  count++;
  console.log(count);
  if (count>30){
    $('.kel1').show().addClass('slideInLeft');
  }
  if (count>50){
    $('.kel2').show().addClass('slideInRight');
  }
  if (count>80){
    $('.kel3').show().addClass('slideInLeft')
  }

});

jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).on('scroll', function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
          $(this).addClass("scroll-in");
        }
      });
    });
  });
  function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 function showClock1() {
  var nowTime = new Date();
  var nowHour = nowTime.getHours();
  var nowMin  = nowTime.getMinutes();
  var nowSec  = nowTime.getSeconds();
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("RealtimeClockArea").innerHTML = msg;
}
setInterval('showClock1()',1000);
var ProgressBar = require('progressbar.js');

// Assuming we have an empty <div id="container"></div> in
// HTML
var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
bar.animate(1);  // Value from 0.0 to 1.0

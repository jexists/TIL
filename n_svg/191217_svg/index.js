
(function($){

// console.log('haha')
 
var donut = $('.donut1');
var donuthas = $('.donut1').hasClass('action');

var deg = 3.6 * (100 - parseInt(donut.attr('data-per')));
var r = parseInt($('.donut1').attr('r'));

$(':root').css({
    '--l': r * 3.141592 * 2,
    '--deg': deg.toString() + "deg",
    '--result': 2 * 3.141592 * r * (deg / 360)
});



})(jQuery);
$(document).ready(function() {
	// $(window).bind('scroll', function(event) {
	// 	var $target = $(event.currentTarget);
	// 	var scrolledY = $target.scrollTop();
	// 	$('.parallax').css('background-position', 'center -'+(scrolledY * 0.2)+'px');
	// });
	$('a[href^="#"]').click(function(event) {
		var id = $(this).attr("href");
		var offset = 20;
		var target = $(id).offset().top - offset;

		$('html, body').animate({scrollTop:target}, 500);
		event.preventDefault();
	});
})
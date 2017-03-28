$(document).ready(function(argument) {
	$(window).scroll(function () {
		var lr = $(this).scrollTop();

		$(".img").css({
			transform : "translateY("+lr/20 +'%)'
		});
	})
});
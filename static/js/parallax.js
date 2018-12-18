$( window ).scroll( function() {
	var scroll   = $(window).scrollTop(); // Scroll top distance
	var w_height = $(window).height();    // Windows height

	// parallax var
	var header_parallax      = 0.1;
	var aboutBlock_parallax  = 0.05;
	var contentForm_parallax = 0.1;

	// top and bottom block side
	var form_top    = $('.content_form').offset().top - scroll; // Dynamic "form" block scroll distance to top border
	var form_bottom = $('.content_form').offset().top + $('.content_form').height() - scroll; // Dynamic "form" block scroll distance to bottom border
	
	var about_top          = $('.about').offset().top - scroll; // Dynamic "about" block scroll dictance to top border
	var about_bottom       = $('.about').offset().top + $('.about').height() - scroll; // Dynamic "about" block scroll dictance to bottom border
	var about_height_toBot = $('.about').offset().top + $('.about').height(); // Static "about" block scroll dictance to bottom border
	// top and bottom block side

	// header parallax
	if( scroll <= w_height ) {
		// if block is visible - parallax sroll
		$('.head_image img').css({'transform':'translate3d(-50%, -' + scroll*header_parallax + 'px, 0)', 'transition': '0s'});
	} else {
		// if block not is visible - image static position
		$('.head_image img').css({'transform':'translate3d(-50%, -' + w_height*header_parallax + 'px, 0)', 'transition': '0s'});
	};
	// header parallax END

	// about-block parallax
	if( about_top <= about_bottom && about_bottom >= 0 ) {
		// if block is visible - parallax sroll
		$('.image-block .smooth-animation').css({'transform':'translateY(' + scroll*aboutBlock_parallax + 'px)', 'transition': '0s'});
	} else {
		// if block not is visible - image static position
		$('.image-block .smooth-animation').css({'transform':'translateY(' + about_height_toBot*aboutBlock_parallax + 'px)', 'transition': '0s'});
	};
	// about-block parallax

	// form-block parallax
	if( form_top >= form_bottom && form_top - w_height == 0 ) {
		// if block is visible - parallax sroll
		$('.content_form img').css({'transform':'translateY(-'+ scroll*contentForm_parallax + 'px)', 'transition': '0s'});
	} else {
		// if block not is visible - image static position
		$('.content_form img').css({'transform':'translateY(-'+ form_bottom*contentForm_parallax + 'px)', 'transition': '0s'});
	};
	// form-block parallax

})
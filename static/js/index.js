$(document).ready(function() {
	// header button animation

	var form = $( '.header .form .form-group' );
	var showForm_button = $( '.show-form' );
	var hideForm_button = $( '.hide_form-btn' );
	var i = 0;

	// remove class on page load
	form.removeClass('show-it-top');
	showForm_button.find( '.arrow' ).removeClass('active');
	$('.head_image').removeClass('darkness');

	// add delay to form item (0.1, 0.2, 0.3, ..., 0.n(i) )
	form.each( function (i) {
		i += 1;
		$(this).css( {'transition-delay': '0.' + i + 's', '-webkit-transition-delay': '0.' + i + 's' });
	});

	// click on "show form button"
	showForm_button.click( function () {
		$( this ).find( '.arrow' ).toggleClass('active'); // arrow animation
		$('.head_image').toggleClass('dark'); // make header darker
		form.toggleClass('show-it-top'); // show form items
	});

});

$(document).ready(function() {

	var block_1   = $( '.animate-wrap' );         // First animation block
	var block_2   = $( '.animate-comment-wrap' ); // Second animation block

	var top_1     = block_1.offset().top - $( window ).height()/2; // First block distance to windows top
	var top_2     = block_2.offset().top - $( window ).height()/2; // Second block distance to windows top
	
	var i = 0; // Use for define item with animation class

	$('.btn').removeClass( 'shadow' ); // Remove shadow class
	
	// Button shadow on hover
	$( '.btn' ).hover(function() {
		$( this ).toggleClass( 'shadow' );
	});
	// Button shadow on hover END

	// First block animation delay
	block_1.find('.animate').each( function (i) {
		i += 1;
		$(this).css( {'transition-delay': '0.' + i + 's', '-webkit-transition-delay': '0.' + i + 's' });
	});
	// First block animation delay END
	
	// Second block animation delay
	block_2.find('.animate').each( function (i) {
		i += 1;
		$(this).css( {'transition-delay': '0.' + i + 's', '-webkit-transition-delay': '0.' + i + 's' });
	});
	// Second block animation delay END

	$( window ).scroll(function() {
		
		var scroll   = $(window).scrollTop(); // Scroll top distance
		var w_height = $(window).height();    // Windows height

		var scroll_top_1  = top_1 - scroll;
		var scroll_top_2  = top_2 - scroll;

		// Show blocks when it's seen
		if ( scroll_top_1 <= 0 ) {
			block_1.find('.animate').addClass('show-it-top');
		} else {
			block_1.find('.animate').removeClass('show-it-top');
		};
		if ( scroll_top_2 <= 0 ) {
			block_2.find('.animate').addClass('show-it-left');
		} else {
			block_2.find('.animate').removeClass('show-it-left');
		};
		// Show blocks when it's seen END
	});

	// Return to top button
	$('.go-to-top .button').click(function(event){
		event.preventDefault();
		$('html, body').animate(
			{
				scrollTop: 0
			},
			1800
		);
	});
	// Return to top button END
});

$(document).ready(function() {
	// gallery social links
	var gallery_image = $( '.photo_wrap' );
	
	$('.photo_socLinks').removeClass('active');

	$( gallery_image ).hover( function () {
		$( this ).find('.photo_socLinks').toggleClass('active');
	});

});
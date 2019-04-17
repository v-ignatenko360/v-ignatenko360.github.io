$('.menu-btn, .menu-nav_link').on('click',function(e){
	e.preventDefault;
	$('.menu-btn, .menu-nav_link').toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');

	$(document).click(function(event) {
	    if ($(event.target).closest(".menu-btn").length ) return;
	    $('.menu-nav').removeClass('menu-nav_active');
	    $('.menu-btn, .menu-nav_link').removeClass('menu-btn_active');
	    event.stopPropagation();
	});
});

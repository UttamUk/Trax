$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
})
$(document).ready(function () {
	$('.navbar-nav>li>a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});


window.sr = ScrollReveal();

sr.reveal('.home-title', {
	duration: 2000,
	origin: 'bottom',
	distance: '110px',
	opacity: 0.3,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 10, z: 0 },
});

sr.reveal('.home-subtitle', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	delay: 100,
	opacity: 0,
});

sr.reveal('.home-btn', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	delay: 200,
	opacity: 0,
});
sr.reveal('.home-box, .home-list', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	delay: 200,
	opacity: 0,
});


sr.reveal('.feature-subtitle', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


sr.reveal('.feature-title', {
	duration: 1900,
	origin: 'bottom',
	distance: '40px',
	viewFactor: 0.01,
	delay: 100,
	opacity: 0.6,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('.security-title', {
	duration: 2000,
	origin: 'bottom',
	distance: '110px',
	viewFactor: 0.01,
	opacity: 0.3,
	delay: 0,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
	// rotate: { x: 0, y: 10, z: 0 },
});

sr.reveal('.security-data', {
	duration: 2000,
	origin: 'bottom',
	distance: '100px',
	delay: 100,
	viewFactor: 0.01,
	opacity: 0,
});

sr.reveal('.security-box', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.pricing-head', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.pricing-sub', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});





sr.reveal('.pricing-img', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.pricing-heading', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});


sr.reveal('.how-do-iget-head', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
sr.reveal('.how-do-iget-subhead', {
	duration: 1500,
	origin: 'bottom',
	distance: '70px',
	viewFactor: 0.01,
	delay: 0,
	opacity: 0.1,
	easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});



$(document).ready(function () {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		fade: true,
		asNavFor: '.slider-nav',
		prevArrow: '<button class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
		nextArrow: '<button class="slick-next"><i class="fa fa-arrow-right"></i></button>',
	});
	$('.slider-nav').slick({
		slidesToShow: 8,
		// slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		focusOnSelect: true
	});

	$('.slider').on('afterChange', function () {
		var dataId = $('.slick-current').attr("data-slick-index");
		dataId++
		$('a[data-slide]').removeClass("active");
		$('a[data-slide=' + dataId + ']').addClass("active");
	});
	
});



$('a[data-slide]').click(function (e) {
	e.preventDefault();
	var slideno = $(this).data('slide');
	console.log(slideno);
	$('a[data-slide]').removeClass("active");
	$(this).addClass("active");
	$('.slider-for').slick('slickGoTo', slideno - 1);
});

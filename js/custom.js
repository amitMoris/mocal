$(document).ready(function () {

$("#banner-slider").owlCarousel({
	items :1,
	nav:false,
	dots:true,
	loop:true,
	autoplay:true,
	mouseDrag:false,
	animateOut: 'fadeOut',
	autoplayHoverPause:false,
	
  });

$(".tab_slider").owlCarousel({
		nav:true,
		dots:false,
		loop:true,
		autoplay:false,
		mouseDrag:true,
		autoplayHoverPause:true,
		responsiveClass: true,
		responsive: {
	  0: {
		items: 2,
		nav: false,
		  margin:8
	  },
	  768: {
		items:4,
		nav:false,
		margin:8
		
	  },
	  1280: {
		items: 6,
		nav: false,
		loop: true,
		margin:8
	  },
		1000: {
		items: 5,
		nav: false,
		loop: true,
		margin:8
	  }	
	}	 
	 
});


});


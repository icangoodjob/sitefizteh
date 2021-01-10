$(document).ready(function() {
	$('.slider').slick({
		arrows:true,
		dots:false,
		adaptiveHeight:true,
		slidesToShow:3,
		slidesToScroll:2,
		speed:300,
		easing:'ease',
		infinite:false,
		autoplay:false,
		autoplaySpeed:0,
		draggable:true,
		responsive: [
    {
      breakpoint: 951,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1,
      }
    },
    {
    	breakpoint: 851,
    	settings: {
    		slidesToShow: 1.5,
       		slidesToScroll: 1,
    	}
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
});
$(document).ready(function() {
  $(".menuToggle").click(function() {
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === "none"){
        $(this).removeAttr('style');
      }
    });
  });
});


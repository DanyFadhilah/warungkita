$(document).ready(function(){
	// hide popup akun
  	$(".account").click(function(){
	    $(".popup-account").slideToggle();
	    $(".popup-chat").hide()
	    $(".popup-notif").hide();
	    $(".popup-cart").hide();
	});

	// hide popup bahasa
  	$(".lang").click(function(){
	    $(".popup-lang").slideToggle(250);
	});

	// hide popup notifikasi
  	$(".notif").click(function(){
	    $(".popup-notif").slideToggle();
		$(".popup-account").hide();
		$(".popup-cart").hide();
		$(".popup-chat").hide();
	});

	// hide popup notifikasi
  	$(".chat").click(function(){
	    $(".popup-chat").slideToggle(250);
	    $(".popup-cart").hide();
	    $(".popup-notif").hide();
	    $(".popup-account").hide();
	});

	// hide popup cart
  	$(".cart").click(function(){
	    $(".popup-cart").slideToggle(250);
	    $(".popup-notif").hide();
	    $(".popup-account").hide();
	    $(".popup-chat").hide();

	});

	$(".parent-list").click(function(){
	    $("#isi-list").slideToggle(250);
	});

	$(".parent-list1").click(function(){
	    $("#isi-list1").slideToggle(250);
	});

    // slick toko banner
    $('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        autoplay: true,
		autoplaySpeed: 2300,
		prevArrow: '<img src="assets/images/toko/Before.png" class="slick-prev"  alt="Prev Images">',
		nextArrow: '<img src="assets/images/toko/Next.png" class="slick-next" alt="Next Images">',
	});
	
	// slick toko kategori
    // $('.kat').slick({
	// 	infinite: true,
	// 	slidesToShow: 1,
	// 	slidesToScroll: false,
	// 	dots: true,
    //     autoplay: false,
	// 	arrows: false,
    // });
});




	


	

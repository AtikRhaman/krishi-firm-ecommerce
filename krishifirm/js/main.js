(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	

	
/*----------------------------
 wow js active
------------------------------ */
 	new WOW().init();


/*----------------------------
 bootstrap selsect active
------------------------------ */
// top currency & language select
	$('.top-select').selectpicker({
	// style: 'btn-info',
	//size: 4
	});  

// search category option select
	$('.header-search').selectpicker({
	}); 
  
// them select select
  $(".js-example-basic-multiple-limit").select2({
  maximumSelectionLength: 2
});
 
/*----------------------------
 owl active
------------------------------ */  
	$("#owl-demo").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
	  items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
	});


/*--------------------------
 countdown
---------------------------- */	
// Trendy Deals 1
  $('#trendyDeals1').countdown('2017/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });
// Trendy Deals 1
  $('#trendyDeals2').countdown('2017/6/5', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });
// Trendy Deals 1
  $('#trendyDeals3').countdown('2019/3/28', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });
// Trendy Deals 1
  $('#trendyDeals4').countdown('2017/9/23', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });
// Trendy Deals 1
  $('#trendyDeals5').countdown('2018/9/10', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });
// Trendy Deals 1
  $('#trendyDeals6').countdown('2017/12/1', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });
// Trendy Deals 1
  $('#trendyDeals7').countdown('2017/5/18', function(event) {
  var $this = $(this).html(event.strftime(''
      // + '<span>%w</span> weeks '
      + '<li> <num>%d</num> <txt>Days</txt> </li>'
      + '<li> <num>%H</num> <txt>Hour</txt> </li>'
      + '<li> <num>%M</num> <txt>Mint</txt> </li>'
      + '<li> <num>%S</num> <txt>Secs</txt> </li>'));
  });




/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "৳" + ui.values[ 0 ] + " - ৳" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "৳" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - ৳" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 

/*--------------------------
 Cart Plus Minus
---------------------------- */ 
  $(".cart-plus-minus").append('<div class="dec qtybutton">+</div><div class="inc qtybutton">-</div>');
  $(".qtybutton").on("click", function () {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();
      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
      } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } else {
              newVal = 0;
          }
      }
      $button.parent().find("input").val(newVal);
  });
$(document).ready(function () {


//scrollify tos sections ;)
$('a.tos').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 1000);
    return false;
});

//make nav bar sticky when below its orig position
function navscroll(){
var menu = $('.navbar.full-nav-cont');
var navpos = $('.nav-pos');
var navposOffsetY = navpos.offset().top + 10;
var winoffsetY = $(window).scrollTop();

//var origOffsetY = menu.offset().top;
//console.log(origOffsetY);
//console.log(navposOffsetY);
//console.log(winoffsetY);

if(winoffsetY >= navposOffsetY){
$('.navbar.full-nav-cont.tic-nav').addClass('navbar-fixed-top');
$('.navbar.full-nav-cont.tic-nav').addClass('nav-transpa');
//console.log("Im fixed");
}
else{
$('.navbar.full-nav-cont.tic-nav').removeClass('navbar-fixed-top');
$('.navbar.full-nav-cont.tic-nav').removeClass('nav-transpa');
//console.log("not fixed");
}
}

$(window).scroll(navscroll);

});

//show/hide and smooth scroll of back to top button

function checktotop(){
var window_position = window.pageYOffset;

if(window_position > 600){
$('#totop').show("slow");
}
else{
$('#totop').hide("slow");
}
}
window.addEventListener('scroll', checktotop, false);
window.addEventListener('resize', checktotop, false);

$(document).ready(function() {

	var window_position = window.pageYOffset;
	checktotop();

	$('#totop').click(function(r) {    
		$("html, body").animate({ scrollTop: 0 }, 800);
	});
	
});
//END show/hide and smooth scroll of back to top button

//Navigation Dropdown function 
$(function(){
	$(".dropdown-menu > li > a.trigger").on("click",function(e){
		var current=$(this).next();
		var grandparent=$(this).parent().parent();
		if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
			$(this).toggleClass('right-caret left-caret');
		grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
		grandparent.find(".sub-menu:visible").not(current).hide();
		current.toggle();
		e.stopPropagation();
	});
	$(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
		var root=$(this).closest('.dropdown');
		root.find('.left-caret').toggleClass('right-caret left-caret');
		root.find('.sub-menu:visible').hide();
	});
});
//End Navigation Dropdown function 

//hamburjer menu

$("#menu-button").click(function(){
  $(this).toggleClass("active");
  $("#line-1").toggleClass("active");
  $("#line-2").toggleClass("active");
  $("#line-3").toggleClass("active");
  $("#menu").slideToggle("slow");
});

//Slider Caption animation
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-tic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);
//Slider Caption animation

//Pie chart
var chart;
var legend;

var chartData = [
	{
		"QC": "No QC inspection",
		"count": 41
	},
	{
		"QC": "Third party QC firms",
		"count": 32
	},
	{
		"QC": "Local QC staff",
		"count": 18
	},
	{
		"QC": "QC by checking on themselves",
		"count": 9
	}
];

AmCharts.ready(function () {
	// PIE CHART
	chart = new AmCharts.AmPieChart();
	chart.dataProvider = chartData;
	chart.titleField = "QC";
	chart.valueField = "count";
	chart.startDuration = 0;
	// LEGEND
	legend = new AmCharts.AmLegend();
	legend.align = "center";
	legend.markerType = "circle";
	legend.markersize = 2;
	legend.position = "bottom";
	legend.fontSize= 8;
	
	chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
	chart.addLegend(legend);
	chart.labelRadius = 20;
	chart.labelText = "[[percents]]%";
	
	// WRITE
	chart.write("chartdiv");
});

//Bing Map
function GetMap(){

// Initialize the map
var map = new Microsoft.Maps.Map(document.getElementById("mapDiv"),
 {
 credentials:"AmUuRz4-VGqD4VJ7tSV4xti6n9f3zWTmleRsZeA-y1wgJ8W5aJkqIUYKNgRFvyPa",
  center: new Microsoft.Maps.Location(33.863466, 83.840016),
 mapTypeId: Microsoft.Maps.MapTypeId.road,
 zoom: 3,
 showScalebar: false
 }); 

// Retrieve the location of the map center 
var center = map.getCenter();

 // Define the pushpin location
var ph = new Microsoft.Maps.Location(15.0667246, 120.7520857);
var afg = new Microsoft.Maps.Location(34.098922, 65.052480);
var bng = new Microsoft.Maps.Location(24.346556, 90.352970);
var bru = new Microsoft.Maps.Location(4.640156, 114.642520);
var bur = new Microsoft.Maps.Location(21.900791, 96.593485);

var cam = new Microsoft.Maps.Location(12.912384, 104.988935);
var chn = new Microsoft.Maps.Location(35.934059, 103.663827);
var hk = new Microsoft.Maps.Location(22.308264, 114.183918);
var indo = new Microsoft.Maps.Location(-4.168754, 122.312010);
var indi = new Microsoft.Maps.Location(22.725074, 79.608805);
var irn = new Microsoft.Maps.Location(31.663646, 54.441605);
var jpn = new Microsoft.Maps.Location(36.011782, 139.175270);
var laos = new Microsoft.Maps.Location(19.399683, 102.513198);
var mal = new Microsoft.Maps.Location(2.322599, 113.562326);
var mong = new Microsoft.Maps.Location(47.442728, 103.214966);
var pak = new Microsoft.Maps.Location(30.335020, 69.321315);
var sing = new Microsoft.Maps.Location(1.342732, 103.820909);
var kor = new Microsoft.Maps.Location(37.609822, 128.065816);
var taiw = new Microsoft.Maps.Location(23.614549, 121.091958);
var thai = new Microsoft.Maps.Location(15.067755, 100.774401);
var tur = new Microsoft.Maps.Location(40.372623, 35.848860);
var viet = new Microsoft.Maps.Location(14.775853, 108.101632);

var pin_ph = new Microsoft.Maps.Pushpin(ph); 
var pin_afg = new Microsoft.Maps.Pushpin(afg); 
var pin_bng = new Microsoft.Maps.Pushpin(bng); 
var pin_bru = new Microsoft.Maps.Pushpin(bru); 
var pin_bur = new Microsoft.Maps.Pushpin(bur); 
var pin_cam = new Microsoft.Maps.Pushpin(cam); 
var pin_chn = new Microsoft.Maps.Pushpin(chn); 
var pin_hk = new Microsoft.Maps.Pushpin(hk); 
var pin_indo = new Microsoft.Maps.Pushpin(indo); 
var pin_indi = new Microsoft.Maps.Pushpin(indi); 
var pin_irn = new Microsoft.Maps.Pushpin(irn); 
var pin_jpn = new Microsoft.Maps.Pushpin(jpn); 
var pin_laos = new Microsoft.Maps.Pushpin(laos); 
var pin_mal = new Microsoft.Maps.Pushpin(mal); 
var pin_mong = new Microsoft.Maps.Pushpin(mong); 
var pin_pak = new Microsoft.Maps.Pushpin(pak); 
var pin_sing = new Microsoft.Maps.Pushpin(sing); 
var pin_kor = new Microsoft.Maps.Pushpin(kor); 
var pin_taiw = new Microsoft.Maps.Pushpin(taiw); 
var pin_thai = new Microsoft.Maps.Pushpin(thai); 
var pin_tur = new Microsoft.Maps.Pushpin(tur); 
var pin_viet = new Microsoft.Maps.Pushpin(viet); 

map.entities.push(pin_ph);
map.entities.push(pin_afg);
map.entities.push(pin_bng);
map.entities.push(pin_bru);
map.entities.push(pin_bur);
map.entities.push(pin_cam);
map.entities.push(pin_chn);
map.entities.push(pin_hk);
map.entities.push(pin_indo);
map.entities.push(pin_indi);
map.entities.push(pin_irn);
map.entities.push(pin_jpn);
map.entities.push(pin_laos);
map.entities.push(pin_mal);
map.entities.push(pin_mong);
map.entities.push(pin_pak);
map.entities.push(pin_sing);
map.entities.push(pin_kor);
map.entities.push(pin_taiw);
map.entities.push(pin_thai);
map.entities.push(pin_tur);
map.entities.push(pin_viet);

//map.AttachEvent("onmousewheel", wheelCallback);	
Microsoft.Maps.Events.addHandler(map, 'mousewheel', function(e) {
	e.handled = true;
	return true;
});
//var map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), mapOptions);
}

function wheelCallback(e)
{
//returning true to cancel default action.

window.scrollBy(0,-5*e.mouseWheelChange);

 return true;
}
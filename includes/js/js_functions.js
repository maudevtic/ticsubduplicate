$(document).ready(function () {
    $('a.tos').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 60
        }, 1000);
        return false;
    });

    function navscroll() {
        var menu = $('.navbar.full-nav-cont');
        var navpos = $('.nav-pos');
        var navposOffsetY = navpos.offset().top + 10;
        var winoffsetY = $(window).scrollTop();
        if (winoffsetY >= navposOffsetY) {
            $('.navbar.full-nav-cont.tic-nav').addClass('navbar-fixed-top');
            $('.navbar.full-nav-cont.tic-nav').addClass('nav-transpa');
        } else {
            $('.navbar.full-nav-cont.tic-nav').removeClass('navbar-fixed-top');
            $('.navbar.full-nav-cont.tic-nav').removeClass('nav-transpa');
        }
    }
    $(window).scroll(navscroll);
});

function checktotop() {
    var window_position = window.pageYOffset;
    if (window_position > 600) {
        $('#totop').show("slow");
    } else {
        $('#totop').hide("slow");
    }
}
window.addEventListener('scroll', checktotop, false);
window.addEventListener('resize', checktotop, false);
$(document).ready(function () {
    var window_position = window.pageYOffset;
    checktotop();
    $('#totop').click(function (r) {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
    });
});
$(function () {
    $(".dropdown-menu > li > a.trigger").on("click", function (e) {
        var current = $(this).next();
        var grandparent = $(this).parent().parent();
        if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret')) $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".sub-menu:visible").not(current).hide();
        current.toggle();
        e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click", function () {
        var root = $(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
    });
});
$("#menu-button").click(function () {
    $(this).toggleClass("active");
    $("#line-1").toggleClass("active");
    $("#line-2").toggleClass("active");
    $("#line-3").toggleClass("active");
    $("#menu").slideToggle("slow");
});
(function ($) {
    function doAnimations(elems) {
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    var $myCarousel = $('#carousel-tic'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    $myCarousel.carousel();
    doAnimations($firstAnimatingElems);
    $myCarousel.carousel('pause');
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
})(jQuery);

function GetMap() {
    var map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {
        credentials: "AmUuRz4-VGqD4VJ7tSV4xti6n9f3zWTmleRsZeA-y1wgJ8W5aJkqIUYKNgRFvyPa",
        center: new Microsoft.Maps.Location(33.863466, 83.840016),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 3,
        showScalebar: false
    });
    var center = map.getCenter();
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
    Microsoft.Maps.Events.addHandler(map, 'mousewheel', function (e) {
        e.handled = true;
        return true;
    });
}

function wheelCallback(e) {
    window.scrollBy(0, -5 * e.mouseWheelChange);
    return true;
}

// Contact Button
dragElement(document.getElementById(("div_button")));
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
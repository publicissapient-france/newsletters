$(document).ready(function() {
    Xebia.init();
});

Xebia = {
    current : 0,
    init: function(){

        $(".nav a").click(function(event){
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top-25}, 400);
        });

        $(window).scroll(_.debounce(Xebia.menuSlider, 100));

        this.next();
        $('.dot1').bind('click', function() {
            Xebia.next();
        });
        $('.dot2').bind('click', function() {
            Xebia.next();
        });
        var timer = setInterval(function(){Xebia.next()}, 10000);
        var timerSmallLogo = setInterval(function(){Xebia.nextClient('.logo-small div')}, 5500);
        var timerSmallLogo = setInterval(function(){Xebia.nextClient('.logo-large div')}, 4500);

        this.initLogos();


        $('.contact-join').bind('click', function() {
            $('.contact-talk').removeClass('active');
            $(this).addClass('active');
            $('.contact-form-talk').fadeOut('slow');
            $('.contact-form-join').fadeIn('slow');
            $('.contact-pointer').animate({left: "750px"}, 300);
        });

        $('.contact-talk').bind('click', function() {
            $('.contact-join').removeClass('active');
            $(this).addClass('active');
            $('.contact-form-join').fadeOut('slow');
            $('.contact-form-talk').fadeIn('slow');
            $('.contact-pointer').animate({left: "230px"}, 300);
        });

    },
    menuSlider: function() {

        var top = $(window).scrollTop();
        var pointer = $('.nav .pointer');

        if ( top < 550 ) {
            pointer.animate({left: "150px"}, 300); // hello
        } else if ( top < 1300 ) {
            pointer.animate({left: "260px"}, 300); // passion
        } else if ( top < 1455 ) {// prev: 2000
            pointer.animate({left: "405px"}, 300); // trust
        } else if ( top < 2080 ) { // prev: 2850 preprev 2530
            pointer.animate({left: "555px"}, 300); // universe
        } else if ( top < 3130 ) { // prev: 3450
            pointer.animate({left: "680px"}, 300); // contact
        } else if ( top < 4180 ) { // prev: 4500
            pointer.animate({left: "805px"}, 300); // work
        } else {
            pointer.animate({left: "150px"}, 300);
        }
    },
    random: function(min, max) {
        return Math.floor(Math.random() * (max-min)) + min;
    },
    initLogos: function(){
        for (var i = 0; i < 26; i ++) {
            $('<div>')
                .css('background',
                "url('../images/trust-logos-small.png') -"+(i*170)+"px 0px no-repeat")
                .hide()
                .appendTo('.logo-small')
        }

        for (var i = 0; i < 6; i ++) {
            var hiddenLogos = $('.logo-small div').filter(":hidden");
            hiddenLogos.eq(this.random(0,hiddenLogos.length)).show();
        }


        for (var i = 0; i < 14; i ++) {
            $('<div>')
                .css('background',
                "url('../images/trust-logos-large.png') -"+(i*220)+"px 0px no-repeat")
                .hide()
                .appendTo('.logo-large')
        }

        for (var i = 0; i < 5; i ++) {
            var hiddenLogos = $('.logo-large div').filter(":hidden");
            hiddenLogos.eq(this.random(0,hiddenLogos.length)).show();
        }

    },
    nextClient: function(selector) {
        var visibleLogos = $(selector).filter(":visible");
        var oldLogo = visibleLogos.eq(this.random(0,visibleLogos.length));
        var hiddenLogos = $(selector).filter(":hidden");
        var newLogo = hiddenLogos.eq(this.random(0,hiddenLogos.length));

        $(oldLogo).fadeOut(3000, function(){
            $(oldLogo).before($(newLogo));
            $(newLogo).fadeIn(3000);
        });

    },
    next: function() {
        $(".slide" + this.current).fadeOut(600);
        $(".dot" + this.current).removeClass('active');
        nbSlides = $('.carousel-slides').children().size();
        this.current = (this.current >= nbSlides) ? 1 : this.current + 1;
        $(".slide" + this.current).fadeIn(700);
        $(".dot" + this.current).addClass('active');
    }
}


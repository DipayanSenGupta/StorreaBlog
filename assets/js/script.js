$(document).ready(function() {
    $(function () {
        $('#fixed').stickyPanel();
    });

    $("#open-menu-search").on("click",function(e){
    e.preventDefault();
        $("#search_content_id").css({"width":"100%"});
        console.log("hello")
    });

    $("#close-menu-search").on("click",function(e){
    e.preventDefault();
        $("#search_content_id").css({"width":"0"});
    });

    $("#open-menu").click(function(){
        e.preventDefault();
        $("#overlay-hamburger").addClass("show-menu");
    });
    $("#close-menu").click(function(){
        e.preventDefault();
        $("#overlay-hamburger").removeClass("show-menu");
    });


    (function($){
        'use strict';

            var defaults = {
            topOffset: 400, //px - offset to switch of fixed position
            hideDuration: 300, //ms
            stickyClass: 'is-fixed'
            };

        $.fn.stickyPanel = function(options){
            if(this.length == 0) return this; // returns the current jQuery object

            var self = this,
            settings,
            isFixed = false, //state of panel
            stickyClass,
            animation = {
            normal: self.css('animationDuration'), //show duration
            reverse: '', //hide duration
            getStyle: function (type) {
            return {
            animationDirection: type,
            animationDuration: this[type]
            };
        }
        };

        // Init carousel
            function init(){
                settings = $.extend({}, defaults, options);
                animation.reverse = settings.hideDuration + 'ms';
                stickyClass = settings.stickyClass;
                $(window).on('scroll', onScroll).trigger('scroll');
            }

        // On scroll
            function onScroll() {
                if ( window.pageYOffset > settings.topOffset){
                    if (!isFixed){
                    isFixed = true;
                    self.addClass(stickyClass)
                    .css(animation.getStyle('normal'));
                    }
                } else {
                if (isFixed){
                    isFixed = false;

                self.removeClass(stickyClass)
                .each(function (index, e) {
                // restart animation
                // https://css-tricks.com/restart-css-animation/
                void e.offsetWidth;
                })
                .addClass(stickyClass)
                .css(animation.getStyle('reverse'));

                    setTimeout(function () {
                    self.removeClass(stickyClass);
                    }, settings.hideDuration);
                }
                }
            }

            init();

            return this;
        }
    })(jQuery);

  $("nav ul li ul").each(function(){
    // console.log ($(this).children("ul").length)
    // console.log ($(this).children("ul"));
     console.log ($(this).has("ul"));
    // if($(this).has("ul"))

    if($(this).children("li")){
        $(this).parent().addClass("has-children");
    }
  });


  $('.dropdown-content').click(function() {          
            var name = $(this).attr("name");
            var content = $('.content[name=' + name + ']');
            $('.content').not(content).hide('fast');
            content.slideToggle('fast');
        });

});
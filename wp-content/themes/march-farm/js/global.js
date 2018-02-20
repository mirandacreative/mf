;
(function ($) {


    // Sticky Footer
    var bumpIt = function () {
            $('body').css('padding-bottom', $('.footer').outerHeight(true));
            $('.footer').addClass('sticky-footer');
        },
        didResize = false;

    $(window).resize(function () {
        didResize = true;
    });
    setInterval(function () {
        if (didResize) {
            didResize = false;
            bumpIt();
        }
    }, 250);

    // Scripts which runs after DOM load

    $(document).ready(function () {

        //Remove placeholder on click
        $("input,textarea").each(function () {
            $(this).data('holder', $(this).attr('placeholder'));

            $(this).focusin(function () {
                $(this).attr('placeholder', '');
            });

            $(this).focusout(function () {
                $(this).attr('placeholder', $(this).data('holder'));
            });
        });

        //Make elements equal height
        $('.matchHeight').matchHeight();
        if ($(window).width() > 1025) {
            $('.matchHeight-event').matchHeight({
                byRow: false
            });
        }
        if ($(window).width() > 641) {
            $(".venue").hover(function () {
                    $(this).find('.bg-opacity').fadeOut(400);
                },
                function () {
                    $(this).find('.bg-opacity').fadeIn(200);
                });
        }
        if ($(window).width() > 641) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 100) {
                    $(".header").addClass("header-change");
                } else {
                    $(".header").removeClass("header-change");
                }
            });
        }


        // Add fancybox to images
        $('.gallery-item a').attr('rel', 'gallery');
        $('a[rel*="album"], .gallery-item a, .fancybox, a[href$="jpg"], a[href$="png"], a[href$="gif"]').fancybox({
            minHeight: 0,
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });

        // $(".fancybox").fancybox({
        //     fitToView: false // use autoScale for v1.3.4
        // });

        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 700);
            }
        });

        $('.venue__gallery-thumbnails .gallery__thumb').on('click', function (e) {

            var target = $(this);
            var bg_url = target.css('background-image');
            url = bg_url.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            $('.image-popup img').attr('src', url);
        });
        $('.venue__gallery-main-img').on('click', function (e) {

            var target = $(this);
            var bg_url = target.css('background-image');
            url = bg_url.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            $('.image-popup img').attr('src', url);
        });
        $(document).on('click', function (e) {
            var target = e.target;

            if ($(target).hasClass('gallery__thumb') || $(target).hasClass('gallery__thumb_t')) {
                $('.image-popup').addClass('visible-popup');
            }
            else {
                $('.image-popup').removeClass('visible-popup');
            }

        });



        $(document).on('scroll', function (e) {
            $('.image-popup').removeClass('visible-popup');
        });

        var facebook = function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
            fjs.parentNode.insertBefore(js, fjs);

        };
        facebook(document, 'script', 'facebook-jssdk');

        // Sticky footer
        bumpIt();


    });


    // Scripts which runs after all elements load

    $(window).load(function () {

        //jQuery code goes here


    });

    // Scripts which runs at window resize

    $(window).resize(function () {

        //jQuery code goes here


    });

}(jQuery));

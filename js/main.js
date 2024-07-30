$(document).ready(function(){
    $('.dropdown > a').click(function(e){
        e.preventDefault();
        $('.submenu').not($(this).next()).removeClass('active');
        $(this).next('.submenu').toggleClass('active');

        $(this).toggleClass('active');
    });

    $('header .btnwrap').click(function(){
        $('.searchopen').toggle();
        $('.btnwrap button').toggle();
        $('.header__search input').toggle();
    })


	$(document).click(function (event) {
		let $target = $(event.target);
		if (!$target.closest('.header__search').length) {
            $('.searchopen').show();
            $('.btnwrap button').hide();
            $('.header__search input').hide();
		}
	});

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    $('.burger').click(function(){
        $(this).toggleClass('on');
        $('.header__wrapper').toggleClass('show');
        $('.menubg').toggleClass('active');
    })








    // if ($(window).width() < 1200) {}













});
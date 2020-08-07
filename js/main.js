$(document).ready(function() {
    $('.navbox').click(function() {
        $(this).toggleClass('navbox--menu-open');
        $('.hamburger').toggleClass('navbox--menu-open');
        $('.navbox-panel').toggleClass('is-visible');
        $('body').toggleClass('menu-open');
    })
});
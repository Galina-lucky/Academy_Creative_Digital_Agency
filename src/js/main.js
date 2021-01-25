;(function(){
  $(document).ready(function(){
    AOS.init({
      disable: 'mobile',
      once: true
    });

    let menu = $('.js-menu');
    let menuBtn = $('.js-btn-toggle-menu');
    let el = $('.js-btn-toggle-menu__item');

    menuBtn.on('click', function() {
      el.toggleClass('btn-toggle-menu__item--big');
    });

    $(document).click(function (e) {
      if ( !menuBtn.is(e.target)  && !el.is(e.target)  && !menu.is(e.target) && el.hasClass('btn-toggle-menu__item--big')) {
        el.removeClass('btn-toggle-menu__item--big');
      };
    });

    let nav = $('.js-navbar');
    let navTop;
    getTopNav();

    function getTopNav() {
      ($(window).width() < 768)
      ? navTop = 10
      : navTop = 35;
    }

    $(window).on('resize', function(){
      getTopNav()
    });

    $(window).scroll(function () {
      ($(this).scrollTop() > navTop)
        ? nav.addClass('main-nav--fixed')
        : nav.removeClass('main-nav--fixed');
    });
  }); 
})();
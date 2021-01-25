;(function(){

  $(document).ready(function() {
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
  });

  $(document).ready(function(){
    let nav = $('.js-navbar');
    let navHeader = $('.js-navbar-header');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 35) {
        nav.addClass('main-menu--fixed');
        navHeader.addClass('main-menu--bg');
      } else {
        nav.removeClass('main-menu--fixed');
        navHeader.removeClass('main-menu--bg');
      }
    });
  }); 


  AOS.init({
     disable: 'mobile',
     once: true
  });
 
})();
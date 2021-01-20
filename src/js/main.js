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
  
})();
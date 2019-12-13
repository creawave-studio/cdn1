$(window).on('load',function(e) {
  $('body').addClass('loaded');
  $('.loader').addClass('hide');
    UIkit.scrollspy('.nav', {
      target: 'a',
      cls: 'uk-animation-fade',
      delay: 50
  });

    UIkit.scrollspy('.header__top', {
      target: 'div',
      cls: 'uk-animation-fade',
      delay: 50
  });

  $('.partners').slick({
    dots: false,
    infinite: false,
    arrows: false,
    autoplay:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.industries-list').masonry({
  itemSelector: '.industries-list__item'
  });

  $('.change-lang').on('click', 'a', function (e) {
    e.preventDefault();

    let lang = $(this).attr('data-value');
    $.post('/change-language', { lang }, () => window.location.reload());
  });
});

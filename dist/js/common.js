$('.navy_slider_wrp').slick({
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  adaptiveHeight: true,
  vertical: true
  });


    $('.buy1-carousel').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


 
            
    



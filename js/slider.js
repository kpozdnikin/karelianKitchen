window.addEventListener('load', function(){
  console.log('load');
  new Glider(document.querySelector('.glider.first'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 2,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev.first',
      next: '.glider-next.first'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });

  new Glider(document.querySelector('.glider.second'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 2,
    scrollLock: true,
    dots: '#resp-dots',
    arrows: {
      prev: '.glider-prev.second',
      next: '.glider-next.second'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 775,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
  });
});

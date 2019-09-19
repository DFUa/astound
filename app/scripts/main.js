$(document).ready(function() {
  let initalSlide = 0;

  function showSlide(index) {
    let slides = $('.similar-goods-item')

    if(index > (slides.length - 1)) {
      index = initalSlide = 0
    } else if (index < 0 ) {
      index = initalSlide = slides.length - 1
    }
    
    $(slides[index]).addClass('active')
  }

  $('.slider-btn.next-btn').on('click', function () {
    $('.similar-goods-item').removeClass('active')
    showSlide(++initalSlide)
  });

  $('.slider-btn.previous-btn').on('click', function () {
    $('.similar-goods-item').removeClass('active')
    showSlide(--initalSlide)
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 720) {
      showSlide(initalSlide)
    }
  });

  $('.share-btn').on('click', function (event){
    event.preventDefault();
    $('.share-list').toggleClass('open')
  });

  $('.share-list').find('.icon-close').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.share-list').removeClass('open')
  });
})
// счетчик для количества цветов
let calculate = document.getElementById("buttonCountNumber");
let count = document.getElementById("buttonCountNumber");
calculation = document.getElementById("buttonCountNumber").innerHTML;

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 150){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}



// Слайдер для цветов

$(document).ready(function () {
  const flowersSlider = new Swiper('.flowers-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 6,
  
    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

   // настройки адаптивной версии
    breakpoints: {
      // если браузер >= 320px
      320: {
        slidesPerView: 2,
      },
      // если браузер >= 480px
      480: {
        slidesPerView: 3,
      },
      // если браузер >= 992px
      992: {
        slidesPerView: 6,
      }
    }
  });


  const reviewsSlider = new Swiper('.reviews-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 1,
  
    // подключаем стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });



   // подкючаем библиотеку jQuery

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'img/reviews/zveti 1.jpg',
        opts : {
          caption : 'Первый букет',
          thumb   : 'img/reviews/zveti 1.jpg'
        }
      },
      {
        src  : 'img/reviews/zveti 2.jpg',
        opts : {
          caption : 'Второй букет',
          thumb   : 'img/reviews/zveti 2.jpg'
        }
      },
      {
        src  : 'img/reviews/zveti.jpg',
        opts : {
          caption : 'Третий букет',
          thumb   : 'img/reviews/zveti.jpg'
        }
      },
      {
        src  : 'img/reviews/zveti 4.jpg',
        opts : {
          caption : 'Четвертый букет',
          thumb   : 'img/reviews/zveti 4.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });

});

document.addEventListener('DOMContentLoaded', function() {
/*---------------- Header ----------------*/

// Top header
// переход от меню к разделам
const anchors = document.querySelectorAll('a.nav-header__link')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Bottom header
// нижнее выпадающее меню
const buttonDrop = document.querySelectorAll('.nav-direction__link');
  //на каждую кнопку вешаем обработчик
  buttonDrop.forEach(function (btn){
    btn.addEventListener('click', function(e){
      if (e.target.classList.contains('activ')) { //если уже класс есть на этой кнопке
        e.currentTarget.classList.remove('activ') //то удаляем конкретно на этой кнопке
      } else {
        e.target.classList.add('activ') //иначе добавляем класс
      }
    })
  })
  //если это не кнопка и не само выпадающее меню, то удаляем класс
  //первое условие необходимо добавить, чтобы незацикливать появление->исчезновение класса
  document.addEventListener('click', function(event){
    if (!event.target.classList.contains('nav-direction__link') && !event.target.classList.contains('nav-direction__scroll')){
      buttonDrop.forEach(function(e){
        e.classList.remove('activ')
      })
    }
  })

//скрол в выпадающем меню

 const simpleBar1 = new SimpleBar(document.getElementById('scroll-1'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar1.recalculate();

 const simpleBar2 = new SimpleBar(document.getElementById('scroll-2'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar2.recalculate();

 const simpleBar3 = new SimpleBar(document.getElementById('scroll-3'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar3.recalculate();

 const simpleBar4 = new SimpleBar(document.getElementById('scroll-4'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar4.recalculate();

 const simpleBar5 = new SimpleBar(document.getElementById('scroll-5'), { autoHide: false, scrollbarMaxSize: 28 });
 simpleBar5.recalculate();

// //Поле поиска, меняем цвет иконки батона в фокусе инпута
// $( "#search" ).focus(function() {
//   let imageUrlColor = "../img/Search_hover.svg";
//   $( this ).prev( "button" ).css("background-image", "url(" + imageUrlColor + ")");

// });
// $('#search').focusout(function(){
//   $( this ).prev( "button" ).attr('style', '');
// });


//открываем инпут поиска при нажатии на кнопку
const mediaQueryMax1199 = window.matchMedia('(max-width: 1199px)');
function handleTabletChange1199(e) {
  if (e.matches) {
    document.querySelector('#header__btn-seach').addEventListener('click', function(e){
      e.preventDefault();
      if (!this.classList.contains('is-active')) {
        this.classList.add('is-active');
        this.classList.add('fadeInLeft');
        document.querySelector('#input__search').classList.add('is-active');
        document.querySelector('#input__search').classList.add('fadeInLeft');
        document.querySelector('.header__logo').classList.add('move');
      } else {
        this.classList.remove('is-active');
        this.classList.remove('fadeInLeft');
        document.querySelector('#input__search').classList.remove('is-active');
        document.querySelector('#input__search').classList.remove('fadeInLeft');
        document.querySelector('.header__logo').classList.remove('move');
      }
    })
  }
}
mediaQueryMax1199.addListener(handleTabletChange1199);
handleTabletChange1199(mediaQueryMax1199);

const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');
function handleTabletChange991(e) {
  if (e.matches) {
    document.querySelector('#header__btn-seach').addEventListener('click', function(e){
      e.preventDefault();
      this.classList.add('is-active');
      this.classList.add('fadeInLeft');
      //убираем лого и бургер
      document.querySelector('.header__logo').classList.add('hidden');
      document.querySelector('#burger').classList.add('hidden');

      //появление инпута
      document.querySelector('#input__search').classList.add('is-active');
      document.querySelector('#input__search').classList.add('fadeInLeft');
      //появления значка закрытия
      document.querySelector('#burger__search-close').classList.add('is-active');
      document.querySelector('#burger__search-close').classList.add('fadeInLeft');
    });

    document.querySelector('#burger__search-close').addEventListener('click', function(e){
      e.preventDefault();
      this.classList.remove('is-active');
      this.classList.remove('fadeInLeft');
      //появление лого и бургер
      document.querySelector('.header__logo').classList.remove('hidden');
      document.querySelector('.header__logo').classList.remove('move');
      document.querySelector('#burger').classList.remove('hidden');

      //скрытие инпута
      document.querySelector('#input__search').classList.remove('is-active');
      document.querySelector('#input__search').classList.remove('fadeInLeft');

      document.querySelector('#header__btn-seach').classList.remove('is-active');
      document.querySelector('#header__btn-seach').classList.remove('fadeInLeft');


    })
  }
}
mediaQueryMax991.addListener(handleTabletChange991);
handleTabletChange991(mediaQueryMax991);


const mediaQueryMax480 = window.matchMedia('(max-width: 480px)');
function handleTabletChangeMax480(e) {
  if (e.matches) {
    document.querySelector('#header__btn-seach').addEventListener('click', function(e){
      document.querySelector('.header__top').classList.add('add-Blur');
      document.querySelector('.section-hero').style.height = "355px";
      document.querySelector('.section-hero__content').style.top = "78px";
    });
    document.querySelector('#burger__search-close').addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('.header__top').classList.remove('add-Blur');
      document.querySelector('.section-hero').style.height = "310px";
      document.querySelector('.section-hero__content').style.top = "78px";
    });
  }


}
mediaQueryMax480.addListener(handleTabletChangeMax480);
handleTabletChangeMax480(mediaQueryMax480);

// const mediaQueryMax767 = window.matchMedia('(max-width: 767px)');
// function handleTabletChangeMax767(e) {
//   if (e.matches) {
//     document.querySelectorAll('.footer__social-big').forEach(big => {
//       big.classList.add('is-hidden');
//     });
//     document.querySelectorAll('.footer__social-small').forEach(small => {
//       small.classList.remove('is-hidden');
//     });
//   }
// }

// mediaQueryMax767.addListener(handleTabletChangeMax767);
// handleTabletChangeMax767(mediaQueryMax767);


// const mediaQueryMax1199_2 = window.matchMedia('(max-width: 1199px)');
// function handleTabletChangeMax1199_2(e) {
//   if (e.matches) {
//     document.querySelectorAll('.footer__social-mid').forEach(mid => {
//       mid.classList.add('is-hidden');
//     });
//     document.querySelectorAll('.footer__social-big').forEach(big => {
//       big.classList.remove('is-hidden');
//     });
//   }
// }

// mediaQueryMax1199_2.addListener(handleTabletChangeMax1199_2);
// handleTabletChangeMax1199_2(mediaQueryMax1199_2);

/*-------------- End Header ----------------*/
/*----------------------- Burger --------------------- */
/* Старое решение, криво работает на мобильной версии*/
// document.querySelector('#burger').addEventListener('click', function(){
//   document.querySelector('#menu').classList.toggle('is-active')
// })
// document.querySelector('#burger__close').addEventListener('click', function(){
//   document.querySelector('#menu').classList.remove('is-active')
// })

$('#burger').click(function () {
  $("#menu").show('slide', {direction: 'right'}, 300);
  document.body.style.overflow = "hidden";
});
$('#burger__close').click(function () {
  $("#menu").hide('slide', {direction: 'right'}, 300);
  document.body.style.overflow = "auto";
});

/*--------------------- End Burger ------------------- */
/*-------------- Section-Hero ------------ */
//переход от кнопки к футеру
let btn = document.querySelector('.btn-to-footer')

btn.addEventListener('click', function() {
  document.querySelector('#footer').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
});


let swiperSectionHero = new Swiper('.section-hero.swiper-container', {
  effect: 'fade',
  loop:true,
  autoplay: {
    delay: 4000,
  },
  speed: 1000,
  spaceBetween: 30,
});
/*---------- End Section-Hero ------------ */

/*----------- Section-Gallery -------------*/

// selector

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false
});


//   Slider Swiper
var swiper = new Swiper('.section-gallery__slider-container', {

  // // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
    observer: true,
    resizeObserver: true,
    centeredSlides: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    481: {
      slidesPerView: 1,
      spaceBetween: 34,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    1640: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
    }
  }
});



/*--------- End Section-Gallery -----------*/

/*---------- Section-Catalog --------------*/
// Accordion
$( function() {
  $( ".tabs__accordion" ).accordion({
    collapsible: true,
    heightStyle: 'content'
  });
});

// Tabs

document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
  //событие нажатия кнопки
  tabsBtn.addEventListener('click', function(event){
    //убрать класс активной кнопки у всех
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtnActive) {
      tabsBtnActive.classList.remove('tabs__btn-active')
    })
    //добавить класс текущей ативной кнопки
    this.classList.add('tabs__btn-active')
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.tabs__content').forEach(function(tabsContent){
      tabsContent.classList.remove('tabs__content-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active')

    //удаляем активные классы заглушки
    document.querySelector('#plug').classList.remove('tabs__painter-desc-active')
    document.querySelector('#plugButton').classList.remove('accordion__btn-active')
    //берем всех деятелей активной вкладки страны
    let firstMatch = document.querySelector(`[data-target="${path}"]`).querySelectorAll('.accordion__item button');
    //ищем одного выбранного деятеля
    let activeFirstMatch;
    firstMatch.forEach(element => {
      if (element.classList.contains('accordion__btn-active')) {
        activeFirstMatch = element;
      }
    });
    //если его нет
    let firstMatchValue;
    let dataValueFirstMatch;
    if (!activeFirstMatch) {

      //делаем активным первого в списке
      firstMatch = document.querySelector(`[data-target="${path}"]`).querySelector('.ui-accordion-content-active .accordion__item button');
      firstMatch.classList.add('accordion__btn-active');
      firstMatchValue = firstMatch.innerHTML;

      dataValueFirstMatch =  firstMatch.dataset.path;
    } else {
      //если же есть, то собираем его данные и отправляем так же на апи вики
      firstMatchValue = activeFirstMatch.innerHTML;

      dataValueFirstMatch =  activeFirstMatch.dataset.path;
    }
      const areaFirstMatch = document.querySelector(`[data-target="${dataValueFirstMatch}"]`)
      areaFirstMatch.classList.add('tabs__painter-desc-active');

      createContentWiki(firstMatchValue, areaFirstMatch);


    //перезагружаем аккардион во вкладках
    $( function() {
      $( ".tabs__accordion" ).accordion("refresh");
    } );
  })
  //событие наведения курсора мыши
  tabsBtn.addEventListener('mouseover', function(event){
    let target = event.target;
    target.classList.add('tabs__shadow');
  });
  //событие ухода курсора мыши с кнопки таба
  tabsBtn.addEventListener('mouseout', function(event){
    let target = event.target;
    target.classList.remove('tabs__shadow');
  });
  //событие фокус
  tabsBtn.addEventListener('focus', function(event){
    let target = event.target;
    target.classList.add('tabs__shadow');
  });
  //событие ухода фокуса
  tabsBtn.addEventListener('blur', function(event){
    let target = event.target;
    target.classList.remove('tabs__shadow');
  });
})

// Tabs-accordion

document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAcc) {
  tabsBtnAcc.addEventListener('click', function(event){
    //убираем контент по умолчанию
    document.querySelectorAll(".default").forEach(function(e){
      e.remove();
    })
    //убрать класс активной кнопки у всех
    document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAccActive) {
      tabsBtnAccActive.classList.remove('accordion__btn-active')
    })
    //добавить класс текущей ативной кнопки
    this.classList.add('accordion__btn-active')
    //записываем текущего художественного деятеля в переменную
    let currentBtnActive = this.innerHTML;

    const pathAcc = event.currentTarget.dataset.path
    //убрать класс активного контента у всех
    document.querySelectorAll('.tabs__painter-desc').forEach(function(tabsContentAcc){
      tabsContentAcc.classList.remove('tabs__painter-desc-active')
    })
    //добавить класс активного контента по ссылке текущей кнопки
    document.querySelector(`[data-target="${pathAcc}"]`).classList.add('tabs__painter-desc-active')

    //записываем в переменную контент текущего художественного деятеля
    let currentContentActive = document.querySelector(`[data-target="${pathAcc}"]`);

    //функция ищет контент на художественного деятеля в википедии и добавляет на страницу
    createContentWiki(currentBtnActive, currentContentActive);


  })
})

const linksToAcc = document.querySelectorAll('a.desc-plug__link')

for (let element of linksToAcc) {
  element.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = element.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*----------- End Section-Catalog -----------*/

/*------------ Section-Event ---------------*/

//получаю кнопку по классу
let button = document.querySelector('.section-event__btn');
//нажимаю на кнопку с этим классом
button.addEventListener('click', function(){
  //ищу все дивы с скрытым классом
  document.querySelectorAll('.hidden').forEach(function(hiddenCard){
    //убираю класс у найденых дивов
    hiddenCard.classList.remove('hidden')
  })
  //добавляю класс текущей кнопке
  this.classList.add('hidden')
});


//Скрываю блок на брэкпоинте
const mediaQuery = window.matchMedia('(max-width: 991px)');
function handleTabletChange(e) {
  if (e.matches) {
    document.querySelector('.event-card3').classList.add('hidden');
    document.querySelector('.event-card3').classList.add('fadeInUp');
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);


// медиавыражение для мобильной версии
const mediaQuery480 = window.matchMedia('(max-width: 480px)');
function handleTabletChange480(e) {
  if (e.matches) {
    //создаем контейнер слайдера
    document.querySelector('.section-event__list').classList.add('swiper-wrapper');
    //элементы слайдера
    document.querySelectorAll('.section-event__item').forEach(function(AllCard){
      AllCard.classList.add('swiper-slide');
    })
    // //объявляем аккордион
    // $( function() {
    //   $( ".section-publications__checkbox" ).accordion({
    //     active: false,
    //     collapsible: true,
    //     heightStyle: 'content'
    //   });
    // });

    // //собираем все чекбоксы в категориях издания
    // let checkAll = document.querySelectorAll('.checkbox__input');
    // checkAll.forEach(check => {
    //   check.addEventListener('click', () => {
    //     if (check.checked) { //если чекбокс включен
    //       check.parentElement.parentElement.classList.add('check--on') //родителю добавляем класс
    //     } else {
    //       check.parentElement.parentElement.classList.remove('check--on')
    //     }
    //   })
    // });

    // const checkboxTitle = document.querySelector('.checkbox__title'); //категория
    // let parentCheckAll = document.querySelectorAll('.checkbox__item');//элементы списка категорий
    // let flag = false; //первый флаг
    // let flagTwo = false; //второй флаг
    // checkboxTitle.addEventListener('click', () => { //событие клика по категории
    //   const wrapAccordion = document.querySelector('.checkbox__list.ui-accordion-content.ui-corner-bottom.ui-helper-reset.ui-widget-content'); //контейнер элементорв катерии в аккордионе
    //   parentCheckAll.forEach(li => {
    //     if (li.classList.contains('check--on')) { //если какой то элемент выбран, то флаг тру
    //       flag = true;
    //     }
    //   });

    //   if (flagTwo) {  //если второй флаг тру, то первый фолс. делаем для логики переключения активных и неактивных элементов аккордиона
    //     flag = false;
    //   }

    //   if (flag) { //если первый флаг тру, значит есть активный элемент категории
    //     wrapAccordion.classList.add('show'); //значит не даем аккордиону сворачивать активные элемениы
    //     flagTwo = true; //второй флаг делаем тру, запоминаем что у нас уже есть открытый список только с активными элементами
    //     parentCheckAll.forEach(li => {
    //       if (!li.classList.contains('check--on')) {
    //         li.style.display = 'none';  //и сами скрываваем все неактивные
    //       }
    //     });
    //   } else {
    //     wrapAccordion.classList.remove('show'); //иначе удаляем запрет сворачивания аккардиона
    //     parentCheckAll.forEach(li => {
    //       li.style.display = 'block'; //делаем все элементы видимыми
    //     });
    //     flagTwo = false; //а второй флаг фолсе, который запрещал открывать второй раз только активные элементы
    //   }


    //   flag = false;
    // });




    //добавил в эту функцию медиавыражения скролл в секции "Каталог" от аккардиона
    //при нажатии на художественного деятеля к его описанию
    const accButton = document.querySelectorAll('button.accordion__btn');
    for (let button of accButton) {
      button.addEventListener('click', function() {
        setTimeout(function(){ //задержка для того, чтобы успел прийти ответ от сервера апи вики
          document.querySelector('.tabs__painter-desc-active').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 1000)
      });
    }




    const categories = document.querySelector('.checkbox__title--3');
    const itemCategories = document.querySelectorAll('.checkbox__item');
    const checkAll = document.querySelectorAll('.checkbox__input');
    let flag = true;

    checkAll.forEach(check => { //перебираем все чекбоксы и вешаем на еих событие клик
      check.addEventListener('click', () => {
        if (check.checked) { //если чекбокс включен
          check.closest('.checkbox__item').classList.add('check-on'); //родителю добавляем класс
        } else {
          check.closest('.checkbox__item').classList.remove('check-on');
          if (flag) {
            check.closest('.checkbox__item').classList.add('is-none');
          }
        }
      })
    });
    //cобытие на титл категорий
    categories.addEventListener('click', () => {
      categories.classList.toggle('on-click');
      itemCategories.forEach(item => { //перебираем каждый элемент списка категорий
        if ((!item.classList.contains('is-none')) && (!item.classList.contains('check-on'))) { //если нет класса с display=none и не включен чек бокс
          item.classList.add('is-none') //скрываем елементы
        } else {
          item.classList.remove('is-none') //иначе все видимые
        }
      });
      flag = !flag;
    })
  }
}
mediaQuery480.addListener(handleTabletChange480);
handleTabletChange480(mediaQuery480);

//слайдер для мобильной версии
var swiperEvent = new Swiper('.section-event__wrapper', {
  pagination: {
    el: '.swiper-pagination-event',
    type: 'bullets',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});

/*------------- End Section-Event ----------*/

/*--------- Section-Publications ----------*/
//   Slider Swiper
var swiper2 = new Swiper('.slider-publications__swiper-container', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  breakpoints: {
    321:{
      slidesPerView: 1,
      spaceBetween: 10
    },
    481: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 49
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 48
    }
  }
});

// медиавыражение для мобильной версии
const mediaQueryPublications320 = window.matchMedia('(max-width: 320px)');
function handleTabletChangePublications320(e) {
  if (e.matches) {
    //убираем сладер в публикациях
    swiper2.destroy();
    document.querySelector('.slider-publications__swiper-wrapper').classList.remove('swiper-wrapper');
  }
}
mediaQueryPublications320.addListener(handleTabletChangePublications320);
handleTabletChangePublications320(mediaQueryPublications320);

/*------- End Section-Publications --------*/

/*------------ Section-Projects -----------*/
//   Slider Swiper
var swiper3 = new Swiper('.slider-projects__swiper-container', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    485: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
      loopFillGroupWithBlank: true
    }
  }
});


//tooltips
tippy('#marker1', {
  theme: 'custom',
  content: 'Пример современных тенденций - современная методология разработки',
  duration: [600, 600],
  maxWidth: 270,

});
tippy('#marker2', {
  theme: 'custom',
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  duration: [600, 600],
  maxWidth: 270,
});
tippy('#marker3', {
  theme: 'custom',
  content: 'В стремлении повысить качество',
  duration: [600, 600],
  maxWidth: 270,
});
/*-------- End Section-Projects -----------*/

/*------------ Section-Contacts -----------*/

//Form

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

let validator = new JustValidate('.form__wrap', {
  colorWrong: '#7943A4',
  rules: {
    name: {
      required: true
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    }
  },
  messages: {
    name:'Как вас зовут?',
    tel: 'Укажите ваш телефон'
  }
});

/*-------- End Section-Contacts -----------*/

//ленивая загрузка img
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}

//отложенная загрузка карты
setTimeout(function(){
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = '//api-maps.yandex.ru/2.1/?load=package.standard&lang=ru-RU&onload=getYaMap';
  document.getElementsByTagName('body')[0].appendChild(elem);
}, 2000);


/*------------- Modal ---------------*/
const cardGallery = document.querySelectorAll('.slider-gallery__item');

for (let card of cardGallery) {
  card.addEventListener('click', function () {
    document.body.style.overflowY = 'hidden';
    //popup
    const popup = document.querySelector('.popup');
    popup.classList.add('popup__is-active');
    //получаем путь к картинке
    let imgSrc = card.querySelector('picture source:nth-child(5)').getAttribute('srcset');
    //путь к картинке при разрешении меньше 480px
    const mediaQueryMax480img = window.matchMedia('(max-width: 480px)');
    function handleTabletChange480img(e) {
      if (e.matches) {
        imgSrc = card.querySelector('picture source:nth-child(1)').getAttribute('srcset');
      }
    }
    mediaQueryMax480img.addListener(handleTabletChange480img);
    handleTabletChange480img(mediaQueryMax480img);
    //создаем новую картинку
    const newImg = document.createElement('img');
    newImg.src = imgSrc;

    //заменяем текущую картинку на новую
    $('.popup__content img').replaceWith(newImg);
  });
}
//закрываем модальное окно
document.querySelector('#popup__close').addEventListener('click', function(){
  document.body.style.overflowY = 'auto';
  document.querySelector('.popup').classList.remove('popup__is-active');
});

/*------------- Форма обратного звонка -----------------*/
  const form = document.getElementById('form');
  const btnForm = document.getElementById('btn__callback');
  //form.addEventListener('submit', formSend);
  btnForm.addEventListener('click', formSend);

  async function formSend(event) {
    event.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);

    if (error === 0) {
      btnForm.classList.add('_disabled');
      btnForm.disabled = true;

      let response = await fetch('data.php', {
          method: 'POST',
          body: formData
      });
      if (response.ok){
        let result = await response.json();
        form.style.visibility = "hidden";

        const divResult = document.createElement('div');
        divResult.className = 'result-message';
        divResult.innerHTML = result.message;
        const containerForm = document.querySelector('.section-contacts__form');
        containerForm.append(divResult);
        setTimeout(function(){
          divResult.remove();
          form.style.visibility = "initial";
          form.reset();
        }, 3000);

        btnForm.classList.remove('_disabled');
        btnForm.disabled = false;
      } else {
        alert("Ошибка");
        btnForm.classList.remove('_disabled');
        btnForm.disabled = false;
      }
    } else {

      const divErrorName = document.createElement('div');
      divErrorName.className = 'js-validate-error-label error-name';
      divErrorName.innerHTML = 'Недопустимый формат';
      divErrorName.style.color = '#D11616';

      const divErrorPhone = document.createElement('div');
      divErrorPhone.className = 'js-validate-error-label error-phone';
      divErrorPhone.innerHTML = 'Недопустимый формат';
      divErrorPhone.style.color = '#D11616';

      const formGroup = document.getElementsByClassName('form__group');

      if (document.querySelectorAll('.js-validate-error-label.error-name').length < 1)  {
        formGroup[0].append(divErrorName);
      }
      if (document.querySelectorAll('.js-validate-error-label.error-phone').length < 1)  {
        formGroup[1].append(divErrorPhone);
      }
      //alert('Заполните поля');
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('form__name')) {
        if ((input.value.length < 3) || (!input.value.match(/^[а-яёa-z-\s]+$/ig))) {
          formAddError(input);
          error++;
        }
      } else if (input.classList.contains('form__phone')) {
        let phone = input.inputmask.unmaskedvalue();
        if (phone.length < 10 ) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add('_error');

  }

  function formRemoveError(input) {
    input.classList.remove('_error');
  }



  const inputsForm = form.querySelectorAll('input');
  inputsForm.forEach(input => {
    input.addEventListener('input', function() {
      if (this.value !== '') {
        this.classList.add('exist');
        const validate = this.parentElement.querySelectorAll('.js-validate-error-label');
        if (validate) {
          validate.forEach(element => {
            element.remove();
          });
        }
        if (input.classList.contains('_error')) {
          input.classList.remove('_error')
        }
      } else {
        this.classList.remove('exist');
      }
    })
  });

});
//Map
function getYaMap(){
// Создание карты.
  var myMap = new ymaps.Map("myMap", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.7622,37.6461],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14,
      controls: []
  });
  var geolocationControl = new ymaps.control.GeolocationControl({
    options: {
      position: {
        right: 10,
        top: 355
      }
    }
  });
  myMap.controls.add(geolocationControl);
  var zoomControl = new ymaps.control.ZoomControl({
    options: {
        size: "small",
        position: {
          right: 10,
          top: 265
        }
      }
  });
  myMap.controls.add(zoomControl);
  var myPlacemark = new ymaps.Placemark([55.758463,37.601079], {
    balloonContentHeader: "Шоурум №4",
    balloonContentBody: "Леонтьевский переулок, дом 5, строение 1"
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/contacts/Group_68.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [0, 0]
  });

  //
  function onResizeMap() {
    if ($(window).width() < '1600') {
      myMap.setCenter([55.7622,37.63]);
      if ($(window).width() < '1199') {
        //Set New center
        myMap.setCenter([55.7599,37.6177]);
        myMap.controls.remove(zoomControl);
        myMap.controls.remove(geolocationControl);
        if ($(window).width() < '991') {
          myMap.setCenter([55.7600,37.6105]);
        }
      }
    } else {
      myMap.setCenter([55.7622,37.6461]);
    }
  }
  onResizeMap();

  window.onresize = function () {
      onResizeMap();
  };

  myMap.geoObjects.add(myPlacemark);

}


//функция поиска контента на художественного деятеля.
async function createContentWiki(currentBtnActive, currentContentActive) {
  //ссылка где ищем
  let url = "https://ru.wikipedia.org/w/api.php";
  //объект параметров. Передаем художественного деятеля и ищем его страницу
  let params = {
      action: "parse",
      page: `${currentBtnActive}`,
      //prop: 'wikitext',
      format: "json"
  };
  //формируем запрос
  url = url + "?origin=*";
  Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  let response = await fetch(url);
  //переменая с данными о деятеле
  let jsonResultText;

  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа
    let json = await response.json();
    jsonResultText = json.parse.text['*'];
  } else {
    alert("Ошибка HTTP: " + response.status);
  }

  //если есть созданный див с информацией из вики уже на странице - удаляем его
  document.querySelectorAll('.js-wrap-content').forEach(function(AllContent){
    AllContent.remove();
  })

  //создаем новый див
  let divInfo = document.createElement('div');
  //помещаем туда информацию из вики
  divInfo.innerHTML = jsonResultText;

  //находим в этом диве даты рождения и смерти и помещаем в переменные
  let dateBirth = divInfo.querySelector("[data-wikidata-property-id='P569']");
  //убираем теги, оставляем только текст
  if (dateBirth !== null){
    //убираем теги, оставляем только текст
    getCleanContent(dateBirth);
  } else {
    dateBirth = "неизвестно"
  }
  if (dateBirth !== "неизвестно") {
    dateBirth = dateBirth.innerHTML;
    //убираем ссылка на источник
    dateBirth = dateBirth.replace(/ок.|\[(.*)\]/g, '');
  }
  let dateDeath = divInfo.querySelector("[data-wikidata-property-id='P570']");
  if (dateDeath !== null){
    //убираем теги, оставляем только текст
    getCleanContent(dateDeath);
  } else {
    dateDeath = "неизвестно"
  }
  if (dateDeath !== "неизвестно") {
    dateDeath = dateDeath.innerHTML;
    //убираем ссылка на источник
    dateDeath = dateDeath.replace(/ок.|\[(.*)\]/g, '');
  }
  //находим краткую информацию о художнике
  let descArtist = divInfo.querySelector(".mw-parser-output p");
  if (descArtist !== null){
  //убираем теги, оставляем только текст
    getCleanContent(descArtist);
  } else {
    descArtist = "";
  }

  //получаем первую картинку
  //let imgArtist = divInfo.querySelector(".wikidata-snak .image img");
  let imgArtist = divInfo.querySelector(".mw-parser-output .image img");
  if (imgArtist) {
    imgArtist.className = "painter-desc__img";
  }


  //создаем div-обертку куда помещаем всю инфу
  let divWrap = document.createElement('div');
  divWrap.className = "js-wrap-content";

  //помещаем картинку
  if (imgArtist) {
    divWrap.append(imgArtist);
  }
  //создаем заголовок h3, в него кидаем название художника и помещаем в див
  let titleArtist = document.createElement('h3');
  titleArtist.className = "painter-desc__title";
  titleArtist.append(currentBtnActive);
  divWrap.append(titleArtist);
  //создаем параграф для времени жизни художника и помещаем в див
  let subtextArtist = document.createElement('p');
  subtextArtist.className = "painter-desc__subtext";
  subtextArtist.append(dateBirth + " — " + dateDeath);
  divWrap.append(subtextArtist);
  //создаем параграф для краткого описания художника и помещаем в див
  let textDescArtist = document.createElement('p');
  textDescArtist.className = "painter-desc__text";
  textDescArtist.append(descArtist);
  divWrap.append(textDescArtist);

  currentContentActive.append(divWrap);

  // return divInfo.insertAdjacentHTML('beforeend', jsonResultText);
  return;
}

//функция очищает от тегов
function getCleanContent(element) {
  element.innerHTML = element.innerText || element.textContent;
}

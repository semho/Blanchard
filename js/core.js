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
var el = document.getElementsByClassName('nav-direction__item');

for(var i=0; i<el.length; i++) {
  el[i].addEventListener('click', clickSub, false)
  el[i].addEventListener('mouseleave', hideSub, false);
}

function clickSub() {
  if(this.children.length>1) {
    this.children[1].classList.add('nav-direction__show');
  } else {
    return false;
  }
}

function hideSub() {
  if(this.children.length>1) {
    this.children[1].classList.remove('nav-direction__show');
  } else {
    return false;
  }
}

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

//Поле поиска, меняем цвет иконки батона в фокусе инпута
$( "#search" ).focus(function() {
  let imageUrlColor = "../img/Search_hover.svg";
  $( this ).prev( "button" ).css("background-image", "url(" + imageUrlColor + ")");
});
$('#search').focusout(function(){
  $( this ).prev( "button" ).attr('style', '');
});


//открываем инпут поиска при нажатии на кнопку
const mediaQueryMax1199 = window.matchMedia('(max-width: 1199px)');
function handleTabletChange1199(e) {
  if (e.matches) {
    document.querySelector('#header__btn-seach').addEventListener('click', function(e){
      e.preventDefault();
      this.classList.add('is-active');
      this.classList.add('fadeInLeft');
      document.querySelector('#input__search').classList.add('is-active');
      document.querySelector('#input__search').classList.add('fadeInLeft');
      document.querySelector('.header__logo').classList.add('move');
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
      document.querySelector('.section-hero__content').style.top = "33px";
    });
  }
}
mediaQueryMax480.addListener(handleTabletChangeMax480);
handleTabletChangeMax480(mediaQueryMax480);


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
});
$('#burger__close').click(function () {
  $("#menu").hide('slide', {direction: 'right'}, 300);
});

/*--------------------- End Burger ------------------- */
/*-------------- Section-Hero ------------ */
//переход от кнопки к футеру
let btn =document.querySelector('.btn-to-footer')

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
var swiper = new Swiper('.swiper-container', {
  // If we need pagination
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
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true
    },
    992: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true
    },
    1200: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
      loopFillGroupWithBlank: true
    },
    1640: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
      loopFillGroupWithBlank: true
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
    //объявляем аккордион
    $( function() {
      $( ".section-publications__checkbox" ).accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content'
      });
    });
    //добавил в эту функцию медиавыражения скролл в секции "Каталог" от аккардиона
    //при нажатии на художественного деятеля к его описанию
    const accButton = document.querySelectorAll('button.accordion__btn');
    for (let button of accButton) {
      button.addEventListener('click', function() {
        document.querySelector('.tabs__painter-desc-active').scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
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

        btnForm.classList.remove('_disabled');
        btnForm.disabled = false;
      } else {
        alert("Ошибка");
        btnForm.classList.remove('_disabled');
        btnForm.disabled = false;
      }
    } else {
      const divErrorName = document.createElement('div');
      divErrorName.className = 'js-validate-error-label';
      divErrorName.innerHTML = 'Как Вас завут?';
      divErrorName.style.color = '#7943A4';

      const divErrorPhone = document.createElement('div');
      divErrorPhone.className = 'js-validate-error-label';
      divErrorPhone.innerHTML = 'Укажите Ваш телефон!';
      divErrorPhone.style.color = '#7943A4';

      const formGroup = document.getElementsByClassName('form__group');
      formGroup[0].append(divErrorName);
      formGroup[1].append(divErrorPhone);
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
        if (input.value.length < 3) {
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
  imgArtist.className = "painter-desc__img";

  //создаем div-обертку куда помещаем всю инфу
  let divWrap = document.createElement('div');
  divWrap.className = "js-wrap-content";

  //помещаем картинку
  divWrap.append(imgArtist);
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


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


/*-------------- End Header ----------------*/

/*-------------- Section-Hero ------------ */
//переход от кнопки к футеру
const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
  document.querySelector('#footer').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
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

  slidesPerView: 3,
  slidesPerColumn: 2,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
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
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
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
  })
});

// Tabs-accordion

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAcc) {


    tabsBtnAcc.addEventListener('click', function(event){
      //убрать класс активной кнопки у всех
      document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAccActive) {
        tabsBtnAccActive.classList.remove('accordion__btn-active')
      })
      //добавить класс текущей ативной кнопки
      this.classList.add('accordion__btn-active')

      const pathAcc = event.currentTarget.dataset.path
      //убрать класс активного контента у всех
      document.querySelectorAll('.tabs__painter-desc').forEach(function(tabsContentAcc){
        tabsContentAcc.classList.remove('tabs__painter-desc-active')
      })

      //добавить класс активного контента по ссылке текущей кнопки
      document.querySelector(`[data-target="${pathAcc}"]`).classList.add('tabs__painter-desc-active')
    })
  })
});


/*----------- End Section-Catalog -----------*/

/*------------ Section-Event ---------------*/

document.addEventListener('DOMContentLoaded', function(){
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
});

/*------------- End Section-Event ----------*/

/*--------- Section-Publications ----------*/
//   Slider Swiper
var swiper2 = new Swiper('.slider-publications__swiper-container', {
  slidesPerView: 3,
  spaceBetween: 48,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
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
  }
});
/*------- End Section-Publications --------*/

/*------------ Section-Projects -----------*/
//   Slider Swiper
var swiper3 = new Swiper('.slider-projects__swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loopFillGroupWithBlank: true,
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
  }
});
/*-------- End Section-Projects -----------*/

/*------------ Section-Contacts -----------*/

//Form

let selector = document.querySelector("input[type='tel']");

let im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.form__wrap', {
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

    myMap.geoObjects.add(myPlacemark);
}


/*-------- End Section-Contacts -----------*/

/*------- Делаем фоновые изображения с форматом webp для тех браузеров,
 которые это поддерживают, иначе сохраняем jpeg ---------------*/

// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
  // Создаем элемент canvas
  let elem = document.createElement('canvas');
  // Приводим элемент к булеву типу
  if (!!(elem.getContext && elem.getContext('2d'))) {
      // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
      return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  }
  // Иначе Webp не используем
  return false;
}

window.onload = function () {
  // Получаем все элементы с дата-атрибутом data-bg
  let images = document.querySelectorAll('[data-bg]');
  // Проходимся по каждому
  for (let i = 0; i < images.length; i++) {
      // Получаем значение каждого дата-атрибута
      let image = images[i].getAttribute('data-bg');
      // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
      images[i].style.backgroundImage = 'url(' + image + ')';
  }

  // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

  // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
  if (canUseWebp() || firefoxVer >= 65) {
      // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
      let imagesWebp = document.querySelectorAll('[data-bg-webp]');
      for (let i = 0; i < imagesWebp.length; i++) {
          let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
          imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
      }
  }
};

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
 // el[i].addEventListener('mouseenter', showSub, false);
  el[i].addEventListener('click', clickSub, false)
  el[i].addEventListener('mouseleave', hideSub, false);
}

// function showSub() {
//   if(this.children.length>1) {
//     this.children[1].classList.add('show');
//   } else {
//     return false;
//   }
// }

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
/*---------------- Gallery -----------------*/

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
    onlyInViewport: false,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  }

});


/*------------- End Gallery ----------------*/

/*--------------- Catalog ------------------*/
// Accordion
$( function() {
  $( ".tabs__accordion" ).accordion({
    collapsible: true,
    heightStyle: 'content'
  });
} );

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


/*------------End Catalog ------------------*/

/*--------------- Event -------------------*/

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

/*------------- End Event -----------------*/

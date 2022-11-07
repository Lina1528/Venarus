/*BURGER-Menu*/
$(function(){
    $('.header-burger').click(function(event){
        $('.header-inner, .header, nav').toggleClass('active');
        $('body').toggleClass('lock')
    })
});

$(function() {
  $('.nav-link').click(function(event) {
      $('.header-inner, .header, .header-burger, .nav').toggleClass('active');
      $('body').toggleClass('lock')
  });
});





/*Intro-SLIDER*/
$(function(){
    $('.sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<img src='assets/img/intro/slider/prev-arrow.svg' class='prev-arrow' alt='1'>",
        nextArrow: "<img src='assets/img/intro/slider/next-arrow.svg' class='next-arrow' alt='2'>",
        speed: 300,
        fade: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              fade: false,
              prevArrow: "<img src='assets/img/intro/slider/larrow-intro.png' class='prev-arrow' alt='1'>",
              nextArrow: "<img src='assets/img/intro/slider/rarrow-intro.png' class='next-arrow' alt='2'>",
            }
          }
        ]
});
});

/*Running Line*/

$('.marquee').marquee({
  direction: 'left',
  speed: 130,
  delayBeforeStart: -9000
});

/*Prodution Slider*/
$(function(){
$('.sl2').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    draggable: false,
    swipe: false,
    prevArrow: "<img src='assets/img/intro/slider/prev-arrow.svg' class='prev-arrow-production' alt='1'>",
    nextArrow: "<img src='assets/img/intro/slider/next-arrow.svg' class='next-arrow-production' alt='2'>",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          adaptiveHeight: true,
          dots: true,
          swipe: true,
        }
      }
    ]
  });
});
/*Opinion Slider */
$(function(){
  $('.sl3').slick({
    dots: true,
    infinite: true,
    draggable: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


/*POPUP*/


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++){
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click",function (e) {
      const popupName = popupLink.getAttribute('href').replace('#','');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup){
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup-content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}


function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}


function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = lockPaddingValue;
    }
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(function(){
    unlock = true;
  }, timeout);
}

function bodyUnLock (){
  setTimeout (function(){
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++){
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
      }
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
}
















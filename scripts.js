$(window).on("load",function(){
    setTimeout(function(){
    $("body").removeClass("preload");
    $(".loader-wrapper").fadeOut("slow");
    }, 1000);
  });

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    const content = document.querySelector('.dimmer');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
        content.classList.toggle('dimmer-active');

    
  });
}
navSlide();
  
$(".slider").slick({
    centerMode: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    vertical: true,
    touchThreshold: 100,
    swipeThreshold: 100,
    verticalSwiping: true,
    cssEase: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
  })

let blocked = false;
let blockTimeout = null;
let prevDeltaY = 0;

$("#slick").on('mousewheel DOMMouseScroll wheel', (function(e) {
    let deltaY = e.originalEvent.deltaY;
    e.preventDefault();
    e.stopPropagation();

    clearTimeout(blockTimeout);
    blockTimeout = setTimeout(function(){
        blocked = false;
    }, 50);

    
    if (deltaY > 0 && deltaY > prevDeltaY || deltaY < 0 && deltaY < prevDeltaY || !blocked) {
        blocked = true;
        prevDeltaY = deltaY;

        if (deltaY > 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }
}));

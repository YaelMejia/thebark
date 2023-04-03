$(window).on("load",function(){
  setTimeout(function(){
  $("body").removeClass("preload");
  $(".loader-wrapper").fadeOut("slow");
  }, 2000);
});

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

fetch(url, {
  method: "get",
  headers: new Headers({
    "ngrok-skip-browser-warning": "69420",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

let blocked = false;
let blockTimeout = null;
let prevDeltaY = 0;

$(".slider").on('mousewheel DOMMouseScroll wheel', (function(e) {
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

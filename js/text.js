// 計數器
var count = 1;
var countEl = document.getElementById("count");
function plus() {
    count++;
    countEl.value = count;
}
function minus() {
    if (count > 1){
        count--;
        countEl.value = count;
    }
}

// 首頁banner輪播
$('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '18%',
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    centerMode: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: false,
                slidesToShow: 1
            }
        }

    ]
});

// 部落格手機滑動

$('.multiple-items').slick({
    infinite: true,
    // centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
    ]
  });

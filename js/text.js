// 計數器
var count = 1;
var countEl = document.getElementById("count");
function plus() {
  count++;
  countEl.value = count;
}
function minus() {
  if (count > 1) {
    count--;
    countEl.value = count;
  }
}

// 首頁banner輪播

$('.center').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '22.5%',
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  infinite: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
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
  centerMode: true,
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

// nav 點漢堡
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//點叉叉
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// 點message
function showMessage() {
  var x = document.getElementById("chatbox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//回頂端，還是不靈
$(".jq-goTop").click(function (e) {
  e.preventDefault();
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});

//Sticky Navbar on Sale Page

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("saleMenu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
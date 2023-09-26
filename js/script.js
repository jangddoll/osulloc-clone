//헤더 배경색 바꾸기, 헤더 스크롤 -
function scrollChange() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.querySelector(".header").classList.add("scroll");
    document.querySelector(".to-top").classList.add("show");
  }
  else if (document.body.scorllTop < 600 || document.documentElement.scrollTop < 600) {
    document.querySelector(".header").classList.remove("scroll");
    document.querySelector(".to-top").classList.remove("show");
  }
}
//사이트 상단으로 올라감
document.querySelector(".to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

// 메인 슬라이드
var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//정지 버튼
let sw = 0;
document.querySelector(".swiper_btn_pause").addEventListener("click", function() {
  if(sw == 0){
    document.querySelector(".swiper_play").classList.add("on");
    swiper1.autoplay.stop();
    sw = 1;
  }
})
document.querySelector(".swiper_btn_play").addEventListener("click", function() {
  if(sw == 1) {
    document.querySelector(".swiper_play").classList.remove("on");
    swiper1.autoplay.start();
    sw = 0;
  }
})

//공지사항
var swiper = new Swiper(".mySwiper2", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//상품 슬라이드
const tabList = document.querySelectorAll(".pro-item");
const contents = document.querySelectorAll(".pro-cont");
let activeCont = "";

for (var i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".pro-btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove("is_on");
      contents[j].style.display = "none";
    }
    this.parentNode.classList.add("is_on");

    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  })
}

$(document).ready(function () {
  $('.pro-list-box1').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.pro-cont1 .indicator .prev-arrow'),
    nextArrow: $('.pro-cont1 .indicator .next-arrow'),
  })
})
$(document).ready(function () {
  $('.pro-list-box2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $('.pro-cont2 .indicator .prev-arrow'),
    nextArrow: $('.pro-cont2 .indicator .next-arrow'),
  })
})

//오늘만 이 가격 타이머
function updateTimer() {
  const future = Date.parse("2023/07/05 00:00:00");
  const now = new Date();
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
}

setInterval(updateTimer, 1000);

// 매장 소개 슬라이드
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
});



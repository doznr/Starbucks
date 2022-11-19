// ------------------------------------------------
// 배지 스크롤에 따라 보이기&숨기기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//window = 우리가 보고 있는 화면
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
        });
        // 버튼 보이기!
        gsap.to(toTopEl, .2,{
          x:0
        });
    }else{
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        });
        //버튼 숨기기!
        gsap.to(toTopEl, .2,{
          x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in')
// index = 반복되는 횟수 >> 즉 fadeEl 이라는 매개변수가 반복적으로 실행될 때
fadeEls.forEach(function(fadeEl, index){
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8 ...
    }); 
});

// 생성자(클래스) = new
// new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
    direction: 'vertical',
    autoplay: true,
    loop: true // 반복 재생 여부
});


new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
  });
  new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
  });

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }else{
    // 보이기 처리
    promotionEl.classList.remove('hide');
  }
});


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
 new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: .8
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


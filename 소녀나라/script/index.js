const mainSwiper = new Swiper('.slide_main_bnr',{
    autoplay:{delay:2900,},
    loop:true,
})


// all 까먹음(오류)
// let swiperPrev = document.querySelectorAll('.items_wrap .swiper-button-prev');
// const itemsSwiper = new Swiper('.items_wrap',{
//     autoplay:{delay:3000,},
//     loop:true,
//     speed: 600,
//     slidesPerView: 'auto',
//     // spaceBetween: 20,
//     // 버튼으로만 슬라이드 조작이 가능
//     allowTouchMove: false,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     scrollbar: {
//         el: ".swiper-scrollbar", 
//     },
//     on: {
//         activeIndexChange : function() {
//           if (this.realIndex == 0) {
//             swiperPrev[0].classList.add('swiper-button-disabled');
//             swiperPrev[1].classList.add('swiper-button-disabled');
//             swiperPrev[2].classList.add('swiper-button-disabled');
//             // startNum = false;
//           } else {
//             swiperPrev[0].classList.remove('swiper-button-disabled');
//             swiperPrev[1].classList.remove('swiper-button-disabled');
//             swiperPrev[2].classList.remove('swiper-button-disabled');
//           }
//         }
//     }
// })

const bestSwiper = new Swiper('.bg_img', {
    autoplay:{delay:2000},
    speed: 2000,
    loop: true,
})

//헤더
const headerScroll = document.querySelector('header');

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
      headerScroll.classList.add("header_small");
  } else if (window.scrollY == 0) {
      headerScroll.classList.remove("header_small");
  }
});


//헤더 hover
const depthParents = document.querySelectorAll('.b_left > li > a');
const depthHover = document.querySelectorAll('.depth_menu');
// 요소들을 한 번에 가져오는 것이라 개별 li와 자동으로 매칭되지 않

const depthWrap = document.querySelectorAll('.b_left > li'); // li 전체
depthWrap.forEach((li, index) => {
  const depthMenu = li.querySelector('.depth_menu'); 
  // 해당 li 내부의 depth_menu 찾기
  // 각 li 내부에서 .depth_menu를 직접 찾음
  li.addEventListener('mouseenter', () =>{
    depthMenu.style.display = 'block';
  });

  li.addEventListener('mouseleave', () =>{
      depthMenu.style.display = 'none';
  });
});



//수가 일대일 매칭이 되야함..그래서 오류

// for(i=0; i < depthParents.length -1; i++){
//   depthParents[i].addEventListener('mouseover', ()=>{
//     depthHover[i].style.display = 'block';
//   })
// }

//아이템 이미지
const itemsImages = document.querySelectorAll('.item_img img');
const images = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
let index = 0;

setInterval(() => {
  itemsImages[0].src = images[index];
  // 인덱스를 순환하도록 설정 (끝까지 가면 처음으로 돌아옴)
  index = (index + 1) % images.length;
}, 2000); // 2초마다 이미지 변경

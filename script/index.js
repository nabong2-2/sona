const mainSwiper = new Swiper('.slide_main_bnr',{
    autoplay:{delay:2900,},
    loop:true,
})


// all 까먹음(오류)
let swiperPrev = document.querySelectorAll('.items_wrap .swiper-button-prev');
const itemsSwiper = new Swiper('.items_wrap',{
    autoplay:{delay:3000,},
    loop:true,
    speed: 600,
    slidesPerView: 'auto',
    // spaceBetween: 20,
    // 버튼으로만 슬라이드 조작이 가능
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar", 
    },
    on: {
        activeIndexChange : function() {
          if (this.realIndex == 0) {
            swiperPrev[0].classList.add('swiper-button-disabled');
            swiperPrev[1].classList.add('swiper-button-disabled');
            swiperPrev[2].classList.add('swiper-button-disabled');
            // startNum = false;
          } else {
            swiperPrev[0].classList.remove('swiper-button-disabled');
            swiperPrev[1].classList.remove('swiper-button-disabled');
            swiperPrev[2].classList.remove('swiper-button-disabled');
          }
        }
    }
})

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

//NEW 이미지 전환
const itemsImages = document.querySelectorAll('.item_img img');
console.log(itemsImages.length)
const imagesA = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesB = ['./images/new2.jpg', './images/new3.jpg', './images/new4.jpg'];
const imagesC = ['./images/new3.jpg', './images/new4.jpg', './images/new5.jpg'];
const imagesD = ['./images/new4.jpg', './images/new5.jpg', './images/new6.jpg'];
const imagesE = ['./images/new5.jpg', './images/new6.jpg', './images/new7.jpg'];
const imagesF = ['./images/new6.jpg', './images/new7.jpg', './images/new8.jpg'];
const imagesG = ['./images/new7.jpg', './images/new8.jpg', './images/new1.jpg'];
const imagesH = ['./images/new8.jpg', './images/new1.jpg', './images/new2.jpg'];
//오늘 출발 이미지 전환
const imagesI = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesJ = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesK = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesL = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesN = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesM = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesO = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
const imagesP = ['./images/new1.jpg', './images/new2.jpg', './images/new3.jpg'];
//소나 픽 이미지 전환
const imagesQ = ['./images/pick1.jpg', './images/pick2.jpg', './images/pick3.jpg'];
const imagesR = ['./images/pick2.jpg', './images/pick2.jpg', './images/pick3.jpg'];
const imagesS = ['./images/pick3.jpg', './images/pick2.jpg', './images/pick3.jpg'];
const imagesT = ['./images/pick4.jpg', './images/pick2.jpg', './images/pick3.jpg'];
const imagesU = ['./images/pick5.jpg', './images/pick2.jpg', './images/pick3.jpg'];
const imagesV = ['./images/pick6.jpg', './images/pick2.jpg', './images/pick3.jpg'];

let index = 0;
console.log(itemsImages[7])
setInterval(() => {
  // 인덱스를 순환하도록 설정 (끝까지 가면 처음으로 돌아옴)
  itemsImages[0].src = imagesA[index];
  index = (index + 1) % imagesA.length;
  // 2
  itemsImages[1].src = imagesB[index];
  index = (index + 1) % imagesB.length;
  // 4
  itemsImages[3].src = imagesD[index];
  index = (index + 1) % imagesD.length;
  // 5
  itemsImages[4].src = imagesE[index];
  index = (index + 1) % imagesE.length;
  // 7
  itemsImages[6].src = imagesG[index];
  index = (index + 1) % imagesG.length;
  // 8
  itemsImages[7].src = imagesH[index];
  index = (index + 1) % imagesH.length;
  //오늘출발 이미지 전환 9 ~ 16
  // 9
  itemsImages[8].src = imagesI[index];
  index = (index + 1) % imagesI.length;
  // 10
  itemsImages[9].src = imagesJ[index];
  index = (index + 1) % imagesJ.length;
  // 11
  itemsImages[10].src = imagesK[index];
  index = (index + 1) % imagesK.length;
  // 12
  itemsImages[11].src = imagesL[index];
  index = (index + 1) % imagesL.length;
  // 13
  itemsImages[12].src = imagesN[index];
  index = (index + 1) % imagesN.length;
  // 14
  itemsImages[13].src = imagesM[index];
  index = (index + 1) % imagesM.length;
  // 15
  itemsImages[14].src = imagesO[index];
  index = (index + 1) % imagesO.length;
  // 16
  itemsImages[15].src = imagesP[index];
  index = (index + 1) % imagesP.length;
  // 소나 픽 이미지 전환 17 ~ 23
  //17
  itemsImages[16].src = imagesQ[index];
  index = (index + 1) % imagesQ.length;
  //18
  itemsImages[17].src = imagesR[index];
  index = (index + 1) % imagesR.length;
  //19
  itemsImages[18].src = imagesS[index];
  index = (index + 1) % imagesS.length;
  //20
  itemsImages[19].src = imagesT[index];
  index = (index + 1) % imagesT.length;
  //21
  itemsImages[20].src = imagesU[index];
  index = (index + 1) % imagesU.length;
  //22
  itemsImages[21].src = imagesV[index];
  index = (index + 1) % imagesV.length;
}, 1500); // 2.5초마다 이미지 변경

setInterval(()=>{
  // 3
  itemsImages[2].src = imagesC[index];
  index = (index + 1) % imagesC.length;
  // 6
  itemsImages[5].src = imagesF[index];
  index = (index + 1) % imagesF.length;

}, 1700)


// 오늘출발 이미지 전환
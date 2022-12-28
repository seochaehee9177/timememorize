 $(function(){
 var swiper = new Swiper('.one', {
	  autoplay: {
        delay: 5000,//슬라이드 넘어가는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});


 $(function(){
 var swiper = new Swiper('.two', {
	  autoplay: {
        delay: 5000,//슬라이드 넘어가는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      navigation: {//화살표 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	    pagination: {//블릿 버튼
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});

$(function(){
  var swiper = new Swiper('.three', {
     autoplay: {
         delay: 5000,//슬라이드 넘어가는 시간
         disableOnInteraction: false,
       },
       loop: true,//슬라이드 무한반복
       navigation: {//화살표 버튼
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
       pagination: {//블릿 버튼
         el: '.swiper-pagination',
         clickable: true,
       },
     });
 });
 
 
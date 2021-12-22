$(function() {
  $(window).scroll(function(){
      //section.s1의 높이값을 sh변수에 저장
      var sh=$('.s1').height();
      //window의 scrollTop값을 wh변수에 저장
      var wh=$(window).scrollTop();
      //만약 s1의 높이값보다 window의 scrollTop값이 커지면
      if(wh > sh){
          //header에 active설정
          $('header').addClass('active'); 
      //s1의 높이값보다 window의 scrollTop값이 크지 않으면    
      }else{
          //header에서 active제거
          $('header').removeClass('active');  
      }
  });//window scroll event

  //메인메뉴에 마우스오버했을 때 서브메뉴와 서브메뉴배경 나옴
  $('.header_wrap > nav').hover(function(){
      $('.header_wrap > nav .sub').stop().slideDown();
      $('.sub_bg').stop().slideDown();
      $('.header_wrap').addClass('active');
  },
  //메인메뉴에서 마우스 아웃했을 때 서브메뉴와 서브메뉴배경 들어감
  function(){
      $('.header_wrap > nav .sub').stop().slideUp();
      $('.sub_bg').stop().slideUp();
      $('.header_wrap').removeClass('active');
  });
  //header에 마우스 오버했을 때 
  $('header').hover(function(){
      $('.header_wrap').addClass('active');
  },
  //header에서 마우스아웃했을 때
  function(){
      $('.header_wrap').removeClass('active');
  });    
    var swiper = new Swiper(".mySwiper", {
          autoplay: {
              delaye: 3000,
              disableOnInteraction: false
          },
          effect:'fade',
          loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        }
      });
    // swiper product 
    var swiper=new Swiper(".mySwiper2",{
        spaceBetween: 0,
        slidesPerGroup:3,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints:{
            1024:{
              slidesPerView: 3
            },
            768:{
              slidesPerView: 2
            },
            480:{
              slidesPerView: 1
            }
          }
    });
  $('.fa-arrow-alt-circle-up').click(function(){
    $('html, body').animate({'scrollTop':0});
  });

  // 메뉴 버튼 누르면 네비 튀어나옴!
  $('.menu_btn').click(function(){
    $('#navi').animate({'right':0});
  });
  // fa-arrow-circle-right버튼 누르면 네비 들어감
  $('.fa-arrow-circle-right').click(function(){
    $('#navi').animate({'right':'-100vw'});
  });

  // 태블릿 모바일 버전 네비게이션(세로 아코디언)
  $('#navi nav > ul >li>a').click(function(){
    // 만약 클릭한 메뉴에 엑티브가 설정 되어 있지 않다면
    if($(this).attr('class') != 'active'){
      // 모든 서브메뉴 들어감
      $('#navi nav .sub').slideUp()
      // 모든 메뉴에 엑티브 제거
      $('#navi nav > ul >li>a').removeClass('active');
      // 클릭한 서브메뉴만 나옴
      $(this).next().slideDown();
      // 클릭한 메뉴에만 엑티브 제거
      $(this).addClass('active');
    }else{
      // 클릭한 메뉴에서 엑티브 제거
      $(this).removeClass('active');
      // 클릭한 메뉴의 서브에 들어감
      $(this).next().slideUp();
    }
  });
});
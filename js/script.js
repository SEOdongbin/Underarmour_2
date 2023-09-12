$(document).ready(function(){
  const ww = $(window).width();
  if(ww > 1200){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView:4,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });  
  }else{

  }

  $('.menu-bar ul li').mouseenter(function(){
    $('.sub-menu').addClass('active');
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
  });
  $('.banner').mouseenter(function(){
    $('.sub-menu').removeClass('active');
    $('.menu-bar ul li').removeClass('active');
  });
  $('.sub-menu').mouseleave(function(){
    $(this).removeClass('active');
    $('.menu-bar ul li').removeClass('active');
  });

  $('.sec-4 .sec-4-btn a').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    
    const result = $(this).attr('data-alt');
    $('.sec-4 .sec-4-main').removeClass('active');
    $(`#${result}`).addClass('active');

  });

  $('.banner .hambuger').click(function(){
    $(this).toggleClass('on');
    $('.m-sub').toggleClass('active')
  });
  
})
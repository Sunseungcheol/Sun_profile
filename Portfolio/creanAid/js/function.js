
$(function () {


// 상단 슬라이드
    var $top_indicator=$(".top-banner>.top-slides>div>.top-slides-pagination>li>a");
    var $top_slides=$(".top-banner>.top-slides>.top-slides-container>li");
    var $top_next=$(".top-next");
    var $top_prev=$(".top-prev");
    var nowIdx=0;


function autoPlay() {
  intervalKey = setInterval(function () {
      nextIdx();
      slideMove();
  }, 10000);

}


  function slideMove() {
    $top_indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    $top_slides.filter('.on').stop().fadeOut(1000).removeClass('on'); //이전 슬라이드 사라짐
    $top_slides.eq(nowIdx).stop().fadeIn(1000).addClass('on'); //이번에 나타날 슬라이드가 나타남 
}

function nextIdx() {
    if (nowIdx < 1) {
        nowIdx++;
    } else {
        nowIdx = 0;
    }
}

autoPlay();

$top_indicator.on('click', function (event) {


  event.preventDefault();
 

  if ($(this).parent().hasClass('on') == false) {
      nowIdx = $top_indicator.index(this);
      slideMove();
  }
});


$top_prev.on('click', function () {


  if (nowIdx > 0) {
      nowIdx--;
  } else {
      nowIdx = 1;
  }

  slideMove();
});


$top_next.on('click', function () {

  nextIdx();
  slideMove();
});


// 상단 슬라이드 화살표
var $arrow=$(".arrow")
  

  $arrow.on("click", function(){
    $("header>div").toggleClass("updown");
    $("main").toggleClass("mt");
    $(".gnb>button").toggleClass("rotate")
  });

//메뉴부분

  var $mnu_srv=$(".gnb>.lnb>ul>li").first();
  var $depth1=$(".depth1");

  $mnu_srv.on("mouseenter",function(evt){
    evt.preventDefault();

    $depth1.stop().slideDown(250);
  });

  $mnu_srv.on("mouseleave",function(evt){
    evt.preventDefault();
    $depth1.stop().slideUp(250);
  });


  var $mnu_srv=$(".gnb>.lnb>ul>li").eq(1);
  var $depth2=$(".depth2");

  $mnu_srv.on("mouseenter",function(evt){
    evt.preventDefault();

    $depth2.stop().slideDown(250);
  });
  $mnu_srv.on("mouseleave",function(evt){
    evt.preventDefault();
    $depth2.stop().slideUp(250);
  });

  
  var $mnu_srv=$(".gnb>.lnb>ul>li").eq(2);
  var $depth3=$(".depth3");

  $mnu_srv.on("mouseenter",function(evt){
    evt.preventDefault();

    $depth3.stop().slideDown(250);
  });
  $mnu_srv.on("mouseleave",function(evt){
    evt.preventDefault();
    $depth3.stop().slideUp(250);
  });


  var $mnu_srv=$(".gnb>.lnb>ul>li").eq(3);
  var $depth4=$(".depth4");

  $mnu_srv.on("mouseenter",function(evt){
    evt.preventDefault();

    $depth4.stop().slideDown(250);
  });
  $mnu_srv.on("mouseleave",function(evt){
    evt.preventDefault();
    $depth4.stop().slideUp(250);
  });



// 메인 슬라이드


var $main_slides=$(".main-slides>.slides>.slides-container>li");
var $main_next=$(".main-slides>.slides-btn>.next");
var $main_prev=$(".main-slides>.slides-btn>.prev");
var main_nowIdx=0;


function main_moveFn(){
  
  $main_slides.eq(main_nowIdx).stop().animate({
    left: 0
  }, 500, function () {
    $main_slides.eq(main_nowIdx).siblings().css({
      left: 20 + "%",
      "z-index": 100
    });
    $main_slides.eq(main_nowIdx).css("z-index", "0");
    
  });
}
main_nowIdx=$main_slides.index()

setInterval(function(){
  
  if(main_nowIdx<4){
    main_nowIdx++;
  }else{
    main_nowIdx=0;
  }
  main_moveFn();
},6000);

// 메인 슬라이드 버튼

$main_next.on("click", function(){
  $main_slides.eq(main_nowIdx).siblings().css({
    left: 20 + "%"
  });
  if(main_nowIdx<4){
    main_nowIdx++;
  }else{
    main_nowIdx=0;
  }
  $main_slides.eq(main_nowIdx).stop().animate({
    left: 0
  }, 500, function () {
    $main_slides.eq(main_nowIdx).siblings().css({
      left: 20 + "%",
      "z-index": 100
    });
    $main_slides.eq(main_nowIdx).css("z-index", "0");
  });
});

$main_prev.on("click", function(){
  $main_slides.eq(main_nowIdx).siblings().css({
    left: -(20) + "%"
  });
  if(main_nowIdx>0){
    main_nowIdx--;
  }else{
    main_nowIdx=4;
  }
  $main_slides.eq(main_nowIdx).stop().animate({
    left: 0
  }, 500, function () {
    $main_slides.eq(main_nowIdx).siblings().css({
      left: -(20) + "%",
      "z-index": 100
    });
    $main_slides.eq(main_nowIdx).css("z-index", "0");
  });
});

// 하단 슬라이드


var $bot_slides=$(".bot-slides>.botslides>.slides-container>li");
var $bot_next=$(".bot-slides>.slides-btn>.next");
var $bot_prev=$(".bot-slides>.slides-btn>.prev");
var bot_nowIdx=0;


// function bot_moveFn(){
  
//   $bot_slides.eq(bot_nowIdx).stop().animate({
//     left: 0
//   }, 500, function () {
//     $bot_slides.eq(bot_nowIdx).siblings().css({
//       left: 25 + "%",
//       "z-index": 100
//     });
//     $bot_slides.eq(bot_nowIdx).css("z-index", "0");
    
//   });
// }
// bot_nowIdx=$bot_slides.index()

// setInterval(function(){
  
//   if(bot_nowIdx<3){
//     bot_nowIdx++;
//   }else{
//     bot_nowIdx=0;
//   }
//   bot_moveFn();
// },6000);

// 자동슬라이드 제거


// 하단 슬라이드 버튼

$bot_next.on("click", function(){
  $bot_slides.eq(bot_nowIdx).siblings().css({
    left: 25 + "%"
  });
  if(bot_nowIdx<3){
    bot_nowIdx++;
  }else{
    bot_nowIdx=0;
  }
  $bot_slides.eq(bot_nowIdx).stop().animate({
    left: 0
  }, 500, function () {
    $bot_slides.eq(bot_nowIdx).siblings().css({
      left: 25 + "%",
      "z-index": 100
    });
    $bot_slides.eq(bot_nowIdx).css("z-index", "0");
  });
});

$bot_prev.on("click", function(){
  $bot_slides.eq(bot_nowIdx).siblings().css({
    left: -(25) + "%"
  });
  if(bot_nowIdx>0){
    bot_nowIdx--;
  }else{
    bot_nowIdx=3;
  }
  $bot_slides.eq(bot_nowIdx).stop().animate({
    left: 0
  }, 500, function () {
    $bot_slides.eq(bot_nowIdx).siblings().css({
      left: -(25) + "%",
      "z-index": 100
    });
    $bot_slides.eq(bot_nowIdx).css("z-index", "0");
  });
});
});
  

$(function(){
      //상단 메뉴바
      var $mnu=$(".gnb a");
      var mnuIdx=0;

    function menuBar(){
   
  
      var arrTopVal=[];
      $(".cont").each(function(idx){
          arrTopVal[idx]=$(this).offset().top-50;
      });
  
      function pageAni(topVal){
          $("html,body").stop().animate({
              scrollTop:topVal
          });
      }
  
      $mnu.on("click", function(evt){
          evt.preventDefault();
  
          $(this).parent().addClass("on").siblings().removeClass("on");
  
          mnuIdx=$mnu.index(this);
          pageAni(arrTopVal[mnuIdx]+10);
  
          
          
      });
 
      
  //스크롤 다운에 따른 이벤트

      $(window).on("load",function(){
          pageAni(arrTopVal[mnuIdx]);
      });
  
      $(window).on("scroll",function(){
          var scrollTop=$(window).scrollTop();
  
          for(var i=0; i<=3; i++){
             if(scrollTop>=arrTopVal[i]){
              $mnu.eq(i).parent().addClass("on")
                        .siblings().removeClass("on");
                      }
              }
      });
    }

    $(window).resize(function(){
        menuBar();
   
    });
        menuBar();

    // wow 플러그인
      $(window).on('load',function(){
        new WOW().init();
    });

    // 패럴렉스
      
        $(window).scroll(function(e){

            parallax();
    
        });
    
    
    
        function parallax(){
    
            var scrolled = $(window).scrollTop();
    
            $('.cont2').css('background-position-y',-(scrolled*0.4)+'px');
    
        }

    
    });
    
    

  
  

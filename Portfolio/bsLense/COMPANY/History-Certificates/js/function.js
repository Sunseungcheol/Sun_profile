// $(function(){   


//      var $font=$(".main-section>.history>.history-sub>div>.year");
//      var $p_font=$(".main-section>.history>.history-sub>div>p");
    
//     function fontSize(){
//      if(window.innerWidth<640){
//         $(window).scroll(function(){
//             if($(this).scrollTop()>$(".history").offset().top-200){
//                $font.css({
//                    "fontSize":"18px",
//                    "transition":"all 0.4s"
//                });
//                $p_font.slideDown();
//             }else{
//                $font.css({
//                    "fontSize":"1.1em",
//                    "transition":"all 0.4s"
            
//             });
//             $p_font.slideUp();
//            }
//         });
//      }else{
//         $(window).scroll(function(){
//             if($(this).scrollTop()>$(".history").offset().top-200){
//                $font.css({
//                    "fontSize":"30px",
//                    "transition":"all 0.4s"
//                });
//                $p_font.slideDown();
//             }else{
//                $font.css({
//                    "fontSize":"1.5em",
//                    "transition":"all 0.4s"
            
//             });
//             $p_font.slideUp();
//            }
//         });
//      }
//     }
//     $(window).resize(function(){
//         fontSize();
//     });
//     fontSize();
//     });
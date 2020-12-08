$(function(){   
// bxSlider
$(".slider").bxSlider({
            speed:500,   
            pager:true, 
            moveSlides:1,  
            auto:true,     
            controls:true, 
            mode: 'fade'          
});



//아이템

var $item=$("main>.main-section>.product-2>ul>li>a>img.on");
    
    $item.mouseover(function(){
        $(this).css({
            "opacity":"1"
        }).mouseleave(function(){
            $(this).css({
                "opacity":"0"
            })
        });
    });

 });

 //



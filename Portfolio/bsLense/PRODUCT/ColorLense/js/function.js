$(function(){   
    
    //bx 슬라이더
    $(".slider").bxSlider({
        speed:1000,   
        pager:true, 
        moveSlides:1,  
        auto:true,     
        controls:false, 
        autoHover: true,  
        mode: 'fade'          
    });


// 메인 슬라이드 사이즈 변경
$(function () {
	var $setElem = $('.sub-bg'),
		    pc = '_p',
		    m = '_m',
		    replaceWidth = 640;
	$setElem.each(function() {
		var $this = $(this);

		function imgSize() {
			if (window.innerWidth > replaceWidth) {
				$this.attr('src', $this.attr('src').replace(m, pc)).css({
					visibility: 'visible'
				});
			} else {                
				$this.attr('src', $this.attr('src').replace(pc, m)).css({
					visibility: 'visible'
				});
			}
		}
		$(window).resize(function() {
			imgSize();
		});
		imgSize();
	});
});



});




(function ($) {


    new WOW().init();




    window.scroll(function(){
        if($(this).scrollTop() > 45){
            $('.navbar').addClass('sticky-top shadow-sm')
        }else{
            $('.navbar').removeClass('sticky-top shadow-sm')
        }
    });
    
    
    
    
    var $navbarToggler = $(".navbar-toggler");
    var $navbar = $(".navbar-collapse");
    var $openNav = $(".open");
    var $colsNave = $(".colse");
    
        if($navbar.css("display" , "none" )){
            $($navbarToggler).on('click' , function(){
                $navbar.css("display" , "block" );
                $openNav.css("display" , "none").fadeOut("slow");
                $colsNave.css("display" , "block" ).fadeIn("slow");
            })
        } 
        $colsNave.on("click" , function(){
            $navbar.css("display" , "none" );
            $openNav.css("display" , "block").fadeIn("slow");
            $colsNave.css("display" , "none" ).fadeOut("slow");
        });
    $(window).scroll(function(){
        if($(this).scrollTop() > 30){
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').on("click" , function(){
        $('html , body').animate({scrollTop: 0}, 1500, 'easeInOutExpo')
        return false;
    })

    $(document).ready(function(){
       
        $(".tap-tw").click(function(){
            $(".tap-tw").addClass("active");
            $(".tap-o").removeClass("active");
            $(".tap-th").removeClass("active");

        })
        $(".tap-o").click(function(){
            $(".tap-o").addClass("active");
            $(".tap-th").removeClass("active");
            $(".tap-tw").removeClass("active");
            $("#tap-one").css("dispaly" , "block");
        })
        $(".tap-th").click(function(){
            $(".tap-th").addClass("active");
            $(".tap-o").removeClass("active");
            $(".tap-tw").removeClass("active");
        });

        if(  $(".tap-tw").is("active")){
            $(".top-pane-one").css("display" ,"none");
            $(".top-pane-two").css("display" ,"block").fadeOut();
            $(".top-pane-three").css("display" ,"none");
        }else if ($(".tap-o").is("active")){
            $(".top-pane-one").css("display" ,"block");
            $(".top-pane-two").css("display" ,"none");
            $(".top-pane-three").css("display" ,"none");
        }else if ($(".tap-th").is("active")){
            $(".top-pane-one").css("display" ,"none");
            $(".top-pane-two").css("display" ,"none");
            $(".top-pane-three").css("display" ,"block");
        }
    });
    
    
    
    $('.next').on('click', function() {
        var currentActive = $('li.active'); // get current active
        currentActive.removeClass('active'); // remove class active
      
        if (currentActive.is(':last-child')) {
          $('li').first().addClass('active'); // add class to first li if last child
        } else {
          currentActive.next('li').addClass('active'); // otherwise add active to next li
        }
      });
    
 $('.owl-dot').on("click", function(){
    var currentActive = $('li.activee');
    currentActive.removeClass('activee');
    if(currentActive.is(':last-child') ){
        $('li').first().addClass('activee');
    }else {
        currentActive.next('li').addClass('activee');  
      }
 })

    
    
})(jQuery);

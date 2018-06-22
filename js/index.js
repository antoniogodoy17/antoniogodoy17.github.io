$("document").ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $(".fixed-action-btn").hide();

    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    
    var scrollLink = $('.scroll');

    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 70
        },1000);
        console.log($(this.hash).offset().top - 70);
    });

    $(window).scroll(function(){
        var topValue = $(this).scrollTop();
        
        if(topValue > 400){
            $("#fixed-nav").addClass("navbar-fixed");
            $(".fixed-action-btn").show();
        }
        else{
            $("#fixed-nav").removeClass("navbar-fixed");
            $(".fixed-action-btn").hide();
        }

        scrollLink.each(function(){
            var sectionOffset = $(this.hash).offset().top - 64;
            
            if(topValue < 400){
                $(this).parent().removeClass('active-section');
            }
            else if(sectionOffset <= topValue+64) {
                $(this).parent().addClass('active-section');
                $(this).parent().siblings().removeClass('active-section');
            }
        });
    });
});

$(".fixed-action-btn").click(function(){
    $('body,html').animate({
        scrollTop: 0
    },1000);
});

$("#cvBtn").click(function(){
    alert("Sorry, my CV is not available to download yet.");
})
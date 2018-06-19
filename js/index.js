$("document").ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $(".fixed-action-btn").hide();

    window.scroll({
        top: 0,
        behavior: "smooth"
    });
    
    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        activate($(this));

        $("body, html").animate({
            scrollTop: $($(this).attr("href")).offset().top,
        }, 1000);

    });

    $(window).scroll(function(){
        var topValue = $(this).scrollTop();

        if(topValue > 500){
            console.log(topValue);
            $(".fixed-action-btn").show();
        }
        else{
            var sections = $("nav ul li a");
            $(".fixed-action-btn").hide();
            for(var i = 0; i < sections.length; i++){
                $(sections[i]).removeClass("active-section");
            }
        }
    });
});

$(".fixed-action-btn").click(function(){
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

$("#cvBtn").click(function(){
    alert("Sorry, my CV is not available to download yet.");
})

function activate(section){
    var sections = $("nav ul li a");
    for(var i = 0; i < sections.length; i++){
        if(sections[i].text !== $(section).text()){
            $(sections[i]).removeClass("active-section");
        }
    }
    $(section).addClass("active-section");
}
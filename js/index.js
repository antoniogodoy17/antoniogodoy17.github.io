$("document").ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
  });

$("nav ul li").on("click","a", function(){
    activate($(this));
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
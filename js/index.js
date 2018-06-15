$("document").ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
  });
// $("document").ready(function(){
//     var about = $("#about-section").html();
//     $("#content").html(about);
// });

$(".links").on("click","a", function(){
    var section = $(this).text().toLowerCase();
    
    switch (section){
        case 'about me':
            var about = $("#about-section").html();
            showSection(about);
            activate("#aboutBtn");
            break;
        case 'experience':
            var experience = $("#experience-section").html();
            showSection(experience);
            activate("#experienceBtn");
            break;
        case 'skills':
            var skills = $("#skills-section").html();
            showSection(skills);
            activate("#skillsBtn");
            break;
        case 'projects':
            var projects = $("#projects-section").html();
            showSection(projects);
            activate("#projectsBtn");
            break;
        case 'contact':
            var contact = $("#contact-section").html();
            showSection(contact);
            activate("#contactBtn");
            break;
        case 'cv':
            alert("downloading");
            break;
    }
});

function activate(section){
    var sections = $(".links a");
    for(var i = 0; i < sections.length; i++){
        if(sections[i].text !== $(section).text()){
            $(sections[i]).removeClass("active");
        }
    }
    $(section).addClass("active");
}

function showSection(html){
    // $("#loading-circle").show(1000, function(){
    //     alert("hola");
    // });
    $("#content").fadeOut(500, function(){
        $("#content").html(html);
        $("#loading-circle").css("display","inline-block").delay(1000);
        $("#loading-circle").hide(function(){
            $("#content").fadeIn(500);
        });
    });
}

function hideSections(){
    $("#about-section").fadeOut(1000);
    $("#experience-section").fadeOut(1000);
    $("#skills-section").fadeOut(1000);
    $("#projects-section").fadeOut(1000);
    $("#contact-section").fadeOut(1000);
}
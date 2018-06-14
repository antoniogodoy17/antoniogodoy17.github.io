$("document").ready(function(){
    var about = $("#about-section").html();
    $("#content").html(about);
});

$(".links").on("click","a", function(){
    var section = $(this).text().toLowerCase();
    
    switch (section){
        case 'about me':
            var about = $("#about-section").html();
            showSection(about);

            // hideSections();
            // $("#about-section").fadeIn(2000);
            break;
        case 'experience':
            var experience = $("#experience-section").html();
            showSection(experience);
            // hideSections();
            // $("#experience-section").fadeIn(2000);
            break;
        case 'skills':
            var skills = $("#skills-section").html();
            showSection(skills);
            // hideSections();
            // $("#skills-section").fadeIn(2000);
            // console.log('skills');
            break;
        case 'personal projects':
            var projects = $("#projects-section").html();
            showSection(projects);
            // hideSections();
            // $("#projects-section").fadeIn(2000);
            // console.log('personal projects');
            break;
        case 'contact':
            var contact = $("#contact-section").html();
            showSection(contact);
            // hideSections();
            // $("#contact-section").fadeIn(2000);
            // console.log('contacts');
            break;
        case 'cv':
            alert("downloading");
            break;
    }
});

function showSection(html){
    $("#content").fadeOut(500, function(){
        $("#content").html(html);
    });
    $("#content").fadeIn(500);
}

function hideSections(){
    $("#about-section").fadeOut(1000);
    $("#experience-section").fadeOut(1000);
    $("#skills-section").fadeOut(1000);
    $("#projects-section").fadeOut(1000);
    $("#contact-section").fadeOut(1000);
}
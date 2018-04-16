$(document).ready(function(){
    $("#myInfoButton").click(function(){
        $("#ajaxLoad").load("myInfo.ejs");
    });

    $(document).ready(function(){
        $("#myProjectsButton").click(function(){
            $("#ajaxLoad").load("myProjects.ejs");
        });
    });
});

$(document).ready(function(){
    $("#myInfoButton").click(function(){
        $("#ajaxLoad").load("myInfo.html");
    });

    $(document).ready(function(){
        $("#myProjectsButton").click(function(){
            $("#ajaxLoad").load("myProjects.html");
        });
    });
});

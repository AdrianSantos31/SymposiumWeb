$(document).ready(function(){
    $("#alphabeticalButton").click(function(){
        $("#ajaxLoad").load("projectAlphabetical.html");
    });

    $(document).ready(function(){
        $("#favoritesButton").click(function(){
            $("#ajaxLoad").load("projectFavorites.html");
        });
    });

    $(document).ready(function(){
        $("#sectionsButton").click(function(){
            $("#ajaxLoad").load("projectSections.html");
        });
    });
});

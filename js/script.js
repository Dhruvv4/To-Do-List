$(document).ready(function () {
    $("li").click(function() {
        $(this).toggleClass("selected");
    });

    // Click on X to delete todo
    $("span").click(function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        })

        // This is used to stop the html bubbling.
        event.stopPropagation();
    });
});
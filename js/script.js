$(document).ready(function () {
    $("ul").on("click","li",function() {
        $(this).toggleClass("selected");
    });

    // Click on X to delete todo
    $("ul").on("click","span",function(event) {
        $(this).parent().fadeOut(500, function() {
            // This is will the li, not the span.
            // Because we have used parent().
            $(this).remove();
        });

        // This is used to stop the html bubbling.
        event.stopPropagation();
    });

    $("input[type='text']").keypress(function(event) {
        if (event.which === 13) {
            // Grabbing new todo text from input
            var todoText = $(this).val();
            $(this).val("");
            // Create a new li add it to ul
            $("ul").append('<li><span><i class="fa fa-trash"></i></span>' + todoText +'</li>');
        }
    });

    // This will toggle the input from '+' icon
    $(".fa-plus").click(function () { 
        $("input[type='text']").fadeToggle();
    });
});
$(document).ready(function() {
	$(".project_photos").fadeTo("fast", 0.5);
	$(function() {
    $('.project_photos').unslider();
});
    $(".project_photos").on("mouseenter", function() {
    	$(this).fadeTo("fast", 1);
    });
    $(".project_photos").on("mouseleave", function() {
    	$(this).fadeTo("fast", 0.5);
    });

    var width = $(window).width();
		if (width < 500) {
			$("#main").text("hellosunschein");
	}
});


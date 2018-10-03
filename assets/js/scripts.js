function goBack() {
	window.history.back();
}

$( document ).ready(function() {

	var browserWindow = $(window);
	var browserH = browserWindow.height();
	var browserW = browserWindow.width();

	var sectionHero = $("section#hero");
	var sectionServices = $("section#services");
	var sectionNetwork = $("section#network");
	var sectionWork = $("section#our-work");
	var sectionAboutUs = $("section#about-us");
	var sectionContact = $("section#contact");

	function updateElements() {
		console.log("Working!");

		// Home Page update sections
		
	}

	// ON RESIZE
	browserWindow.on("resize", function() {
		updateElements();
	}).trigger("resize");

	// Scroll links
    $(".scroll").click( function(event) {

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;
        console.log("Full URL: " + full_url);

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = "#" + parts[1];

       console.log("Taget anchor: " + trgt);

        //get the top offset of the target anchor
        var trgt_offset = $(trgt).offset();
        var trgt_top = trgt_offset.top;
        console.log("trgt_top " + trgt_top);

        //goto that anchor by setting the body scroll top to anchor top
        
        $('html, body').animate({
			scrollTop:trgt_top},
			1000,
			"easeInOutCubic"
		);
		return false;
    });

});
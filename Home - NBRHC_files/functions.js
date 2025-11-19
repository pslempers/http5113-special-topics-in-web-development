// remap jQuery to jQuery
(function(jQuery){})(window.jQuery);

/* trigger when page is ready */
jQuery(document).ready(function (){
	
	// Bootstrap Carousels
	jQuery("[class^='Carousel']").carousel({
		interval: 1000
	});
	jQuery("[id^='homeCarousel']").carousel("cycle");
	jQuery(".carousel .carousel-inner .item:first-child").addClass("active");
	jQuery("a.left.carousel-control").html("<i class='icon-double-angle-left nav'></i>");
	jQuery("a.right.carousel-control").html("<i class='icon-double-angle-right nav'></i>");
	jQuery(".carousel-indicators li:first-child").addClass("active");
	jQuery(".carousel-indicators li:nth-child(1)").attr("data-slide-to","0");
	jQuery(".carousel-indicators li:nth-child(2)").attr("data-slide-to","1");
	jQuery(".carousel-indicators li:nth-child(3)").attr("data-slide-to","2");
	jQuery(".carousel-indicators li:nth-child(4)").attr("data-slide-to","3");
	jQuery(".carousel-indicators li:nth-child(5)").attr("data-slide-to","4");
	jQuery(".carousel-indicators li:nth-child(6)").attr("data-slide-to","5");
	jQuery(".carousel-indicators li:nth-child(7)").attr("data-slide-to","6");
	jQuery(".carousel-indicators li:nth-child(8)").attr("data-slide-to","7");
	jQuery(".carousel-indicators li:nth-child(9)").attr("data-slide-to","8");
	jQuery(".carousel-indicators li:nth-child(10)").attr("data-slide-to","9");

	// Bootstrap Popovers
	jQuery(function ()  
	{
	  jQuery("a#twitter,a#myaccount").popover(
	  {
	     trigger: 'hover',
	     html: true,
	     placement: 'left'
	  });
	});
	
	// LINK EXTENTION DETECTOR
	
        jQuery('.testimonial-content a').each(function() {
			var file = jQuery(this).attr('href');
			if (file) {
				var extension = file.substr( (file.lastIndexOf('.') +1) );
				switch(extension) {
				//	case 'jpg':
				//	case 'png':
				//	case 'gif':
				//		alert('was jpg png gif');
				//	break;
				//	case 'zip':
				//	case 'rar':
				//		alert('was zip rar');
				//	break;
					case 'pdf':
						jQuery(this).parents("ul").addClass("pdf-icon");
					break;
					case 'doc':
					case 'docx':
						jQuery(this).parents("ul").addClass("word-icon");
				}
			}
        });	
		
			jQuery('.page-entry a').each(function() {
				var file = jQuery(this).attr('href');
				if (file) {
					var extension = file.substr( (file.lastIndexOf('.') +1) );
					switch(extension) {
					//	case 'jpg':
					//	case 'png':
					//	case 'gif':
					//		alert('was jpg png gif');
					//	break;
					//	case 'zip':
					//	case 'rar':
					//		alert('was zip rar');
					//	break;
						case 'pdf':
							jQuery(this).parents("ul").addClass("pdf-icon");
						break;
						case 'doc':
							jQuery(this).parents("ul").addClass("word-icon");
							break;
						case 'docx':
							jQuery(this).parents("ul").addClass("word-icon");
							break;
					}
				}
			});	

	
	// Questions and Answers - FAQ
	jQuery(document).ready(function($){
		$('.answer').hide();
		// $('.accordion-toggle:first').addClass('active').next().show();
		$('.question').click(function(){
			if( $(this).next().is(':hidden') ) {
				$('.accordion-toggle').removeClass('active').next().slideUp();
				$(this).toggleClass('active').next().slideDown();
			} else { 
				$(this).removeClass('active');
				$(this).next().slideUp();
			}
			return false; // Prevent the browser jump to the link anchor
		});
	});

	// Top Navigation Selectors -- Coloured Sections
	if (!jQuery("ul#menu-header-top-menu-french li").is('.current-page-ancestor, .current_page_item')) {
		jQuery("#menu-item-5396 a").addClass("nbrhcHeaderNavSelected");
	}
	
	if (!jQuery("ul#menu-header-top-menu li").is('.current-page-ancestor, .current_page_item')) {
		jQuery("#menu-item-1474 a").addClass("nbrhcHeaderNavSelected");
	}
	
	jQuery("#header-wrap:has(li.current-page-ancestor.menu-item-1475)").addClass("green");
	jQuery("#header-wrap:has(li.current_page_item.menu-item-1475)").addClass("green");
	jQuery("#header-wrap:has(li.current-page-ancestor.menu-item-1476)").addClass("orange");
	jQuery("#header-wrap:has(li.current_page_item.menu-item-1476)").addClass("orange");
	jQuery("#header-wrap:has(li.current-page-ancestor.menu-item-1477)").addClass("blue");
	jQuery("#header-wrap:has(li.current_page_item.menu-item-1477)").addClass("blue");

	// Top Navigation Selectors -- Coloured Sections -- FRENCH
	jQuery("#header-wrap:has(li.current-page-ancestor.menu-item-5399)").addClass("green");
	jQuery("#header-wrap:has(li.current_page_item.menu-item-5399)").addClass("green");
	jQuery("#header-wrap:has(li.current-page-ancestor.menu-item-5398)").addClass("orange");
	jQuery("#header-wrap:has(li.current_page_item.menu-item-5398)").addClass("orange");
	jQuery("#header-wrap:has(li.current-page-ancestor.menu-item-5397)").addClass("blue");
	jQuery("#header-wrap:has(li.current_page_item.menu-item-5397)").addClass("blue");

	// Home News Selectors
	jQuery("#home-news .news-post:nth-child(1)").addClass("first");
	
	// Feature Button Hover States
	jQuery(".feature-button").mouseenter(function(){
		jQuery(this).parent().addClass("over");
	}).mouseleave(function(){
		jQuery(this).parent().removeClass("over");
	});
	
    // Inner Page Sub Nav
	jQuery("ul.subpages li").has("ul.children").addClass("has-children");
	jQuery(".single-foundation_news ul.subpages li.page-item-226").has("ul.children").addClass("current_page_item");
	jQuery(".single-foundation_news ul.subpages li.page-item-3810").has("ul.children").addClass("current_page_item");
	// jQuery("ul li.has-children>a").removeAttr("href");

    //var h2s=jQuery("#subpage-nav ul.subpages > li > a").click(function () {
    //    h2s.not(this).parent().removeClass("active")
    //    jQuery(this).parent().toggleClass("active")
        //divs.not(jQuery(this).next()).slideUp()
       // jQuery(this).next().slideToggle()
       // return false; //Prevent the browser jump to the link anchor
    //});

	// Subpage Panels
	jQuery(".subpage-panel").mouseenter(function(){
		jQuery(this).addClass("over");
	}).mouseleave(function(){
		jQuery(this).removeClass("over");
	});
	
	var subpagepanel = jQuery("div#subpage-panels > div.subpage-panel");
	for(var i = 0; i < subpagepanel.length; i+=3) {
	  subpagepanel.slice(i, i+3).wrapAll("<div class='row-fluid'></div>");
	}
	
	// Business Programs Template
	jQuery("body.page-template-template-business-programs-php #subpage-panels,body.page-template-template-residential-programs-php #subpage-panels").addClass("business-programs");

});


/* optional triggers

jQuery(window).load(function() {
	
});

jQuery(window).resize(function() {
	
});

*/
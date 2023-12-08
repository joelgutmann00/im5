
function initOutdoor() {
  "use strict";
	jQuery(window).load(function() {
		"use strict";
        if(jQuery(".loader").size()> 0){
            jQuery(".loader").fadeOut(500, function() {
                jQuery("#main").animate({
                    opacity: "1"
                });
            });
        }else{
            jQuery("#main").animate({
                opacity: "1"
            }, 500);
        }
		initgalheight();
	});
  initgalheight();
 
//  menu    ------------------
    var nb = jQuery(".nav-button"), nh = jQuery(".nav-holder"), an = jQuery(".nav-holder ,.nav-button ");
    function showMenu() {
        nb.removeClass("vis-m");
        nh.slideDown(500);
    }
    function hideMenu() {
        nb.addClass("vis-m");
        nh.slideUp(500);
    }
    nb.on("click", function() {
        if (jQuery(this).hasClass("vis-m")) showMenu(); else hideMenu();
    });
}

function initgalheight() {
    var a = jQuery(window).height(), b = jQuery("header").outerHeight(), c = jQuery("footer").outerHeight(), d = jQuery(".port-subtitle-holder").outerHeight(), e = jQuery(".p_horizontal_wrap");
    e.css("height", a - b - c);
    jQuery("#portfolio_horizontal_container .portfolio_item").each(function(){
        $that = jQuery(this);
        if($that.find('.port-subtitle-holder').length){
            $that.children('img').css({height: jQuery(".p_horizontal_wrap").outerHeight(true) - d});
            $that.children('.port-desc-holder').css({height: jQuery(".p_horizontal_wrap").outerHeight(true) - d});
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
      item.addEventListener('click', function () {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          accordionItems.forEach(function (accordionItem) {
            accordionItem.classList.remove('active');
          });
          item.classList.add('active');
        }
      });
    });
  });

//   Init all functions  ------------------
jQuery(document).ready(function($) {
    initOutdoor();
});

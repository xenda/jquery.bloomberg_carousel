/*!
* Continuous Carousel
* Examples and documentation at: 
* ???
* 2010 Nícolas Iensen
* Version: 1.0 (26-MAY-2010)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* Requires:
* jQuery v1.3.2 or later
*/

jQuery.fn.bloombergCarousel = function (settings) {
    var carousel = this;
    var items = carousel.find('ul:first');
    var is_playing = true;
    var streams_count = 0;
    var animate = function () {
        if (streams_count == 0) {
            items.animate({ left: "-=1px" }, 20, "linear", function () {
                streams_count--;
                if (items.find("li:first").width() < items.css("left").replace("px", "") * -1) {
                    var first = items.find("li:first");
                    var margin = items.find("li:first").css("margin-right");
                    items.find("li:first").remove();
                    items.css("left", margin);
                    items.append(first);
                }
                if (is_playing) {
                    animate();
                }
            });
            streams_count++;
        }
    };

    items.mouseover(function () {
        is_playing = false;
    });

    items.mouseout(function () {
        is_playing = true;
        animate();
    });

    carousel.show();
    carousel.height(items.find("li:first").height());
    carousel.css("overflow", "hidden");
    carousel.css("position", "relative");

    items.css("line-style", "none");
    items.css("padding", "0");
    items.css("margin", "0");
    items.css("position", "absolute");
    items.width(9999);

    items.find("li").css("float", "left");
    items.find("li").css("margin-right", settings.margin + "px");

    // Configure canvas width
    var larger_li = items.find("li:first");
    items.find("li").each(function () {
        if ($(this).width() > larger_li.width()) {
            larger_li = $(this);
        }
    });
    var total = 0;
    items.find("li").each(function () {
        total += $(this).width() + settings.margin;
    });
    if (total - larger_li.width() < settings.max_width) { carousel.width(total - larger_li.width()); }
    else { carousel.width(settings.max_width); }

    animate();
};

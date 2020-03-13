(function ($) {

    "use strict";

    function organizeSkillTags() {
        $('.skill-item').each(function (idx) {
            do {
                var container = $(this).parent(),
                    diam = Math.round(Math.random() * 75 + 50),
                    top = Math.round(Math.random() * (container.height() - diam)),
                    left = Math.round(Math.random() * (container.width() - diam));
                $(this)
                    .css({
                        top: top,
                        left: left
                    })
            } while (touching(40, $(this)));
        });
    }

    function touching(margin, $item) {
        var result = false;
        var t1 = $item,
            t1radius = t1.width() / 2,
            t1x = t1.offset().left + t1radius,
            t1y = t1.offset().top + t1radius;

        $('.skill-item').not(t1).each(function () {
            var t2 = $(this);
            var t2radius = t2.width() / 2,
                t2x = t2.offset().left + t2radius,
                t2y = t2.offset().top + t2radius,
                dist = Math.sqrt((t2x - t1x) * (t2x - t1x) + (t2y - t1y) * (t2y - t1y));

            if (t1radius && t2radius && dist < (t1radius + t2radius + margin)) {
                result = true;
            }
        });
        return result;
    } //touching

    jQuery(document).ready(function ($) {
        window.addEventListener("resize", function () {
            organizeSkillTags();
        }, false);

        organizeSkillTags();
    });
})(jQuery);

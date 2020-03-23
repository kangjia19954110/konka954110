var div_id = "infodiv";
var is_float = 1;
var $popdiv = $("#" + div_id);
$(document).ready(function() {
    $("#foot_tab").tabs(".tabTitle", ".tabBox", { currentTab: 0, isAutoPlay: true, switchingMode: 'o' });
    // });
    $(".hd_tp > a").each(function() {
        $(this).bind("click", function() {
            if (window.GridsumWebDissector) {
                var _gsTracker = GridsumWebDissector.getTracker("GWD-000409");
            }
        });
    });

    if (is_float) {

        if ($.browser.msie && $.browser.version == 6) {
            Followdiv.follow();
        }
        if (footer_ad_pop._switch()) {
            $('.foot_msg_box').show(1000);
            $('.foot_msg_box').animate({ right: '0px' }, "slow")
        } else {
            $('.foot_msg_box').show(1000);
            footer_ad_pop._hide();
            $('.foot_msg_box').animate({ right: '0px' }, "slow")
        }
    }
});
Followdiv = {
    follow: function() {
        $popdiv.css('position', 'absolute');
        $(window).scroll(function() {
            var f_top = $(window).scrollTop() + $(window).height() - $popdiv.outerHeight();
            $popdiv.css('top', f_top);
        });
    }
}

var footer_ad_pop = {
    _time: 3600,
    pop_id: 'foot_msg_tp',
    _show: function() {
        $('.foot_msg_box').css('width', '421px');
        $('.' + footer_ad_pop.pop_id).show();
        $('.' + footer_ad_pop.pop_id).animate({ left: 0 }, "slow", function() {
            $(".footer_msg_hide p:eq(0) img").attr('src', 'images/footerNew_on2.jpg')
        })
    },
    _hide: function() {
        $(".foot_msg_box").css('width', 'auto');

        $('.' + footer_ad_pop.pop_id).animate({ left: 395 }, "slow", function() {
            $(".foot_msg_hide p:eq(0) img").attr('src', 'images/footerNew_off2.jpg');
            $(this).hide();
            $popdiv.css('width', 'auto');
        })
    },

    _switch: function() {
        return true;
    },

    _init: function() {
        $('.foot_msg_hide p:eq(0) img').click(function() {
            var img = $(this).attr('src');
            if (/_off/.test(img)) {
                footer_ad_pop._show();
            } else {
                footer_ad_pop._hide();
            }
        })
    }
}

footer_ad_pop._init();
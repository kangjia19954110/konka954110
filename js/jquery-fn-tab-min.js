$.fn.tabs = function(tabList, tabTxt, options) {

    var _tabList = $(this).find(tabList);
    var _tabTxt = $(this).find(tabTxt);
    var tabListLi = _tabList.find("li");
    var defaults = {
        currentTab: 0,
        defaultClass: 'current',
        isAutoPlay: false,
        stepTime: 5000,
        switchingMode: "c"
    };

    var o = $.extend({}, defaults, options);
    var _isAutoPlay = o.isAutoPlay;
    var _stepTime = o.stepTime;
    var _switchingMode = o.switchingMode;
    _tabList.find("li:eq(" + o.currentTab + ")").addClass(o.defaultClass);
    _tabTxt.children("div").each(function(i) {
        $(this).attr("id", "wp_div" + i);
    }).eq(o.currentTab).css({
        "display": "block"
    });

    tabListLi.each(function(i) {

        $(tabListLi[i]).mouseover(function() {
            if (_switchingMode == "o") {
                $(this).click();
            }
            _isAutoPlay = false;
        });
        $(tabListLi[i]).mouseout(function() {
            _isAutoPlay = true;
        })
    });

    _tabTxt.each(function(i) {
        $(_tabTxt[i]).mouseover(function() {
            _isAutoPlay = false;
        });
        $(_tabTxt[i]).mouseout(function() {
            _isAutoPlay = true;
        })
    });

    tabListLi.each(function(i) {
        $(tabListLi[i]).click(function() {
            if ($(this).className != o.defaultClass) {
                $(this).addClass(o.defaultClass).siblings().removeClass(o.defaultClass);
            }
            if ($.browser.msie) {
                _tabTxt.children("div").eq(i).siblings().css({
                    "display": "none"
                });
                _tabTxt.children("div").eq(i).fadeIn(600);
            } else {
                _tabTxt.children("div").eq(i).css({
                    "display": "block"
                }).siblings().css({

                    "display": "none"
                })
            }
        })
    });

    function selectMe(oo) {
        if (oo != null && oo.html() != null && _isAutoPlay) {
            oo.click();
        }
        if (oo.html() == null) {
            selectMe(_tabList.find("li").eq(0));
        } else {
            Timeout(selectMe, _stepTime, oo.next());
        }
    }
    if (_isAutoPlay) {
        selectMe(_tabList.find("li").eq(o.currentTab));
    }
    return this;

}

var __sti = setInterval;

function Interval(callback, timeout, param) {
    var args = Array.prototype.slice.call(arguments, 2);
    var _cb = function() {
        callback.apply(null, args);
    }
    setInterval(_cb, timeout);
}

var __sto = setTimeout;

function Timeout(callback, timeout, param) {
    var args = Array.prototype.slice.call(arguments, 2);
    var _cb = function() {
        callback.apply(null, args)
    }
    setTimeout(_cb, timeout);
}
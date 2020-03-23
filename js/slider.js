function byId(id) {
    return typeof (id) === "string" ? document.getElementById(id) : id;

}

var index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    prev = byId("prev"),
    next = byId("next"),
    len = pics.length,
    subMenu = byId("sub-menu"),
    innerBox = subMenu.getElementsByClassName("inner-box"),
    menuItems = menu.getElementsByClassName("menu-item");

function slideImg() {

    var main = byId("main");
    main.onmouseover = function () {

        if(timer) clearInterval(timer);
    };
    main.onmouseout = function () {

        timer = setInterval(function () {

            index++;
            if(index >= len){
                index = 0;
            }
            changeImg();
        },3000);
    };
    main.onmouseout();

    for(var d = 0; d < len; d++){
        dots[d].id = d;
        dots[d].onclick = function () {

            index = this.id;
            changeImg();
        }
    }
    next.onclick = function () {

        index++;
        if(index >= len) index = 0;
        changeImg();
    };
    prev.onclick = function () {

        index--;
        if(index < 0) index = len - 1;
        changeImg();
    };

    for(var m = 0; m < menuItems.length; m++){
        menuItems[m].setAttribute("data-index",m);
        menuItems[m].onmouseover = function () {

            subMenu.className = "sub-menu";
            var idx = this.getAttribute("data-index");
            for(var j = 0; j < innerBox.length; j++){
                innerBox[j].style.display = 'none';
                menuItems[j].style.background = 'none';
            }
            menuItems[idx].style.background = 'rgba(0,0,0,0.1)';
            innerBox[idx].style.display = 'block';
        }
    }
    menu.onmouseout = function () {

        subMenu.className = "sub-menu hide";
    };
    subMenu.onmouseover = function () {

        this.className = "sub-menu";
    };
    subMenu.onmouseout = function () {

        this.className = "sub-menu hide";
    }
}
function changeImg() {

    for(var i = 0; i < len; i++){
        pics[i].style.display = 'none';
        dots[i].className = "";
    }
    pics[index].style.display = 'block';
    dots[index].className = "active";
}
slideImg();

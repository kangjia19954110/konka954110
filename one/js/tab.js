
let that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.getElementById('tab');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        // 获取section的父元素
        this.fSection = this.main.querySelector('.tabscon');
        this.add = this.main.querySelector('tabadd');
        this.remove = this.main.querySelectorAll('i');
        this.init();
    }

    init() {
        this.updateNode();
        // init初始化操作让相关的元素绑定事件？、
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    // 动态添加元素，需要从新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('i');
        this.spans = this.main.querySelectorAll('span');
    }

    // 切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';

    }

    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    // 添加功能
    addTab() {
        that.clearClass();
        let li = '<li class="liactive"><span>新选项卡</span><i>X</i></li>';
        let section = '<section class="conactive">新内容区</section>';
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fSection.insertAdjacentHTML('beforeend', section);
        that.init();
    }

    // 删除功能
    removeTab(e) {
        e.stopPropagation();
        let index = this.parentNode.index;

        that.lis[index].remove();
        that.sections[index].remove();
        that.init()

        if (document.querySelector('.liactive')) return;

        index--;

        that.li[index] && that.lis[index].click();
    }

    // 修改功能
    editTab() {
        let str = this.innerHTML;

        window.getSelection ? window.getSelection().removeAllRanges() : document.section.empty();
        this.innerHTML = '<input type="text" value="' + str + '"/>';
        let input = this.children[0];

        input.select();

        input.onblur = function () {
            this.parentNode.innerHTML = input.value;

        };
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}
let tab = new Tab('#tab');


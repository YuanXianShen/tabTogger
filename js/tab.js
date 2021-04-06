class Tab {
    constructor(id) {
        this.main = document.querySelector(id);
    }
    // 初始化
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {

        }
    }
    // 节点改变
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
    }
    // tab切换
    toggleTab() { }
    // 清除所有li 和section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //  添加
    addTab() { }
    // 删除
    removeTab(e) { }
    // 编辑
    editTab() { }
}

new Tab('#tab');
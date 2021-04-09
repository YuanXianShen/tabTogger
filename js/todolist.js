$(function () {
    load();
    $('#title').on('keydown', function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === '') {
                alert('请输入您要的操作')
            } else {
                var local = getData();
                local.push({ title: $(this).val(), done: false })
                saveData(local);
                load();
                $(this).val("");
            }
        }
    })
    // 保存本地数据
    function saveData(data) {
        localStorage.setItem('todolist', JSON.stringify(data))
    }
    // 获取本地数据
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data != null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 正在进行和已完成选项操作
    $('ol, ul').on('click', 'input', function () {
        console.log(111);
        var data = getData();
        // 获取兄弟元素id作为索引
        var index = $(this).siblings('a').attr('id');
        data[index].done = $(this).prop('checked');
        saveData(data);
        load();
    });
    // 删除操作
    $('ol, ul').on('click', 'a', function () {
        var data = getData();
        var index = $(this).attr('id');
        data.splice(index, 1);
        saveData(data);
        load();
    })

    // 加载数据
    function load() {
        var data = getData();
        //  定义正在进行的个数
        var todoCount = 0;
        // 定义已经完成的个数
        var doneCount = 0;
        $("ol, ul").empty();
        $.each(data, function (i, n) {
            if (n.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p>" + n.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todoCount++;
            }
        });
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);

    }
})
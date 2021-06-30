let div1 = document.createElement('div');
div1.className = 'demo'

document.body.appendChild(div1);

var dragging = false
var lastX
var lastY

document.body.onmousedown = function (e) {
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.onmousemove = function (e) {
    //监听document 不要监听body
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY

        var top = parseInt(div1.style.top) || 0
        var left = parseInt(div1.style.left) || 0
        // 将位置转换成数字

        var resultY = top + deltaY
        var resultX = left + deltaX
        // 防止鼠标左移和上移出边界
        if (resultY < 0) {
            resultY = 0
        }
        if (resultX < 0) {
            resultX = 0
        }

        div1.style.top = resultY + 'px'
        div1.style.left = resultX + 'px'
        // div1.style.top 只能取内联样式

        lastX = e.clientX
        lastY = e.clientY
        // 更新上次移动的位置
    }
}

document.onmouseup = function () {
    dragging = false
}
// document.body.onclick = function (x) {
//     console.log(x)
//     // 输出鼠标点击事件 
//     // clientX clientY在页面上的位置
// }
// 定义了点击按钮时的行为。
document.querySelector('#push').onclick = function(){
    // 首先判断输入框中的内容是否为空。如果为空，则弹出一个提示框，提示用户输入任务。如果不为空，则执行后续代码块。
    if(document.querySelector('#newtask input').value.length == 0){
        alert("请输入任务")
    }
    else{
      // 使用 innerHTML 属性向任务列表中添加一个新任务。
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    删除
                </button>
            </div>
        `;
// 将删除按钮的点击事件绑定到一个匿名函数上，当点击删除按钮时，它将删除任务列表中的相应任务
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}


// 下面是代办任务的代码

// 定义了点击按钮时的行为。
document.querySelector('#push1').onclick = function(){
    // 首先判断输入框中的内容是否为空。如果为空，则弹出一个提示框，提示用户输入任务。如果不为空，则执行后续代码块。
    if(document.querySelector('#newtask1 input').value.length == 0){
        alert("请输入任务")
    }
    else{
      // 使用 innerHTML 属性向任务列表中添加一个新任务。
        document.querySelector('#tasks1').innerHTML += `
            <div class="task1">
                <span id="taskname">
                    ${document.querySelector('#newtask1 input').value}
                </span>
                <button class="delete1">
                    删除
                </button>
                <button class="amedg">
                    修改
                </button>
                <button class="complete">
                    完成
                </button>
            </div>
        `;
// 将删除按钮的点击事件绑定到一个匿名函数上，当点击删除按钮时，它将删除任务列表中的相应任务
        var current_tasks = document.querySelectorAll(".delete1");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
       
// 将修改按钮的点击事件绑定到一个匿名函数上，当点击修改按钮时，可以修改任务列表中的相应任务名称，移开焦点后完成保存      
        var current_amedg = document.querySelectorAll(".amedg");
        for(var i=0; i<current_amedg.length; i++){
            current_amedg[i].onclick = function(){
                const span = this.parentNode.querySelector('span'); // 找到该任务项下的 span 元素
                const input = this.parentNode.querySelector('.edit-input');  // 找到该任务项下的 input 元素

                if (!input) {  // 如果 input 元素不存在，就创建一个，并把原始任务名称填入输入框
                    const newInput = document.createElement('input');
                    newInput.className = 'edit-input';
                    newInput.value = span.innerHTML.trim();
                    newInput.style.border = 'none'; // 去掉边框
                    newInput.style.width = span.offsetWidth + 'px'; // 设置输入框宽度与 span 元素相同
                    newInput.style.height = span.offsetHeight + 'px' // 设置输入框高度与 span 元素相同
                    newInput.style.padding = span.style.padding; // 继承样式 padding
                    newInput.style.margin = span.style.margin; // 继承样式 margin
                    newInput.style.fontSize = window.getComputedStyle(span, null).getPropertyValue('font-size'); // 继承字体大小
                    newInput.style.fontFamily = window.getComputedStyle(span, null).getPropertyValue('font-family'); // 继承字体家族

                    span.style.display = 'none'; // 隐藏原始任务名称
                    span.insertAdjacentElement('afterend', newInput); // 将新建的输入框插入到该 span 元素之后，并且位置与 span 相同
                    newInput.focus(); // 让输入框获得焦点

                    /* 输入框失去焦点时触发 */
                    newInput.onblur = () => {
                        span.innerHTML = newInput.value.trim() === '' ? '任务名称' : newInput.value;
                        span.style.display = 'inline-block'; // 显示修改后的任务名称，并隐藏输入框
                        newInput.parentNode.removeChild(newInput); // 从 DOM 中移除输入框
                    }
                }
            }
        }
// 将完成按钮的点击事件绑定到一个匿名函数上，当点击完成按钮时，任务列表中的相应任务将添加删除线，再次点击后出钱删除线
        var current_complete = document.querySelectorAll(".complete");
        for(var i=0; i<current_complete.length; i++){
            current_complete[i].onclick = function(){
                const span = this.parentNode.querySelector('span');
                if (span.style.textDecoration === 'line-through') {  // 如果已经有删除线，则将其去掉
                span.style.textDecoration = 'none';
                } else {  // 如果没有删除线，则添加删除线
                span.style.textDecoration = 'line-through';
                }
            }
        }
    }
}
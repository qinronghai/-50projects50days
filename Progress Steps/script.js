/**业务逻辑
 * 类似进度条的东西，有4个节点
 * 1.有两个按钮：next和prev。
 * 2.初始状态下，1号节点点亮，prev按钮是不可点击的状态，灰色的。
 * 3.点击next之后，进度条点亮1/4，且2号节点点亮。
 *   prev按钮变成蓝色的可点击的。直到最后一个节点点亮之后，next按钮变灰色的不可点击。
 * 4.点击prev按钮之后，效果与next相反。到了1号节点之后变成初始状态。
 * 
 * 根据以上分析：
 * 1. 按钮有两两种状态：
 *    变蓝：可点击，节点进退有效果。 1-4之间。
 *    变灰：不可点击。节点号码=1或者=4时。
 * 2. 节点激活只有颜色改变，并且有一点点动画效果。
 */
let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', function () {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
    
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive == 1) {
        currentActive = 1;
    }

    update();

})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    // 进度条的长度=(当前节点激活节点/总节点）%
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
let bg = document.querySelector('.bg');
let percent = document.querySelector('.percent');

let load = 0;

let timeId = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(timeId);
    }

    percent.innerText = `${load}%`;
    percent.style.opacity = scale(load, 0, 100, 1, 0);   // 1-0
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // 30-0
}

// 此函数根据load（0-100的值）分别显示1-0和30-0（保留小数点后两位级别）的值。
const scale = (load, in_min, in_max, out_min, out_max) => {
    return ((load - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

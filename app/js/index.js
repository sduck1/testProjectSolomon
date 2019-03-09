document.getElementById('menu-btn').onclick = openMenu;
document.querySelector('.menu-block').onclick = closeMenu;

let left = 0;
let timer = 0;

autoTime();

function autoTime() {
    timer = setTimeout(function () {
        let block = document.getElementById('slider');
        left+= 192;
        if (left>400) {
            left=0;
            clearTimeout(timer);
        }

        block.style.left = left + 'px';
        autoTime();
    },2000);
}


function openMenu() {
    document.querySelector('.menu-block').classList.remove('hide');
}

function closeMenu() {
    document.querySelectorAll('.menu-block').forEach((element)=>{
        element.classList.add('hide');
    });
}

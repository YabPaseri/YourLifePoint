// let endpoint = new Date('2020-01-31T23:59:59');
// let viewarea = document.getElementById('viewarea');

function zeroPadding(num,length){
    return ('0000000000' + num).slice(-length);
}

document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

const view = function() {
    // let endpoint = new Date('2020-01-31T16:45:00+0900');
    let endpoint = new Date("Fri, Jan 31, 2020 07:45:00 +0900");
    let viewarea = document.getElementById('lifepoint');
    let subviewarea = document.getElementById('sublifepoint');
    let nowu = new Date();
    // viewarea.innerHTML = nowu.toUTCString().slice(0,-3) + '+0900';
    let now = new Date(nowu.toUTCString().slice(0,-3) + '+0900');
    viewarea.innerHTML = endpoint.toString();
    // now.setTime(now.getTime() + 1000*60*60*9);// JSTに変換
    let diff = endpoint.getTime() - now.getTime();
    // viewarea.innerHTML = parseInt((diff/1000));
    // viewarea.innerHTML = (diff/1000).toFixed(2);

    let sec = parseInt(diff/1000);
    let d = sec/86400 | 0;
    let h = sec%86400/3600 | 0;
    let m = sec%86400%3600/60 | 0;
    let s = sec%60;

    subviewarea.innerHTML = zeroPadding(d,2) + 'd ' + zeroPadding(h,2) + 'h ' + zeroPadding(m,2) + 'm ' + zeroPadding(s,2) + 's'
}

setInterval(view, 73);

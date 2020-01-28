function zeroPadding(num,length){
    return ('0000000000' + num).slice(-length);
}

function printTimer(diff) {
    // 要素取得
    let viewarea = document.getElementById('lifepoint');
    let subviewarea = document.getElementById('sublifepoint');
    // 残り時間表示
    viewarea.innerHTML = (diff/1000).toFixed(2);
    // 単位変換
    let sec = parseInt(diff/1000);
    let d = sec/86400 | 0;
    let h = sec%86400/3600 | 0;
    let m = sec%86400%3600/60 | 0;
    let s = sec%60;
    // 残り時間表示
    subviewarea.innerHTML = zeroPadding(d,2) + 'd ' + zeroPadding(h,2) + 'h ' + zeroPadding(m,2) + 'm ' + zeroPadding(s,2) + 's'
}

function printWait(diff) {
    // 要素取得
    let intitle = document.getElementById('intitle');
    let viewarea = document.getElementById('lifepoint');
    let subviewarea = document.getElementById('sublifepoint');
    intitle.innerHTML = 'YOU CAN DO IT !!';
    // 単位変換
    let sec = parseInt(diff/1000);
    let h = sec%86400/3600 | 0;
    let m = sec%86400%3600/60 | 0;
    let s = sec%60;
    viewarea.innerHTML = zeroPadding(h,2) + 'h ' + zeroPadding(m,2) + 'm ' + zeroPadding(s,2) + 's'
    subviewarea.innerHTML = 'Now is publishing\nthe graduation thesis';
}

function printAfter(diff) {
    // 要素取得
    let intitle = document.getElementById('intitle');
    let viewarea = document.getElementById('lifepoint');
    let subviewarea = document.getElementById('sublifepoint');
    intitle.innerHTML = 'Since that day...';
    // 単位変換
    let sec = parseInt(diff/1000);
    let d = sec/86400 | 0;
    let h = sec%86400/3600 | 0;
    let m = sec%86400%3600/60 | 0;
    let s = sec%60;
    // 経過時間表示
    viewarea.innerHTML = d + 'd'
    subviewarea.innerHTML = '+ ' + zeroPadding(h,2) + 'h ' + zeroPadding(m,2) + 'm ' + zeroPadding(s,2) + 's'
}

document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});

const view = function() {
    // 現在標準時時間
    let now = ((new Date()).getTime()) + (new Date()).getTimezoneOffset()*60*1000;

    // 第一目標
    let endpoint1 = (new Date(2020, 0, 31, 16, 45, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000;
    let endpoint2 = (new Date(2020, 1, 13, 14, 50, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000;
    let endpoint3 = (new Date(2020, 1, 13, 16, 30, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000;

    if (now < endpoint1) {
        printTimer(endpoint1 - now);
    }
    else if (now < endpoint2) {
        printTimer(endpoint2 - now);
    }
    else if (now < endpoint3) {
        printWait(endpoint3 - now);
    } else {
        printAfter(now - endpoint3);
    }
}

setInterval(view, 73);

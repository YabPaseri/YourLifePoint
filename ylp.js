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

function printGroup(diff, groupName, nextGroup) {
    // 要素取得
    let intitle = document.getElementById('intitle');
    let viewarea = document.getElementById('lifepoint');
    let subviewarea = document.getElementById('sublifepoint');
    intitle.innerHTML = groupName;
    // 単位変換
    let sec = parseInt(diff/1000);
    let h = sec%86400/3600 | 0;
    let m = sec%86400%3600/60 | 0;
    let s = sec%60;
    viewarea.innerHTML = zeroPadding(m,2) + 'm ' + zeroPadding(s,2) + 's'
    subviewarea.innerHTML = 'Next group is ' + nextGroup;
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

    let endpoint1 = (new Date(2020, 0, 31, 16, 45, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // 提出
    let endpoint2 = (new Date(2020, 1, 13, 14, 50, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // マイコン
    let endpoint3 = (new Date(2020, 1, 13, 15, 5, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // 休憩
    let endpoint4 = (new Date(2020, 1, 13, 15, 20, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // サッカー
    let endpoint5 = (new Date(2020, 1, 13, 15, 35, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // 人狼
    let endpoint6 = (new Date(2020, 1, 13, 15, 50, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // viewer
    let endpoint7 = (new Date(2020, 1, 13, 16, 00, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // dcop
    let endpoint8 = (new Date(2020, 1, 13, 16, 15, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // map
    let endpoint9 = (new Date(2020, 1, 13, 16, 25, 0, 0)).getTime() + (new Date()).getTimezoneOffset()*60*1000; // after

    if (now < endpoint1) {
        printTimer(endpoint1 - now);
    }
    else if (now < endpoint2) {
        printTimer(endpoint2 - now);
    }
    else if (now < endpoint3) {
        printGroup(endpoint3 - now, 'Micro Computer', 'RSS');
    }
    else if (now < endpoint4) {
        printGroup(endpoint4 - now, 'Break Time', 'RSS');
    }
    else if (now < endpoint5) {
        printGroup(endpoint5 - now, 'RSS', 'AIWolf');
    }
    else if (now < endpoint6) {
        printGroup(endpoint6 - now, 'AIWolf', 'Viewer');
    }
    else if (now < endpoint7) {
        printGroup(endpoint7 - now, 'Viewer', 'DCOP');
    }
    else if (now < endpoint8) {
        printGroup(endpoint8 - now, 'DCOP', 'MAP');
    }
    else if (now < endpoint9) {
        printGroup(endpoint9 - now, 'MAP', 'NONE');
    }
    else {
        printAfter(now - endpoint9);
    }
}

setInterval(view, 73);

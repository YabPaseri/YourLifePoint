// let endpoint = new Date('2020-01-31T23:59:59');
// let viewarea = document.getElementById('viewarea');

const view = function() {
    let endpoint = new Date('2020-01-31T23:59:59');
    let viewarea = document.getElementById('lifepoint');
    let now = new Date();
    let diff = endpoint.getTime() - now.getTime();
    // viewarea.innerHTML = parseInt((diff/1000));
    viewarea.innerHTML = (diff/1000).toFixed(3);
}

setInterval(view, 1);
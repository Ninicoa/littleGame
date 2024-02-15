
const uzomi = document.querySelector('.uzomi');
const criminoso = document.querySelector('.criminoso');

const pulo = () => {
    criminoso.classList.add('pulo');

    setTimeout(()=>{

        criminoso.classList.remove('pulo');

    }, 700)
}

const loop = setInterval(()=>{

    console.log('loop')

    const uzomiPosition = uzomi.offsetLeft;
    const criminosoPosition = +window.getComputedStyle(criminoso).bottom.replace('px','');


    if (uzomiPosition <= 100 && uzomiPosition > 0 && criminosoPosition <= 120){

        uzomi.style.animation = 'none';
        uzomi.style.left = `${uzomiPosition}px`;

        criminoso.style.animation = 'none';
        criminoso.style.bottom = `${criminosoPosition}px`;

        criminoso.src = '/img/criminoso.preso.png';
        criminoso.style.width = '120px'
        criminoso.style.marginLeft = '-25px'
        
        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        pulo();
    }
});

document.getElementById('recarregar').addEventListener('click', function() {
    location.reload();
});
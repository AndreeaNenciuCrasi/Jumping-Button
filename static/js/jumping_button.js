
let btnYes = document.querySelector('#yes');
let btnNo = document.querySelector('#no');
let field  = document.querySelector('div');


if (field.dataset.answer === 'yes'){
    btnYes.addEventListener('click', function () {
        alert('I knew you selected this :)');
    });
    btnNo.addEventListener('click', function (event) {
        event.target.classList.add('button');
    });
}

if (field.dataset.answer === 'no') {
    btnNo.addEventListener('click', function (){
        alert('I knew you selected this :)');
    });
    btnYes.addEventListener('click', function (event) {
        event.target.classList.add('button');
    });
}

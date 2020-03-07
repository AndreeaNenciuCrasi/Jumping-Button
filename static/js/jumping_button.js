function main(){
    let btnYes = document.querySelector('#yes');
    let btnNo = document.querySelector('#no');
    let field  = document.querySelector('div');


    if (field.dataset.answer === 'yes'){
        btnYes.addEventListener('click', function () {
            alert('I knew you selected this :)');
        });
        btnNo.addEventListener('mouseenter', function (event) {
            event.target.classList.add('button');
        });
        btnNo.addEventListener('mouseenter', runNo);
    }

    if (field.dataset.answer === 'no') {
        btnNo.addEventListener('click', function (){
            alert('I knew you selected this :)');
        });
        btnYes.addEventListener('mouseenter', function (event) {
            event.target.classList.add('button');
        });
        btnYes.addEventListener('mouseenter', runYes);
    }
}
main();

function runNo() {
    let btn = document.getElementById("no");
    if (!btn.style.left) {
        // Default to 500 to start
        btn.style.left = "500px";
    } else {
        let posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}
function runYes() {
    let btn = document.getElementById("yes");
    if (!btn.style.left) {
        // Default to 500 to start
        btn.style.left = "500px";
    } else {
        let posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else if (posLeft > 450) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}

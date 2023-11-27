document.querySelectorAll('.choose').forEach(element => {
    element.onclick = chooseFunction;
});

function chooseFunction() {
    let quality = document.querySelector('.choose[value="quality"]');
    let speed = document.querySelector('.choose[value="speed"]');
    let cheap = document.querySelector('.choose[value="cheap"]');
    console.log(1);
    console.log(this.value);
    
    if (this.value == 'quality' && speed.checked) {
        cheap.checked = false
    }else true;
    if (this.value == 'quality' && cheap.checked) {
        speed.checked = false
    }else true;

    
    if (this.value == 'speed' && quality.checked) {
        cheap.checked = false
    }else true;
    if (this.value == 'speed' && cheap.checked) {
        quality.checked = false
    }else true;
    if (this.value == 'cheap' && speed.checked) {
        quality.checked = false
    }else true;
    if (this.value == 'cheap' && quality.checked) {
        speed.checked = false
    }else true;
};





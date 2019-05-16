window.onload = function () {
    let block = document.getElementById('block');
    
    // position Y
    let posY = document.getElementById('pos-y');
    posY.onchange = function () {
        block.style.top = this.value + 'px';
    }

    // position x
    let posX = document.getElementById('pos-x');
    posX.onchange = function () {
        block.style.left = this.value + 'px';
    }

    // size
    let size = document.getElementById('size');
    size.onchange = function () {
        block.style.height = (this.value * 150) + 'px';
        block.style.width = (this.value * 150) + 'px';
        // block.style.transform = 'scale(' + this.value + ')';
    }

    // opacity
    let opacity = document.getElementById('opacity');
    opacity.onchange = function () {
        block.style.opacity = this.value;
    }

    // shape
    let selector = document.getElementById('shape-select');
    let okButton = document.getElementById('ok-shape');

    selector.onchange = function () {
        let option = selector.value;
        if (option === '1') {
            block.style.borderRadius = '0%';
            block.style.transform = 'rotate(0deg)';
        }else if (option === '2') {
            block.style.borderRadius = '50%';
        }else if (option === '3') {
            block.style.borderRadius = '0%';
            block.style.transform = 'rotate(45deg)';
        }
    }

    // hex
    let hex = document.getElementById('hex');
    hex.onkeypress = function (e) {
        if (e.which === 13) {
            block.style.background = '#' + this.value;
        }        
    }

    // rgba
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbaContainer = document.querySelector('.rgba-container');
    let rgbaInputs = rgbaContainer.querySelectorAll('input');

    rgbaInputs.forEach(element => {
        element.onchange = function () {
            block.style.backgroundColor = 'rgba(' + rgbaR.value + ',' + rgbaG.value + ',' + rgbaB.value + ',' + rgbaA.value + ')';
        }
    });
    
}
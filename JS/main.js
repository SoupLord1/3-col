
var colorCycle = 0;

var col1 = document.getElementsByClassName('colmid')[0]
var col2 = document.getElementsByClassName('colleft')[0]
var col3 = document.getElementsByClassName('threecol')[0]

setInterval(shiftColors, 200);

function shiftColors() {
    if (colorCycle == 0) {
        col1.style.backgroundColor = 'red';
        col2.style.backgroundColor = 'blue';
        col3.style.backgroundColor = 'purple';
    }
    else if (colorCycle == 1) {
        col1.style.backgroundColor = 'blue';
        col2.style.backgroundColor ='purple';
        col3.style.backgroundColor = 'red';
    }
    else {
        col1.style.backgroundColor = 'purple';
        col2.style.backgroundColor = 'red';
        col3.style.backgroundColor = 'blue';
        colorCycle = 0;
        return;
    }
    colorCycle++;

}


/*function changeColor() {
    if (col1Toggle == 0) {
        col1[0].style.backgroundColor = 'green';
        col1Toggle = 1;
        return;
    }
    col1[0].style.backgroundColor = 'purple';
    col1Toggle = 0;
} */
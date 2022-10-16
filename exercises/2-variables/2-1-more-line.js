
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width =context.canvas.width
let height = context.canvas.height

let margin = 50;
let spacing = 50;

console.log(context.canvas)

drawLines();
function drawLines(x,y,size){
    context.beginPath();
    context.moveTo(margin,spacing *1);
    context.lineTo(width-margin,spacing*1)
    context.lineTo(margin,spacing*2)
    context.lineTo(width-margin,spacing*2)
    context.lineTo(margin,spacing*3)
    context.lineTo(width-margin,spacing*3)
    context.lineTo(margin,spacing*4)
    context.lineTo(width-margin,spacing*4)
    context.lineTo(margin,spacing*5)
    context.lineTo(width-margin,spacing*5)
    context.lineTo(margin,spacing*1)
    context.stroke();
}


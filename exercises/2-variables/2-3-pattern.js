"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;


console.log(context.canvas);

let sizeW = width/3;
let sizeH = height/6;

pattern(0, 0, sizeW, sizeH*4, 'navy')
pattern(0, sizeH*4, sizeW, sizeH*2, 'dodgerblue')

pattern(sizeW*2,0,sizeW,sizeH*4,'navy')
pattern(sizeW*2,sizeH*4,sizeW,sizeH*2,'dodgerblue')

pattern(0,sizeH,sizeW*3,sizeH*2,'red')



function pattern(x, y, w, h, color){    
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x,y,w,h);
}   
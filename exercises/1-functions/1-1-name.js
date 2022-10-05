"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName(){
    //T
    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(50 , 50);
    context.lineTo(100, 50);
    context.stroke(); 
    context.beginPath();
    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(75, 200);
    context.stroke();

    //O
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(125, 50);
    context.lineTo(125, 200);
    context.stroke();
    context.beginPath();
    context.moveTo(125, 50);
    context.lineTo(175, 50);
    context.stroke();
    context.beginPath();
    context.moveTo(175, 50);
    context.lineTo(175, 200);
    context.stroke();
    context.beginPath();
    context.moveTo(125, 200);
    context.lineTo(175, 200);
    context.stroke();

    //M
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 200);
    context.stroke();
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(230, 100);
    context.stroke();
    context.beginPath();
    context.moveTo(230,100);
    context.lineTo(260,50 );
    context.stroke();
    context.beginPath();
    context.moveTo(260, 50);
    context.lineTo(260, 200);
    context.stroke();

    //A
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(285, 200);
    context.stroke(); 
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(325, 200);
    context.stroke(); 
    context.beginPath();
    context.moveTo(285, 200);
    context.lineTo(325, 150);
    context.stroke();
}
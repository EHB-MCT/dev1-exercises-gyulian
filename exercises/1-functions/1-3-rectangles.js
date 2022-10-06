"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

rectangles();

function rectangles(){
//vierkant 1
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(50 , 50);
context.lineTo(200, 50);
context.moveTo(50 , 50);
context.lineTo(50, 200);
context.moveTo(200 , 50);
context.lineTo(200, 200);
context.moveTo( 50, 200);
context.lineTo(200, 200);
context.stroke();

//vierkant 2
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(200 ,350);
context.lineTo(200, 200);
context.moveTo(350 ,350);
context.lineTo(350, 200);
context.moveTo(350 , 200);
context.lineTo(200, 200);
context.moveTo( 350, 350);
context.lineTo( 200, 350);
context.stroke();

//vierkant zwart mid
context.fillStyle = 'black';
context.fillRect(125,125,150,150) ;
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(125 , 125);
context.lineTo(275 , 125);
context.moveTo(125 , 125);
context.lineTo(125, 275);
context.moveTo(275 , 125);
context.lineTo(275, 275);
context.moveTo( 125, 275);
context.lineTo(275, 275);
context.stroke();

//vierkant klein links
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(275 , 75);
context.lineTo(325, 75);
context.moveTo(275 , 75);
context.lineTo(275, 125);
context.moveTo(325 , 75);
context.lineTo(325, 125);
context.moveTo(275, 125);
context.lineTo(325, 125);
context.stroke();

//vierkant klein rechts
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(125, 275);
context.lineTo(75, 275);
context.moveTo(75 ,275);
context.lineTo(75, 325);
context.moveTo(125, 275);
context.lineTo(125, 325);
context.moveTo( 75, 325);
context.lineTo(125, 325);
context.stroke();

//vierkant zwart links
context.fillStyle = 'black';
context.fillRect(325,50,25,25) ;

//vierkant zwart rechts
context.fillStyle = 'black';
context.fillRect(50,325,25,25) ;

}
 
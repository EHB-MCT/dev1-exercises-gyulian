"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let size = 300;

let r = Math.floor(Math.random() *255);
let g = Math.floor(Math.random() *255);
let b = Math.floor(Math.random() *255);
let color = "rgb(" + r + "," + g + "," + b + ")";
console.log(r, g, b);

context.fillStyle = color;
context.fillRect( width/2 -size/2,height/2 -size/2,size,size);

size = 275;
r = Math.floor(Math.random() *255);
g = Math.floor(Math.random() *255);
b = Math.floor(Math.random() *255);
console.log(r, g, b);
color = "rgb(" + r + "," + g + "," + b + ")";
context.fillStyle = color;
context.fillRect( width/2 -size/2,height/2 -size/2,size,size);

size = 250;
r = Math.floor(Math.random() *255);
g = Math.floor(Math.random() *255);
b = Math.floor(Math.random() *255);
console.log(r, g, b);
color = "rgb(" + r + "," + g + "," + b + ")";
context.fillStyle = color;
context.fillRect( width/2 -size/2,height/2 -size/2,size,size);

    
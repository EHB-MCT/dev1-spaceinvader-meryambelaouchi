"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawSpace();

function drawSpace() {
    context.fillStyle = 'black';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
    
    context.fillStyle = 'green';
    context.beginPath();
    context.rect(125, 75, 50, 50);
    context.rect(225, 75, 50, 50);
    context.rect(125, 125, 150, 200);
    
    context.fill();

}
//-----------------------------------------
//  Visual Hypotenuse Calculator JavaScript
//-----------------------------------------

//
//  Grab Elements
//
const _canv = document.getElementById("myCanvas")
const _ctx = _canv.getContext('2d');

const _myHypo = document.getElementById("myHypo");
const _legA = document.getElementById("legA");
const _legB = document.getElementById("legB");
const _slvBtn = document.getElementById("solve");

//
//  Create Variables
//
const scale = 10;
const fps = 60;
let a;
let b;
let c;
let firstStep;
let lastStep;

_slvBtn.onclick = function() {
    //
    //  Clears canvas to display new drawing
    //
    _ctx.clearRect(0, 0, _canv.clientWidth, _canv.clientHeight);

    a = Number(_legA.value);
    b = Number(_legB.value);

    //
    //  Hypo formula: the sqrt of a^2 + b^2
    //
    firstStep = (a * a) + (b * b);
    lastStep = Math.sqrt(firstStep);
    c = Math.round(100*lastStep)/100;

    //
    //  Draws the triangle to the center of the canvas
    //  using var a and b
    //
    _ctx.beginPath();
    _ctx.moveTo(_canv.clientWidth - (b * scale),
                _canv.clientHeight - (a * scale));
    _ctx.lineTo(_canv.clientWidth - (b * scale), a * scale); //leg a on y
    _ctx.lineTo(b * scale, _canv.clientHeight - (a * scale)); //leg b on x
    _ctx.fill();

    //
    //  Display Hypotenuse
    //
    _myHypo.innerHTML = `The Hypotenuse is: ${c}`;
}
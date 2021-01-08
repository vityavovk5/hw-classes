// работа с класом окружность
class Circle {
    constructor(radius = 1) {
        this.radius = radius;
    }
    get radiusCircle() {
        return this.radius;
    }
    set newRadius(takeRagius) {
        this.radius = takeRagius;
    }
    get diameterCircle() {
        return this.radius * 2;
    }
    get areaCircle() {
        return Number((Math.PI * Math.pow(this.radius, 2)).toFixed(2));
    }
    get lengthCircle () {
        return Number((2 * Math.PI * this.radius).toFixed(2));
    }
}
var a = new Circle();

function getMyRagius() {
    let fild = document.getElementById("writeFild");
    cleanFild()
    fild.insertAdjacentHTML('beforeend', `сейчас радиус круга - <b>${a.radiusCircle}</b>`);
}
function setNewRadius() {
    let fild = document.getElementById("writeFild");
    let inputRadius = document.getElementById("newRadius").value;
    if(inputRadius == "" || Number(inputRadius) < 1) {
        cleanFild()
        fild.insertAdjacentHTML('beforeend', `введи радиус окружности плис больше 0`);
    } else {
        a.newRadius = Number(inputRadius);
        cleanFild()
        fild.insertAdjacentHTML('beforeend', `поменяли радиус круга на <b>${a.radiusCircle}</b>`);
    }
}
function showDiameter() {
    let fild = document.getElementById("writeFild");
    cleanFild()
    fild.insertAdjacentHTML('beforeend', `диаметр круга - <b>${a.diameterCircle}</b>`);
}
function showArea() {
    let fild = document.getElementById("writeFild");
    cleanFild()
    fild.insertAdjacentHTML('beforeend', `площа круга где то - <b>${a.areaCircle}</b>`);
}
function showLength() {
    let fild = document.getElementById("writeFild");
    cleanFild()
    fild.insertAdjacentHTML('beforeend', `длина окружности примерно - <b>${a.lengthCircle}</b>`);
}
function cleanFild() {
    let compareClean = document.getElementById("writeFild");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}

// работа с класом маркер

class Marker {
    constructor(color = "blue", percent = 100) {
        this.colorMarker = color;
        this.percentMarker = percent;
    }
    get colorText() {
        return this.colorMarker;
    }
    get percentInMarker() {
        return this.percentMarker;
    }
}

var firstMarker = new Marker();

function writeTextMarker() {
    let textToMarker = document.getElementById("textForMarker").value;
    let fild = document.getElementById("markerBoard");
    let textWithoutSpaces = textToMarker.split(' ').join('');
     
    if(textWithoutSpaces.length < firstMarker.percentMarker * 2) { 
        cleanBoard()
    fild.insertAdjacentHTML('beforeend', `<div style="color: ${firstMarker.colorText};">${textToMarker}</div>`);
} else {
    alert("В маркере закончились чернила");
    document.getElementById("textForMarker").value = "";
    document.getElementById('textForMarker').readOnly = true;
}
}
function cleanBoard() {
    let compareClean = document.getElementById("markerBoard");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}


class RefuelingMarker extends Marker {
    constructor(color, percent) {
        super(color, percent);
      
    }
    get colorText() {
        return this.colorMarker;
    }
    get percentText() {
        return this.percent;
    }
   
    set refuelingPercent(value) {
            this.percent = value;
    }
    set changeColorText(newColor) {
        this.color = newColor;
}
}

let colorMarker = new RefuelingMarker;
  
function writeCoolMarker() {
    let textToMarker = document.getElementById("textForCoolMarker").value;
    let fild2 = document.getElementById("markerBoardCool");
    let textWithoutSpaces = textToMarker.split(' ').join('');
    if(textWithoutSpaces.length < colorMarker.percentMarker * 2) { 
        cleanCoolBoard()
    fild2.insertAdjacentHTML('beforeend', `<div style="color: ${colorMarker.colorText};">${textToMarker}</div>`);
} else {
    document.getElementById("textForCoolMarker").value = "";
    document.getElementById("textForCoolMarker").readOnly = true;
    alert("В маркере закончились чернила");
}
}
function refresh() {
    colorMarker.refuelingPercent = 100;
    document.getElementById("textForCoolMarker").readOnly = false;
}
// function changeSelectColor() {
//     let selectColor = document.getElementById("selectColor").value;
//     colorMarker.changeColorText = "selectColor";
//     console.log(selectColor);
//     console.log(colorMarker.colorText);
// }



 



 
function cleanCoolBoard() {
    let compareClean = document.getElementById("markerBoardCool");
    while (compareClean.firstChild) {
        compareClean.removeChild(compareClean.firstChild);
    }
}
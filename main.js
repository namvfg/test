class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Vecto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class Ball {
    constructor(position, vecto) {
        this.position = position;
        this.vecto = vecto;
    }
}
function congVecto(vectoA, vectoB) {
    var vectoC = new Vecto(vectoA.x + vectoB.x, vectoA.y + vectoB.y);
    return vectoC;
}
function decrease(num) {
    if (num > 0) {
        num--;
    }
    else if (num < 0) {
        num ++;
    }
    return num;
}

var ballElement = document.querySelector('#ball-img')
var positionX = ballElement.offsetLeft;
var positionY = ballElement.offsetTop;
var beginVector = new Vecto(10, 10);
var gravity = new Vecto(0, 10);
var gravityTmp = 5;
var push = new Vecto(10, 5);
var beginPosition = new Position(positionX, positionY)

var Ball1 = new Ball(beginPosition,beginVector);

var timer = undefined;
function play(obj) {
    if(obj.innerText.toLowerCase() === 'play') {
        var area = document.getElementById('main-area');
        var tmp = new Vecto;
        tmp = congVecto(Ball1.vecto, push);
        Ball1.vecto = tmp;
        gravityTmp = 10;
        timer = setInterval(function () {
            Ball1.position.x += Ball1.vecto.x;
            Ball1.position.y += Ball1.vecto.y;
            if (Ball1.position.x >= area.clientWidth - ballElement.clientWidth) {
                Ball1.vecto.x *= -1;
            }
            else if (Ball1.position.x <= 0) {
                Ball1.vecto.x *= -1;
            }
            if (Ball1.position.y >= area.clientHeight - ballElement.clientHeight) {
                Ball1.vecto.y *= -1;
            }
            else if (Ball1.position.y <= 0){
                Ball1.vecto.y *= -1;
            }
            ballElement.style.left = (Ball1.position.x) + 'px';
            ballElement.style.top = (Ball1.position.y) + 'px'
        }, 20)
    }
    else if (obj.innerText.toLowerCase() === 'stop' && timer != undefined) {
        clearInterval(timer)
    }
}

setInterval(function () {
    Ball1.vecto.x = decrease(Ball1.vecto.x);
}, 200)


setInterval(function () {
    gravityTmp -= 1;
    if (Ball1.position.y >= area.clientHeight - ballElement.clientHeight) {
        Ball1.vecto.y = -gravity.Tmp;
        gravity.y = 0;
    }
    else {
        gravity.y = 10;
        Ball1.vecto.y = gravity.y;
    }
}, 20);

var container = document.getElementById('footer');
var text = document.getElementById('footer-text');
var pos = new Position(text.offsetLeft, text.offsetTop);
var vec = new Vecto(1, 0);
var textObj = new Ball(pos, vec);
console.log(container.clientWidth, text.clientWidth)
setInterval(function () {
    textObj.position.x += textObj.vecto.x;
    if (textObj.position.x >= container.clientWidth - text.clientWidth) {
        textObj.vecto.x *= -1;
    }
    else if (textObj.position.x <= 0) {
        textObj.vecto.x *= -1;
    }
    text.style.left = (textObj.position.x) + 'px';

}, 1)

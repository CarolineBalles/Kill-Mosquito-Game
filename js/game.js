var height = 0;
var width = 0;
var lives = 1;
var time = 15;

var createTimeGnat = 2000;

var level = window.location.search;
level = level.replace('?', '');

if(level === 'Easy'){
    createTimeGnat = 2000;
}else if(level === 'Average'){
    createTimeGnat = 1200;
}else if(level === 'Difficult'){
    createTimeGnat = 750;
}

function adjustsSizeSetGame(){
    height = window.innerHeight;
    width = window.innerWidth;
}

adjustsSizeSetGame();

var chronometer = setInterval(function(){
    time -= 1;
    if(time < 0){
        clearInterval(chronometer);
        clearInterval(createGnat);
        window.location.href='victory.html';
    }else{
        document.getElementById('chronometer').innerHTML = time;
    }
    }, 1000);

function randomPosition(){
    if(document.getElementById('gnat')){
        document.getElementById('gnat').remove();

        if(lives >= 3){
            window.location.href='game_over.html';
        }else{
            document.getElementById('l' + lives).src = "images/empty_heart.png";
            lives++;
        }
    }
    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    var gnat = document.createElement('img');
    gnat.src = 'images/gnat.png';
    gnat.className = randomSize() + ' ' + randomSide();
    gnat.style.left = positionX + 'px';
    gnat.style.top = positionY + 'px';
    gnat.style.position = 'absolute';
    gnat.id = 'gnat';
    gnat.onclick = function(){
        this.remove();
    }
    document.body.appendChild(gnat);
}

function randomSize(){
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'gnat1';
        case 1:
            return 'gnat2';
        case 2:
            return 'gnat3';
    }
}

function randomSide(){
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'sideA';
        case 1:
            return 'sideB';
    }
}

function index(){
    window.location.href='index.html';
}

function startGame(){
    var level = document.getElementById('level').value;
    
    if(level === ''){
        alert('Selecione um Nivel do Jogo');
    }else if(level === 'Easy'){
        window.location.href = 'app.html?' + level;
    }else if(level === 'Average'){
        window.location.href = 'app.html?' + level;
    }else if(level === 'Difficult'){
        window.location.href = 'app.html?' + level;
    }
}
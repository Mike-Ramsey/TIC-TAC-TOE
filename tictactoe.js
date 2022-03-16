currentPlayer = '';
turn = 0;
gameActive = 0;
redAlert = ($('#redAlert'));
greenAlert = ($('#greenAlert'));

function chooseFirst() {
    if (Math.floor(Math.random() * 2) == 0) {
        currentPlayer = 'redX';
    } else {
        currentPlayer = 'greenO';
    }
};

function takeTurn() {
    if (currentPlayer == 'redX' && turn <= 9) {
        currentPlayer = 'greenO';
        turn ++;
        redAlert.hide();
        document.getElementById('greenAlertText').innerHTML = ($(greenO).val()) + ', click on a tile to select it';
        greenAlert.show();
        checkScore();
    } else if (currentPlayer == 'greenO' && turn <= 9) {
        currentPlayer = 'redX';
        turn ++;
        greenAlert.hide();
        document.getElementById('redAlertText').innerHTML = ($(redX).val()) + ', click on a tile to select it';
        redAlert.show();
        checkScore();
    } else if (gameActive == 1) {
        checkScore();
    };
};

function startGame() {
    gameActive = 1;
    changeButton();
    chooseFirst();
    takeTurn();
    $("img").click(function(){
        if (gameActive == 1 && currentPlayer == 'redX' && $(this).attr('src') == 'grey.png') {
            $(this).attr('src', 'redX.png');
            takeTurn();
        } else if (gameActive == 1 && currentPlayer == 'greenO' && $(this).attr('src') == 'grey.png') {
            $(this).attr('src', 'greenO.png');
            takeTurn();
        }
    });
};

function changeButton() {
    let button = $('#startGame');
    button.attr('class', 'btn btn-danger');
    button.attr('onclick', 'newGame()');
    document.querySelector('#startGame').innerHTML='RESET';
};

function newGame() {
    location.reload();
};

function checkScore() {
    if ($(a1).attr('src') == 'redX.png' && $(a2).attr('src') == 'redX.png' && $(a3).attr('src') == 'redX.png') {
        redWin();
    } else if ($(b1).attr('src') == 'redX.png' && $(b2).attr('src') == 'redX.png' && $(b3).attr('src') == 'redX.png') {
        redWin();
    } else if ($(c1).attr('src') == 'redX.png' && $(c2).attr('src') == 'redX.png' && $(c3).attr('src') == 'redX.png') {
        redWin();
    } else if ($(a1).attr('src') == 'redX.png' && $(b1).attr('src') == 'redX.png' && $(c1).attr('src') == 'redX.png') {
        redWin();
    } else if ($(a2).attr('src') == 'redX.png' && $(b2).attr('src') == 'redX.png' && $(c2).attr('src') == 'redX.png') {
        redWin();
    } else if ($(a3).attr('src') == 'redX.png' && $(b3).attr('src') == 'redX.png' && $(c3).attr('src') == 'redX.png') {
        redWin();
    } else if ($(a1).attr('src') == 'redX.png' && $(b2).attr('src') == 'redX.png' && $(c3).attr('src') == 'redX.png') {
        redWin();
    } else if ($(a3).attr('src') == 'redX.png' && $(b2).attr('src') == 'redX.png' && $(c1).attr('src') == 'redX.png') {
        redWin();
    } else if ($(a1).attr('src') == 'greenO.png' && $(a2).attr('src') == 'greenO.png' && $(a3).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(b1).attr('src') == 'greenO.png' && $(b2).attr('src') == 'greenO.png' && $(b3).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(c1).attr('src') == 'greenO.png' && $(c2).attr('src') == 'greenO.png' && $(c3).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(a1).attr('src') == 'greenO.png' && $(b1).attr('src') == 'greenO.png' && $(c1).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(a2).attr('src') == 'greenO.png' && $(b2).attr('src') == 'greenO.png' && $(c2).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(a3).attr('src') == 'greenO.png' && $(b3).attr('src') == 'greenO.png' && $(c3).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(a1).attr('src') == 'greenO.png' && $(b2).attr('src') == 'greenO.png' && $(c3).attr('src') == 'greenO.png') {
        greenWin();
    } else if ($(a3).attr('src') == 'greenO.png' && $(b2).attr('src') == 'greenO.png' && $(c1).attr('src') == 'greenO.png') {
        greenWin();
    } else if (turn > 9) {
        draw();
    }
};

function redWin() {
    greenAlert.hide();
    document.getElementById('redAlertText').innerHTML = ($(redX).val()) + ' is the winner!!';
    redAlert.show();
    gameActive = 0;
}

function greenWin() {
    redAlert.hide();
    document.getElementById('greenAlertText').innerHTML = ($(greenO).val()) + ' is the winner!!';
    greenAlert.show();
    gameActive = 0;
}

function draw() {
    let alert = ($('#draw'));
    redAlert.hide();
    greenAlert.hide();
    document.getElementById('drawText').innerHTML = 'GAME IS A DRAW, TIC-TAC-TOE IS THE WORST!';
    alert.show();
    gameActive = 0;
}
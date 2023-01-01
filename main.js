var placarx = document.getElementById('x')
var placaro = document.getElementById('o')
var vezdos = document.getElementById('vezres')
var vezdo = document.getElementById('vezres')
var xo1 = document.getElementById('xo1')
var xo2 = document.getElementById('xo2')
var xo3 = document.getElementById('xo3')
var xo4 = document.getElementById('xo4')
var xo5 = document.getElementById('xo5')
var xo6 = document.getElementById('xo6')
var xo7 = document.getElementById('xo7')
var xo8 = document.getElementById('xo8')
var xo9 = document.getElementById('xo9')
var qnt = 0 
var player = 'x'
var x = []
var o = []
var xw = 0
var ow = 0 
var qntdraw = 0
var qntwc = 0
var n

function desabilitarFunção(id){
    document.getElementById(id).setAttribute('onclick', 'desabilitado()');
}
  
function habilitarFunção(id, n){
    document.getElementById(id).setAttribute('onclick', `playxo(${n})`);
}

function Winningcombinations(first, last)
{
    var result = first.filter(function(item){ return last.indexOf(item) > -1});   
    return result.length;  
} 

function resetgame() {
    xo1.innerHTML = ''
    xo2.innerHTML = ''
    xo3.innerHTML = ''
    xo4.innerHTML = ''
    xo5.innerHTML = ''
    xo6.innerHTML = ''
    xo7.innerHTML = ''
    xo8.innerHTML = ''
    xo9.innerHTML = ''
    placaro.innerHTML = `<b>${ow}</b>`
    placarx.innerHTML = `<b>${xw}</b>`
    qntwc = 0
    x = []
    o = []
    habilitarFunção('xo1', 1)
    habilitarFunção('xo2', 2)
    habilitarFunção('xo3', 3)
    habilitarFunção('xo4', 4)
    habilitarFunção('xo5', 5)
    habilitarFunção('xo6', 6)
    habilitarFunção('xo7', 7)
    habilitarFunção('xo8', 8)
    habilitarFunção('xo9', 9)
}

function endgame() {
    qntwc++
    if (((Winningcombinations([1,2,3],x)) === 3) || ((Winningcombinations([4,5,6],x)) === 3) ||  ((Winningcombinations([7,8,9],x)) === 3) || ((Winningcombinations([1,4,7],x)) === 3) || ((Winningcombinations([2,5,8],x)) === 3) || ((Winningcombinations([3,6,9],x)) === 3) || ((Winningcombinations([1,5,9],x)) === 3) ||((Winningcombinations([3,5,7],x)) === 3)) {
        xw++
        vezdo.innerHTML = '<b>|Player X|</b>'
        vezdo.style.color = 'blue'
        qnt = 0
        window.alert(`O vencedor foi o Player X, o Player X iniciará o proximo jogo`)
        resetgame()
    }
    else if (((Winningcombinations([1,2,3],o)) === 3) || ((Winningcombinations([4,5,6],o)) === 3) ||  ((Winningcombinations([7,8,9],o)) === 3) || ((Winningcombinations([1,4,7],o)) === 3) || ((Winningcombinations([2,5,8],o)) === 3) || ((Winningcombinations([3,6,9],o)) === 3) || ((Winningcombinations([1,5,9],o)) === 3) ||((Winningcombinations([3,5,7],o)) === 3)) {
        ow++
        vezdo.innerHTML = '<b>|Player O|</b>'
        vezdo.style.color = 'red'
        qnt = 1
        window.alert(`O vencedor foi o Player O, o Player O iniciará o proximo jogo`)
        resetgame()
    }
    if (qntwc === 9) {
        if (qntdraw%2 === 0) {
            vezdo.innerHTML = '<b>|Player X|</b>'
            vezdo.style.color = 'blue'
            qnt = 0
            window.alert(`Deu velha, o Player X iniciará o proximo jogo`)

        } else {
            vezdo.innerHTML = '<b>|Player O|</b>'
            vezdo.style.color = 'red'
            qnt = 1
            window.alert(`Deu velha, o Player O iniciará o proximo jogo`)
        }
        qntdraw++
        resetgame()
    }
}

function playxo(X) {
    if (qnt%2 == 0 && qnt <= 9 && x.indexOf(X) == -1 && o.indexOf(X) == -1)  {
        vezdo.innerHTML = '<b>|Player O|</b>'
        vezdo.style.color = 'red'
        player = 'x'
    }
    else if (qnt%2 != 0 && qnt <= 9 && x.indexOf(X) == -1 && o.indexOf(X) == -1) {
        vezdo.innerHTML = '<b>|Player X|</b>'
        vezdo.style.color = 'blue'
        player = 'o'
    }
    switch (X) {
        case 1:
            if ((x.indexOf(1)) == -1 && (o.indexOf(1) == -1)) {
                if (player === 'x') {
                    xo1.innerHTML = '<b>X</b>'
                    xo1.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo1')
                } else {
                    xo1.innerHTML = '<b>O</b>'
                    xo1.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo1')
                }
            }
            break;
        case 2:
            if ((x.indexOf(2)) == -1 && (o.indexOf(2) == -1)) {
                if (player === 'x') {
                    xo2.innerHTML = '<b>X</b>'
                    xo2.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo2')
                } else {
                    xo2.innerHTML = '<b>O</b>'
                    xo2.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo2')
                }
            }
            break;        
        case 3:
            if ((x.indexOf(3)) == -1 && (o.indexOf(3) == -1)) {
                if (player === 'x') {
                    xo3.innerHTML = '<b>X</b>'
                    xo3.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo3')
                } else {
                    xo3.innerHTML = '<b>O</b>'
                    xo3.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo3')
                }
            }
            break;    
        case 4:
            if ((x.indexOf(4)) == -1 && (o.indexOf(4) == -1)) {
                if (player === 'x') {
                    xo4.innerHTML = '<b>X</b>'
                    xo4.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo4')
                } else {
                    xo4.innerHTML = '<b>O</b>'
                    xo4.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo4')
                }
            }

            break;
        case 5:
            if ((x.indexOf(5)) == -1 && (o.indexOf(5) == -1)){
                if (player === 'x') {
                    xo5.innerHTML = '<b>X</b>'
                    xo5.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo5')
                } else {
                    xo5.innerHTML = '<b>O</b>'
                    xo5.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo5')
                }
            }
            break;
        case 6:
            if ((x.indexOf(6)) == -1 && (o.indexOf(6) == -1)) {
                if (player === 'x') {
                    xo6.innerHTML = '<b>X</b>'
                    xo6.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo6')
                } else {
                    xo6.innerHTML = '<b>O</b>'
                    xo6.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo6')
                }
            }
            break;
        case 7:
            if ((x.indexOf(7)) == -1 && (o.indexOf(7) == -1)) {
                if (player === 'x') {
                    xo7.innerHTML = '<b>X</b>'
                    xo7.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo7')
                } else {
                    xo7.innerHTML = '<b>O</b>'
                    xo7.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo7')
                }
            }
            break;
        case 8:
            if ((x.indexOf(8)) == -1 && (o.indexOf(8) == -1)) {
                if (player === 'x') {
                    xo8.innerHTML = '<b>X</b>'
                    xo8.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo8')
                } else {
                    xo8.innerHTML = '<b>O</b>'
                    xo8.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo8')
                }
            }
            break;
        case 9:
            if ((x.indexOf(9)) == -1 && (o.indexOf(9) == -1)) {
                if (player === 'x') {
                    xo9.innerHTML = '<b>X</b>'
                    xo9.style.color = 'blue'
                    x.push(X)
                    desabilitarFunção('xo9')
                } else {
                    xo9.innerHTML = '<b>O</b>'
                    xo9.style.color = 'red'
                    o.push(X)
                    desabilitarFunção('xo9')
  
                }
            }
            break;
        default:
            window.alert("[ERRO]")
            break;
    }
    qnt++
    endgame()
}
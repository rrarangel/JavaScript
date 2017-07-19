var idTempo = null;

function iniciaGame(){
    
    //Pegando o parametro de nivel escolhido na tela inicial...
    var url = window.location.search;
    var nivelGame = url.replace("?", "");
    //alert(nivelGame);
    
    var tempoGame = 0;
    
    switch(nivelGame){
        case '1':
            tempoGame = 120;
            break;
        case '2':
            tempoGame = 60;
            break;
        case '3':
            tempoGame = 30;
            break;
        default:
            return false;
           }
    
    //alert(tempoGame);
    document.getElementById('cron').innerHTML = tempoGame;
    
    var qtdBaloes = 80;
    document.getElementById('baloesInteiros').innerHTML = qtdBaloes;
    document.getElementById('baloesEstourados').innerHTML = 0;
    
    criaBaloes(qtdBaloes);
    
    //Chamada da função do cronometro;
    contagemTempo(tempoGame +1);
    
}

function contagemTempo(tempo){
    
    tempo = tempo -1;
    
    if (tempo == -1){
        clearTimeout(idTempo); //para a função setTimeOut;
        gameOver();
        return false;
    }
    
    idTempo = setTimeout("contagemTempo("+tempo+")",1000);
    document.getElementById('cron').innerHTML = tempo;
    
}

function gameOver(){
    alert('Você não conseguiu estourar todos os balões a tempo!');
    stopGame();
}


function criaBaloes(qtd){
    
    for(var i = 1; i <= qtd; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.onclick = function(){ estouraBalao(this); };
        balao.id = 'b' + i;
        
        //Adiciona elementos na tag referenciada pelo ID;
        document.getElementById('cenario').appendChild(balao);
        
    }
    
}

function estouraBalao(b){
    
     var idBalao = b.id;
     document.getElementById(idBalao).src = "imagens/balao_azul_pequeno_estourado.png";
     
    //Limpa evento do onclick do balao já estourado para evitar pontuação extra;
     document.getElementById(idBalao).setAttribute("onclick","");
     
    pontuacao(-1);
    
    //alert('balao clicado!');
}

function pontuacao(p){
    var qtdInteiros = parseInt(document.getElementById('baloesInteiros').innerHTML);
    var qtdEstourados = parseInt(document.getElementById('baloesEstourados').innerHTML);
    
    qtdInteiros = qtdInteiros + p;
    qtdEstourados = qtdEstourados - p;
    
    document.getElementById('baloesInteiros').innerHTML = qtdInteiros;
    document.getElementById('baloesEstourados').innerHTML = qtdEstourados;
    
    verificaGame(qtdInteiros);
}

function verificaGame(qtdInteiros){
    if(qtdInteiros == 0){
        alert('Parabéns, você conseguiu estourar todos os balões!');
        stopGame();
    }
}

function stopGame(){
    clearTimeout(idTempo);
    
    ran
}
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
    
    var qtdBaloes = 10;
    
    
    criaBaloes(qtdBaloes);
    
}

function criaBaloes(qtd){
    
    for(var i = 1; i < qtd; i++){
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        
        //Adiciona elementos na tag referenciada pelo ID;
        document.getElementById('cenario').appendChild(balao);
        
    }
    
}
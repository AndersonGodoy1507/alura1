let listaDeNumerosSortedados = [];
let numeroLimmite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
       let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa} !`;
       exibirTextoNaTela('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
      if  (chute > numeroSecreto){
        exibirTextoNaTela('p','O numero secreto é menor');
       
    }else{
exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    tentativas = tentativas +1;
    limparCampo();
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimmite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortedados.length;
    if(quantidadeDeElementosNaLista == numeroLimmite){
        listaDeNumerosSortedados = [];
    }  
    if(listaDeNumerosSortedados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();

    }else{
        listaDeNumerosSortedados.push(numeroEscolhido);
        console.log(listaDeNumerosSortedados)
        return numeroEscolhido;
       
        ;
    }
}
function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}
function funcaoReiniciar(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
exibirMensagemInicial();















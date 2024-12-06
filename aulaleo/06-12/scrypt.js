//puxar o id 
const botao = document.getElementById("botao")
const texto = document.getElementById("texto")

const botao2 = document.getElementById("bnt")
const paragrafo = document.getElementById("meuparagrafo")

const Tecla = document.getElementById("teclap")


function alteratexto() {

    if (paragrafo.innerText === 'texto inicial') {
        paragrafo.innerText = 'texto'
    } else {
        paragrafo.innerText = 'texto inicial'
    }


    //texto.innerText = "um texto muito bom sendo alterado"
}

function alteratexto2() {
    paragrafo.innerText = "voce passou o mouse por cima"
}

function tiraMouse() {
    paragrafo.innerText = "você tirou o mouse"
}

function clickDuasVezes() {
    alert("voce clicou duas vezes")
}

function precionartecla(event){
    paragrafo.innerText = ('Tecla pressionada:' + event.key);


}



/* function anonima
document.addEventListener('keydown', function(event) {
    console.log('Tecla pressionada: ' + event.key);
});      */



botao2.addEventListener("mouseover", alteratexto2)
botao2.addEventListener("mouseout", tiraMouse)
botao2.addEventListener("dblclick", clickDuasVezes)
//botao.addEventListener("click", alteratexto)

document.addEventListener('keydown' , precionartecla)


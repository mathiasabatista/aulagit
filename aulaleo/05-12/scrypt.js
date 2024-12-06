const botao = document.getElementById("btn1")
const botaocor = document.getElementById("btn2")


function imprimirFrase(){
     alert(" meus parabens")
}


//criar funcao para oq vai acontecer
function trocarcor(){
botaocor.style.backgroundColor === 'red'

}




//chama a funcao e imprime o parametro adicionado no botao
botao.addEventListener("click", imprimirFrase);
botaocor.addEventListener("id", trocarcor);
const Texto = document.querySelector(".texto1");
const Mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
//A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncriptar () {
    const textoEncriptado = encriptar (Texto.value);
    Mensagem.value = textoEncriptado;
    Texto.value = "" ;
}

function encriptar(stringEncriptada){


    let matrizCodigo = [["e" ,"enter"] , ["i", "imes"] , ["a" , "ai"] , ["o", "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.tolowerCase();


    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

        
    }

    return stringEncriptada;
}










  
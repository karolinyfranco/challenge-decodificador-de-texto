var inputTexto = document.querySelector(".input-texto");
var resultado = document.querySelector(".resultado");
var btnCodificar = document.querySelector(".btn-codificar");
var btnDecodificar = document.querySelector(".btn-decodificar");
var btnCopiar = document.querySelector(".btn-copiar");
var mensagensErro = document.querySelector(".mensagens-erro");

function codificar(stringCodificada) {
    var matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCodificada = stringCodificada.value;
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCodificada.includes(matrizCodigo[i][0])) {
            stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCodificada;
}

function decodificar(stringDecodificada) {

    var matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDecodificada = stringDecodificada.value;
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDecodificada.includes(matrizCodigo[i][1])) {
            stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDecodificada;
}

function escreveCodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");
    
    resultado.textContent = codificar(inputTexto);
}

function escreveDecodificado() {
    var btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.classList.remove("invisivel");

    resultado.textContent = decodificar(inputTexto);
}

btnCodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }

    escreveCodificado();
    mensagensErro.innerHTML = "";
}

btnDecodificar.onclick = function() {
    var erros = validaTexto(inputTexto);

    if(erros.length > 0) {
        mostraErros(erros);
        resultado.textContent = "";
        return;
    }
    
    escreveDecodificado();
    mensagensErro.innerHTML = "";
}

btnCopiar.onclick = function() {
    resultado.select();
    document.execCommand("copy");
    inputTexto.value = "";
    inputTexto.focus();
    resultado.textContent = "";
    btnCopiar.classList.add("invisivel");
}

function validaTexto(stringCodificada) {
    var erros = [];

    if(stringCodificada.value == 0) erros.push(" Digite algum texto!");

    if(/[A-Z-À-Ú-à-ú]/.test(stringCodificada.value)) erros.push(" Apenas letras minúsculas e sem acento!");

    return erros;
}

function mostraErros(erros) {
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
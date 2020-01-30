//console.log("Fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";

// buscando valor dentro de um <td> do html

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var tdImc = paciente.querySelector(".info-imc");

//criando variavel para validar condicional
var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdPeso.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdAltura.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
        
    var form = document.querySelector("#form-adiciona");

    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);

    //cria o form no html
    var pacienteTr = montaTr(paciente);

    var erros = validaPacientes(paciente);
    console.log(erros);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();

    //limpar as mensagens de erro a cada vez que for adicionado um paciente
    var mensagensErro = document.querySelector("#mensagem-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = ""; // limpa as li de mensagens de erro
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

/** funcao que retorna um objeto do form preenchido */
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

 /*criando os elementos de uma linha do html a partir das tags*/
function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); /* adiciona ao elemento tr criado no form a class paciente*/

    var nomeTd = montaTd(paciente.nome, "info-nome");
 
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado; /*appendChild: Ela adiciona como filho o elemento passado a ela como parametro*/
    td.classList.add(classe);

    return td;
}

function validaPacientes(paciente){

    var erros = []; //cria array de erros

    if(paciente.nome.length == 0){
        erros.push("Nome não pode ficar em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");
    }
    //se for um if simples js entende dessa maneira tbm
   if(!validaAltura(paciente.altura)){
       erros.push("Altura é inválida");
   } 

   if(paciente.gordura.length == 0){
       erros.push("Gordura não pode ficar em branco");
   }
   
   if(paciente.peso.length == 0){
        erros.push("Peso não pode ficar em branco");
    }
    
    if(paciente.altura.length == 0){
        erros.push("Altura não pode ficar em branco");
    }   
    return erros;
}


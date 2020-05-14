var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode; // remove paciente da TR
    //  paiDoAlvo.remove();
    //   event.target.parentNode.remove(); 
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);                                //500 ms    

});



// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//         console.log('fui clicado');
//         this.remove();
//     });
// });
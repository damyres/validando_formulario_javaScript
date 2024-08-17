const camposDoFormulario = document.querySelectorAll("[required")
//console.log(camposDoFormulario)

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verficaCampo(campo))
   
})

function verficaCampo(campo){
    

}
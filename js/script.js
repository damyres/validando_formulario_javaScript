import ehUmCpf from "./validarCpf.js"
import ehMaiorDeIdade from "./validaIdade.js"

const camposDoFormulario = document.querySelectorAll("[required")
//console.log(camposDoFormulario)

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verficaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())

})

function verficaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo)
    }
    if(campo.name == "aniversario" && campo.value != ehMaiorDeIdade(campo)){

    }
    console.log(campo.validity)
}
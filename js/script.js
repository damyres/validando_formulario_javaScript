import ehUmCpf from "./validarCpf.js"
const camposDoFormulario = document.querySelectorAll("[required")
//console.log(camposDoFormulario)

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verficaCampo(campo))
})

function verficaCampo(campo) {
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCpf(campo)
    }
}
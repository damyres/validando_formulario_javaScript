export default  function ehUmCpf(campo){
    const cpf = campo.value.replace(/\.|-/g, "")    
    console.log(validaNumerosRepetidos(cpf))
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000000',
        '11111111111111',
        '22222222222222',
        '33333333333333',
        '44444444444444',
        '55555555555555',
        '66666666666666',
        '77777777777777',
        '88888888888888',
        '99999999999999'
    ]
    return numerosRepetidos.includes(cpf)
}
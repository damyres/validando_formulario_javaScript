const botaoIniciarCamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoTirarFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const menssagem = document.querySelector("[data-mensagem]")
const botaoEnviarFoto = document.querySelector("[data-enviar]")

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function () {
    const inciarVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })

    botaoIniciarCamera.style.display = "none";

    campoCamera.style.display = "block";

    video.srcObject = inciarVideo;
})

botaoTirarFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    imagemURL = canvas.toDataURL("image/png");

    campoCamera.style.display = "none";

    menssagem.style.display = "block";
    //campo.style.border = "2px solid red"
})

botaoEnviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro")
    const converterRetorno = JSON.parse(receberDadosExistentes)

    converterRetorno.imagem = imagemURL
    localStorage.setItem('cadastro', JSON.stringify(converterRetorno));
    window.location.href = "../pages/abrir-conta-form-3.html";

})
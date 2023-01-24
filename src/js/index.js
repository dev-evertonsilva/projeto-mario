const botaoTrailer = document.querySelector(".button-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkVideo = video.scr;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
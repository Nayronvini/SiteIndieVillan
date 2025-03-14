function toggleMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("open");
}

document.querySelector(".btn-download").addEventListener("click", function() {
    alert("Seu download começou! Obrigado por testar o jogo!");
});
let noButton = document.getElementById('no');
let yesButton = document.getElementById('yes');
let message = document.getElementById('message');
let noClicks = 0;

yesButton.addEventListener('click', function() {
    message.textContent = 'Parabéns Mariana!';
});

noButton.addEventListener('click', function() {
    noClicks++;
    if (noClicks < 3) {
        moveButton();
    } else {
        noButton.textContent = 'APERTA O SIM LOGO'; // Muda o texto do botão "não"
        noButton.style.position = 'static'; // Para que o botão não mude de lugar
    }
});

function moveButton() {
    const randomX = Math.floor(Math.random() * 80) + 10; // posição aleatória
    const randomY = Math.floor(Math.random() * 80) + 10; // posição aleatória
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}vw`;
    noButton.style.top = `${randomY}vh`;
}

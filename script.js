function moveNoButton() {
    const noBtn = document.getElementById('noBtn');

    // Calculate random positions within the visible frame
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function showHappyGif() {
    const proposalBox = document.querySelector('.proposal-box');
    const cuteGif = document.getElementById('cuteGif');

    proposalBox.style.display = 'none';
    cuteGif.style.display = 'block';
    cuteGif.src = 'dance-funny.gif'; // Change to another cute dancing gif
}

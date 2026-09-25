// JavaScript Document
//index

function tikla() {
    alert("LUVIA Resturantımıza Hoş Geldiniz");
}

const video = document.getElementById('myVideo');
const playBtn = document.getElementById('playBtn');
const muteBtn = document.getElementById('muteBtn');

// Oynat/Durdur Butonu
playBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playBtn.textContent = 'Durdur';
    } else {
        video.pause();
        playBtn.textContent = 'Oynat';
    }
});

// Ses Aç/Kapat Butonu
muteBtn.addEventListener('click', function() {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'Sesi Aç' : 'Sesi Kapat';
});
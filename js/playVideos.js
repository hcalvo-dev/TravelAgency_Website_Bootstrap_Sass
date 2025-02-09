document.addEventListener('DOMContentLoaded', () => {
    let videos = document.querySelectorAll('.custom-video');
    let playButtons = document.querySelectorAll('.custom-play-button');

    videos.forEach((video, index) => {
        let playButton = playButtons[index];

        // Evento cuando el video comienza a reproducirse
        video.addEventListener('play', function () {
            playButtons.forEach(btn => btn.style.display = "flex"); // Mostrar todos los botones
            playButton.style.display = "none"; // Ocultar solo el botón del video actual

            // Pausar cualquier otro video que esté en reproducción
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.pause();
                }
            });
        });

        // Evento cuando el video se pausa
        video.addEventListener('pause', function () {
            playButton.style.display = "flex"; // Mostrar botón de play
        });

        // Si el usuario hace clic en el botón, iniciamos el video
        playButton.addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    });
});
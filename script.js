    // 1. Selecteren van element via class
    const playradio = document.querySelector('.play-radio');
    const audio = document.querySelector('audio');

    // 2. Event
     playradio.addEventListener('click', () => {
            audio.play();
        });

    playradio.onplay = () => {
        console.log();
    };



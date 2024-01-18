    // audio
    // 1. Selecteren van element via class
    const playradio = document.querySelector('.play-radio');
    const audio = document.querySelector('audio');

    // 2. Event
    playradio.addEventListener('click', () => {
            audio.play();
        });


    playradio.addEventListener('dblclick', () => {
            audio.pause();
        });  

    playradio.onplay = () => {
        console.log();
    };

    // text

    // 1. Selecteren van element via class
    const changeText = document.querySelector('.play-radio-text');

    // 2. Event
    playradio.addEventListener("click", function() {
        changeText.textContent = "Pauzeren";
      });

    changeText.addEventListener('dblclick', () => {
        playradio.textContent = "Luister live";
      });

    // svg

    // 1. Selecteren van element via class
    const playSvg = document.querySelector('.play-radio-svg');
    const pauseSvg = document.querySelector('.pause-radio-svg');

    // 2. Event
    playradio.addEventListener('click', function (){
        playSvg.classList.add('hide')
        pauseSvg.classList.remove('show')
      })

    playradio.addEventListener('dblclick', function (){
        playSvg.classList.remove('hide')
        pauseSvg.classList.add('show')
    })



        


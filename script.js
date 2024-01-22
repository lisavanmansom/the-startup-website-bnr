    // audio
    // 1. Selecteren van element via class
    const playradio = document.querySelector('.play-radio');
    const audio = document.querySelector('audio');
    var count = 0

    // 2. Event
    function playPause(){
      if(count == 0){
        count = 1;
        audio.play();
      }else{
        count = 0;
        audio.pause();
      }
    }

    // text
    // 1. Selecteren van element via class
    const changeTextplay = document.querySelector('.play-radio-text');
    const changeTextpause = document.querySelector('.pause-radio-text');
    const playSvg = document.querySelector('.play-radio-svg');
    const pauseSvg = document.querySelector('.pause-radio-svg');

    // 2. Event
    playradio.addEventListener('click', function (){
      changeTextplay.classList.toggle('hide')
      playSvg.classList.toggle('hide')
    })


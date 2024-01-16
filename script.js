// const playradio = document.getElementsByClassName("play-radio");
// function playRadio() {
//     let audio = new Audio ("https://27823.live.streamtheworld.com/BNR_NIEUWSRADIO.mp3?dist=bnrweb");
//     audio.play()
// }

// playradio.addEventListener("click", () => {
//     playRadio("test")
// });





    // 1. Selecteren van element via class
    const playradio = document.getElementsByClassName('play-radio')
    const audio = new Audio ("https://27823.live.streamtheworld.com/BNR_NIEUWSRADIO.mp3?dist=bnrweb");

    // 2. Event

    playradio.addEventListener('click', () => {
        audio.play("test1");
    });

    playradio.onplay = () => {
        console.log("test test");
    };


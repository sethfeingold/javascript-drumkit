// get datakey number of any key pressed

window.addEventListener('keydown', (e) => {
    const datakey = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.play();
})
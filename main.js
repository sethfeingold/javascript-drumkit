// get datakey number of any key pressed

window.addEventListener('keydown', (e) => {
    const datakey = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.textContent = 'ME';
})
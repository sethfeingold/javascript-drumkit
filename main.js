window.addEventListener('keydown', (e) => {
    // get audio file of key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // onscreen key element of key pressed
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if audio file isn't associated with key press, return
    if (!audio) return;
    // reset audio on keypress so multiple sounds can be activated at once
    audio.currentTime = 0;
    // play audio file associated with key pressed
    audio.play();
    //add 'playing' styles to key pressed -- makes on screen key 'glow' and increase in size
    key.classList.add('playing');
})

// on screen key elements
const keys = document.querySelectorAll('.key');

// function to remove the 'playing' style on pressed keys

function removeTransition(e) {
    // since multiple transitions are happening, don't pay attention if not a transform
    if (e.propertyName !== 'transform') return;
    //remove playing class at end of transform
    this.classList.remove('playing');
}

// loop through each on screen key element to add a listener which removes 'playing' styling upon transitionend
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
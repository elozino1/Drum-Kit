
const listen = (e) => {
	const key = document.querySelector(`.key-container[data-key="${e.keyCode}"]`);
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (!key) return;
	key.classList.add('hit');
	audio.play();
	audio.currentTime = 0;
}

const keys = document.querySelectorAll('.key-container');
keys.forEach(key => key.addEventListener('transitionend', function(e) {
	if (e.propertyName !== 'transform') return;
	key.classList.remove('hit');
}));



window.addEventListener('keydown', listen);
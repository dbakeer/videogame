const BLIP_SPEED = 50;
let discourse = null;

window.onload = () => {
  // const frame = document.getElementById('frame');
  // frame.style.display = 'none';
  start();
}

function start() {
  clearTimeout(discourse);
  // const frame = document.getElementById('frame');
  // frame.style.display = 'flex';
  const dialogue = document.getElementsByTagName('p')[0];
  dialogue.innerHTML = '';

  blip(document.getElementById('text').value);
}

function blip(text) {
  if(!!!text) { return; }
  const char = text[0];
  const sound = document.getElementById('blip');
  sound.volume = 0.1;
  const dialogue = document.getElementsByTagName('p')[0];
  let speed = BLIP_SPEED;
  switch(char) {
    case '|':
      speed *= 10;
      break;
    case '#':
      dialogue.innerHTML = '';
      break;
    case '\\':
      dialogue.innerHTML += '<br>';
      break;
    default:
      sound.pause();
      sound.currentTime = 0;
      sound.play();
      dialogue.innerHTML += char;
      dialogue.scrollTop = dialogue.scrollHeight;
  }
  discourse = setTimeout(blip.bind(null, text.substring(1)), speed);
}

const text = document.querySelector('.neon-effect');
const letters = text.textContent.split('');
text.textContent = '';

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  const span = document.createElement('span');
  span.textContent = letter;
  text.appendChild(span);
  if (i === letters.length - 1) {
    span.classList.add('neon-letter');
  }
}

setInterval(() => {
  const neonLetter = document.querySelector('.neon-letter');
  neonLetter.classList.toggle('blink');
}, 500);
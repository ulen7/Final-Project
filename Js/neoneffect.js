const text = document.querySelector(".neon-effect");
const flicker = () => {
  const lastLetter = text.textContent.length - 1;
  const glow = `
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 30px #fff,
    0 0 40px #ff00de,
    0 0 70px #ff00de,
    0 0 80px #ff00de,
    0 0 100px #ff00de,
    0 0 150px #ff00de`;
  const blink = `
    0 0 10px #fff,
    0 0 20px #fff,
    0 0 30px #fff,
    0 0 40px #ff00de,
    0 0 70px #ff00de,
    0 0 80px #ff00de,
    0 0 100px #ff00de,
    0 0 150px #ff00de,
    0 0 200px #ff00de`;
  text.style.textShadow = glow;
  setTimeout(() => {
    text.style.textShadow = blink;
    setTimeout(() => {
      text.style.textShadow = glow;
    }, 250);
  }, 500);
};
setInterval(flicker, 2000);
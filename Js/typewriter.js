// Get all the elements with the class "typewriter"
const typewriterEls = document.querySelectorAll('.typewriter');

// Loop through each element
typewriterEls.forEach(el => {
  // Get the text content of the element
  const text = el.textContent;

  // Replace the element's text content with a span containing each character
  el.innerHTML = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const span = document.createElement('span');
    span.textContent = char;
    el.appendChild(span);
  }
});
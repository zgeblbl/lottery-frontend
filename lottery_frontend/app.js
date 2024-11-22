// app.js
const startButton = document.getElementById('start');
const rangeInput = document.getElementById('range');
const randomNumberDisplay = document.getElementById('random-number');

startButton.addEventListener('click', () => {
  const maxNumber = parseInt(rangeInput.value);
  if (isNaN(maxNumber) || maxNumber <= 0) {
    alert('Please enter a valid number greater than 0.');
    return;
  }

  randomNumberDisplay.textContent = '?'; // Reset display
  let count = 0;

  // Generate random numbers quickly for effect
  const interval = setInterval(() => {
    randomNumberDisplay.textContent = Math.floor(Math.random() * maxNumber) + 1;
    count++;

    // Stop after 3 seconds
    if (count >= 150) {
      clearInterval(interval);
      const finalNumber = Math.floor(Math.random() * maxNumber) + 1;
      randomNumberDisplay.textContent = finalNumber; // Show final number
    }
  }, 100); // Update every 100ms
});

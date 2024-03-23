function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    requestAnimationFrame(updateClock); // Update the clock every frame
}

// Start the clock animation
updateClock();

document.querySelector( "#retrobg-sun" ).onclick = () => {
    document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
  };
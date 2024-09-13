
const label = document.createElement('label');

label.innerHTML = 'Timer: 00:00:00';
label.style.position = 'fixed';
label.style.bottom = '50px';
label.style.right = '15px';
label.style.zIndex = '9999';
label.style.backgroundColor = "#3494e6";
label.style.backgroundImage = "linear-gradient(45deg, #3494e6, #ec6ead)";
label.style.color = "white";
label.style.padding = "8px 12px";
label.style.borderRadius = "12px";
label.style.fontFamily = "Arial, sans-serif";
label.style.fontSize = "14px";
label.style.fontWeight = "bold";
label.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
label.style.transition = "all 0.3s ease";

document.body.appendChild(label);

let counter = 0;
function updateTimer() {
    counter++;
    const hours = Math.floor(counter / 3600);
    const minutes = Math.floor((counter % 3600) / 60);
    const seconds = counter % 60;
    label.innerHTML = `Timer: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
    return time.toString().padStart(2, '0');
}

setInterval(updateTimer, 1000);

// Add hover effect
label.addEventListener('mouseover', () => {
    label.style.transform = 'scale(1.05)';
    label.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
});

label.addEventListener('mouseout', () => {
    label.style.transform = 'scale(1)';
    label.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});
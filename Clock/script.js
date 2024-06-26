function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeOfDay = hours >= 12 ? 'PM' : 'AM';
    hours %= 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
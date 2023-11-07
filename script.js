function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleDateString(undefined, options);

    timeElement.textContent = dateTimeString;

    setTimeout(updateClock, 1000); // Update every second
}

updateClock();

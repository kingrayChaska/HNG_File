document.addEventListener("DOMContentLoaded", function () {
    const currentDateElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentTimeElement = document.querySelector('[data-testid="currentUTCTime"]');


    // Set the data values
    currentDateElement.textContent = getCurrentDate();
    updateTime(currentTimeElement);

    // Update current time every second
    setInterval(function () {
        updateTime(currentTimeElement);
    }, 1000);
});

function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long'};
    return currentDate.toLocaleDateString(undefined, options);
}

function updateTime(element) {
    const currentTime = Date.now();
    element.textContent = currentTime;
}

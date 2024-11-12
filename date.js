// script.js

// Function to determine the ordinal suffix
function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Function to get the current date in the desired format
function getCurrentDate() {
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const today = new Date();
    const weekday = daysOfWeek[today.getDay()];
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    const suffix = getOrdinalSuffix(day);

    return `${weekday}, ${month} ${day}<sup>${suffix}</sup> - ${year}`;
}

// Function to set the current date in the footer
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.innerHTML = getCurrentDate();
    }
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', setCurrentDate);

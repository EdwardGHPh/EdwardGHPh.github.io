// assets/js/date.js

// Date formatting functionality
(function() {
    'use strict';

    // Ordinal suffix generator
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    // Date formatter
    function formatCurrentDate() {
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
        return `${daysOfWeek[today.getDay()]}, 
                ${months[today.getMonth()]} 
                ${today.getDate()}<sup>${getOrdinalSuffix(today.getDate())}</sup> - 
                ${today.getFullYear()}`;
    }

    // Date display handler
    function displayCurrentDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            dateElement.innerHTML = formatCurrentDate();
        }
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', displayCurrentDate);
})();
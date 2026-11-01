let year = prompt("Enter Year");

function daysInYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    }
    else return 365;
}

alert(daysInYear(year));
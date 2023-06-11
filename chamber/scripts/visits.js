const visitedDisplay = document.getElementById("visited");

const currentVisit = new Date();
let diffDays;

if (localStorage.getItem('lastVisit') === null) {
    localStorage.setItem('lastVisit', new Date());
    diffDays = "0";
    // console.log("inside if");
} else {

    // console.log("inside else");
    const lastVisit = Date.parse(localStorage.getItem('lastVisit'));
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

    console.log(localStorage.getItem('lastVisit'));
    diffDays = Math.round((currentVisit - lastVisit) / oneDay);
    console.log(diffDays);
    localStorage.clear('lastVisit');
}

// Log the visit day and diff
console.log(currentVisit);
console.log(diffDays);

visitedDisplay.textContent = `${diffDays}`;


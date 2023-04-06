let date = new Date();
let year = date.getFullYear();
document.querySelector(".currentyear").textContent = year;


const lastMod = new Date(document.lastModified);

const formatted = lastMod.toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

document.getElementById("lastupdated").innerHTML = formatted;



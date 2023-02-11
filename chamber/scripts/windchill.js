const temp1 = document.querySelector("#temperature");
const wind1 = document.querySelector("#wind-speed");
let temp = parseInt(temp1.textContent);
let wind = parseInt(wind1.textContent);

if(temp <= 50 && wind > 3){
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
    chill = Math.round(chill);
    document.querySelector("#wind-chill").textContent = chill + "℉";
}
else{
    document.querySelector("#wind-chill").textContent = temp1 + "℉"; // = "N/A";
}

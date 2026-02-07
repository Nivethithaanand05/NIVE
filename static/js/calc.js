function motorCalc(){
let weight = document.getElementById("weight").value;
let thrust = weight * 2;
document.getElementById("result").innerText =
"Required thrust: " + thrust + " g\nRecommended KV: 920-1200";
}

function flightCalc(){
let battery = document.getElementById("battery").value;
let current = document.getElementById("current").value;
let time = (battery/current)*60;
document.getElementById("result").innerText =
"Estimated flight time: "+time.toFixed(1)+" mins";
}

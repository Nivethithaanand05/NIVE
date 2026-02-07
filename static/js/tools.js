function selectMotor(type, kv, thrust){
document.getElementById("motorType").value = type;
document.getElementById("motorKV").value = kv;
document.getElementById("motorThrust").value = thrust;
}

function motorCalc(){
let weight = +document.getElementById("droneWeight").value;
let thrust = weight * 2;

document.getElementById("result").innerHTML =
"Required total thrust: "+thrust+" g<br>"+
"Per motor (quad): "+(thrust/4).toFixed(0)+" g";
}

function propCalc(){
let size = document.getElementById("propSize").value;
let pitch = document.getElementById("propPitch").value;

document.getElementById("result").innerText =
"Selected prop: "+size+" inch, pitch "+pitch;
}

function flightCalc(){
let battery = +document.getElementById("batteryCap").value;
let current = +document.getElementById("currentDraw").value;
let time = (battery/current)*60;

document.getElementById("result").innerText =
"Estimated flight time: "+time.toFixed(1)+" minutes";
}

function weightCalc(){
let frame = +document.getElementById("frameW").value;
let motor = +document.getElementById("motorW").value;
let battery = +document.getElementById("batteryW").value;
let payload = +document.getElementById("payloadW").value;

let total = frame+motor+battery+payload;

document.getElementById("result").innerText =
"Total weight: "+total+" g";
}

function escCheck(){
let motorCurrent = +document.getElementById("motorCurrent").value;
let esc = motorCurrent * 1.5;

document.getElementById("result").innerText =
"Recommended ESC: "+esc.toFixed(0)+" A";
}

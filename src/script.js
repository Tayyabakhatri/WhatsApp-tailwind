// navbar
let time = document.getElementById("time");
let date = new Date()
let analog= date.toLocaleTimeString()
let ana=analog.slice(0,5)
time.innerHTML=ana
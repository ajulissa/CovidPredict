var arr = [];

var boton1_1 = document.querySelector("#rpta1_1");
var boton1_2 = document.querySelector("#rpta1_2");
var boton2_1 = document.querySelector("#rpta2_1");
var boton2_2 = document.querySelector("#rpta2_2");
var boton3_1 = document.querySelector("#rpta3_1");
var boton3_2 = document.querySelector("#rpta3_2");
var boton4_1 = document.querySelector("#rpta4_1");
var boton4_2 = document.querySelector("#rpta4_2");
var boton5_1 = document.querySelector("#rpta5_1");
var boton5_2 = document.querySelector("#rpta5_2");
var boton6_1 = document.querySelector("#rpta6_1");
var boton6_2 = document.querySelector("#rpta6_2");
var boton7_1 = document.querySelector("#rpta7_1");
var boton7_2 = document.querySelector("#rpta7_2");
var boton8_1 = document.querySelector("#rpta8_1");
var boton8_2 = document.querySelector("#rpta8_2");

arr[7] = 0;

boton1_1.addEventListener("click", function(evento) {
    boton1_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[0] = 1;
    console.log("El arr ", arr);
});
boton1_2.addEventListener("click", function(evento) {
    boton1_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[0] = 0;
    console.log("El arr ", arr);
});
boton2_1.addEventListener("click", function(evento) {
    boton2_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[1] = 1;
    console.log("El arr ", arr);
});
boton2_2.addEventListener("click", function(evento) {
    boton2_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[1] = 0;
    console.log("El arr ", arr);
});
boton3_1.addEventListener("click", function(evento) {
    boton3_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[2] = 1;
    console.log("El arr ", arr);
});
boton3_2.addEventListener("click", function(evento) {
    boton3_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[2] = 0;
    console.log("El arr ", arr);
});
boton4_1.addEventListener("click", function(evento) {
    boton4_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[3] = 1;
    console.log("El arr ", arr);
});
boton4_2.addEventListener("click", function(evento) {
    boton4_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[3] = 0;
    console.log("El arr ", arr);
});
boton5_1.addEventListener("click", function(evento) {
    boton5_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[4] = 1;
    console.log("El arr ", arr);
});
boton5_2.addEventListener("click", function(evento) {
    boton5_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[4] = 0;
    console.log("El arr ", arr);
});
boton6_1.addEventListener("click", function(evento) {
    boton6_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[5] = 1;
    console.log("El arr ", arr);
});
boton6_2.addEventListener("click", function(evento) {
    boton6_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[5] = 0;
    console.log("El arr ", arr);
});
boton7_1.addEventListener("click", function(evento) {
    boton7_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[6] = 1;
    console.log("El arr ", arr);
});
boton7_2.addEventListener("click", function(evento) {
    boton7_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[6] = 0;
    console.log("El arr ", arr);
});
boton8_1.addEventListener("click", function(evento) {
    boton8_2.style.background = "transparent";
    this.style.background = "#080B59";
    arr[7] = 2;
    console.log("El arr ", arr);
});
boton8_2.addEventListener("click", function(evento) {
    boton8_1.style.background = "transparent";
    this.style.background = "#080B59";
    arr[7] = 1;
    console.log("El arr ", arr);
});


// var btn1_1 = document.getElementById("rpta1-1");
// var btn1_2 = document.getElementById("rpta1-2")

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll("button").forEach(boton => {
//         boton.onclick = () => {
//             // document.querySelector('#rpta1-1').style.background = '#080B59';

//             // if (btn1_1.style.background != "#fff" && btn1_2.style.background != "#fff") {
//             //     document.querySelector('#rpta1-1').style.background = '#080B59';
//             // }
//             if (document.querySelector('#rpta1-1').style.background != '#080B59') {
//                 document.querySelector('#rpta1-1').style.background = '#080B59';
//                 document.querySelector('#rpta1-2').style.background = '#fff';
//             }
//             if (document.querySelector('#rpta1-2').style.background != '#080B59') {
//                 document.querySelector('#rpta1-2').style.background = '#080B59';
//                 document.querySelector('#rpta1-1').style.background = '#fff';
//             }
//             if (document.querySelector('#rpta1-2').style.background != '#080B59') {
//                 document.querySelector('#rpta1-2').style.background = '#080B59';
//             }


//         }
//     });
// });
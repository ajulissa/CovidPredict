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
var boton_calcular = document.querySelector("#btn_calcular");

arr[7] = 0;

boton1_1.addEventListener("click", function (evento) {
    normalizar(boton1_2);
    modificar(boton1_1);
    arr[0] = 1;
    console.log("El arr ", arr);
});
boton1_2.addEventListener("click", function (evento) {
    normalizar(boton1_1);
    modificar(boton1_2);
    arr[0] = 0;
    console.log("El arr ", arr);
});
boton2_1.addEventListener("click", function (evento) {
    normalizar(boton2_2);
    modificar(boton2_1);
    arr[1] = 1;
    console.log("El arr ", arr);
});
boton2_2.addEventListener("click", function (evento) {
    normalizar(boton2_1);
    modificar(boton2_2);
    arr[1] = 0;
    console.log("El arr ", arr);
});
boton3_1.addEventListener("click", function (evento) {
    normalizar(boton3_2);
    modificar(boton3_1);
    arr[2] = 1;
    console.log("El arr ", arr);
});
boton3_2.addEventListener("click", function (evento) {
    normalizar(boton3_1);
    modificar(boton3_2);
    arr[2] = 0;
    console.log("El arr ", arr);
});
boton4_1.addEventListener("click", function (evento) {
    normalizar(boton4_2);
    modificar(boton4_1);
    arr[3] = 1;
    console.log("El arr ", arr);
});
boton4_2.addEventListener("click", function (evento) {
    normalizar(boton4_1);
    modificar(boton4_2);
    arr[3] = 0;
    console.log("El arr ", arr);
});
boton5_1.addEventListener("click", function (evento) {
    normalizar(boton5_2);
    modificar(boton5_1);
    arr[4] = 1;
    console.log("El arr ", arr);
});
boton5_2.addEventListener("click", function (evento) {
    normalizar(boton5_1);
    modificar(boton5_2);
    arr[4] = 0;
    console.log("El arr ", arr);
});
boton6_1.addEventListener("click", function (evento) {
    normalizar(boton6_2);
    modificar(boton6_1);
    arr[5] = 1;
    console.log("El arr ", arr);
});
boton6_2.addEventListener("click", function (evento) {
    normalizar(boton6_1);
    modificar(boton6_2);
    arr[5] = 0;
    console.log("El arr ", arr);
});
boton7_1.addEventListener("click", function (evento) {
    normalizar(boton7_2);
    modificar(boton7_1);
    arr[6] = 1;
    console.log("El arr ", arr);
});
boton7_2.addEventListener("click", function (evento) {
    normalizar(boton7_1);
    modificar(boton7_2);
    arr[6] = 0;
    console.log("El arr ", arr);
});
boton8_1.addEventListener("click", function (evento) {
    normalizar(boton8_2);
    modificar(boton8_1);
    arr[7] = 2;
    console.log("El arr ", arr);
});
boton8_2.addEventListener("click", function (evento) {
    normalizar(boton8_1);
    modificar(boton8_2);
    arr[7] = 1;
    console.log("El arr ", arr);
});
boton_calcular.addEventListener("click", function (evento) {
    var aux = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == null) {
            aux = true;
            break;
        }
    }

    if (aux) {
        alert("Tiene que responder las preguntas obligatorias");
    } else {
        (async () => {
            const rawResponse = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ array: arr })
            });
            const content = await rawResponse.json();
            var textOuput = "";
            parseInt(content.prediction) == 1 ? textOuput = "Covid Positivo" : textOuput = "Covid Negativo";
            document.getElementById("textResult").innerText = textOuput;
        })();
    }
});

// Modifica el boton cuando esta seleccionado
modificar = function (Object) {
    Object.style.background = "#fff";
    Object.style.opacity = "0.91";
    Object.style.color = "#000";
}

// El boton vuelve al estado original cuando seleccionas el botón de su costado
normalizar = function (Object) {
    Object.style.opacity = "1";
    Object.style.background = "transparent";
    Object.style.color = "#fff";
}

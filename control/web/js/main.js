let adelante = document.getElementById("adelante");
let derecha = document.getElementById("derecha");
let detener = document.getElementById("detener");
let atras = document.getElementById("atras");
let izquierda = document.getElementById("izquierda");
let mensaje = document.getElementById("mensaje");

function callApi(ip, estatus) {
    axios.get(`http://${ip}/iot-car-control/back-end/apis/setRegistro.php?valorEstatus=${estatus}`)
    .then(function (response) {
        // handle success
        console.log(response);
        mensaje.innerHTML = "Respuesta: <strong>" + response.data + "</strong>";
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

function startRequests() {
    // Get the IP address from the input field
    let ipAddress = document.getElementById("ip-address").value;

    adelante.addEventListener("click", function () {
        callApi(ipAddress, 'w');
    });
    derecha.addEventListener("click", function () {
        callApi(ipAddress, 'd');
    });
    detener.addEventListener("click", function () {
        callApi(ipAddress, 'q');
    });
    atras.addEventListener("click", function () {
        callApi(ipAddress, 's');
    });
    izquierda.addEventListener("click", function () {
        callApi(ipAddress, 'a');
    });
}

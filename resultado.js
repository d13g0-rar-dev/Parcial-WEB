$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);

    const email = document.createElement("p");
    const telefono = document.createElement("p");
    const gusto = document.createElement("p");
    const porcen = document.createElement("p");

    document.getElementById("nombre").innerText = urlParams.get("nombre") || "N/A";
    
    email.innerText = urlParams.get("email") || "N/A";
    email.classList.add("text__stats","bg-info");

    telefono.innerText = urlParams.get("tel") || "N/A";
    telefono.classList.add("text__stats", "bg-info");

    gusto.innerText = urlParams.get("gusto") || "N/A";
    gusto.classList.add("text__stats", "bg-info");

    porcen.innerText = urlParams.get("porcentaje") || "N/A";
    porcen.classList.add("text__stats", "bg-info");

    document.getElementById("email").appendChild(email);
    document.getElementById("telefono").appendChild(telefono);
    document.getElementById("gusto").appendChild(gusto);
    document.getElementById("porcentaje").appendChild(porcen);

    console.log()
});
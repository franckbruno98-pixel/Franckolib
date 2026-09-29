const params = new URLSearchParams(window.location.search);

const nomMedecin = params.get("medecin");

document.querySelector("#medecin").textContent =
    nomMedecin;
    const bouton = document.querySelector("#confirmer");

bouton.addEventListener("click", function () {

    const date = document.querySelector("#date").value;
    const heure = document.querySelector("#heure").value;

    if (date === "" || heure === "") {

        alert("Veuillez choisir une date et une heure.");

        return;
    }

    window.location.href =
        "confirmation.html?medecin=" +
        encodeURIComponent(nomMedecin) +
        "&date=" +
        encodeURIComponent(date) +
        "&heure=" +
        encodeURIComponent(heure);

});
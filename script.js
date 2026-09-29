const bouton = document.querySelector(".search-button");

bouton.addEventListener("click", function () {

    const specialite = document.querySelector("#specialite").value;
    const ville = document.querySelector("#ville").value;

    if (specialite === "" || ville === "") {

        alert("Veuillez choisir une spécialité et indiquer une ville.");

        return;
    }

    window.location.href =
        "medecins.html?specialite=" +
        encodeURIComponent(specialite) +
        "&ville=" +
        encodeURIComponent(ville);

});
const motDePasse =
    document.querySelector("#motDePasse");

const voirMotDePasse =
    document.querySelector("#voirMotDePasse");


voirMotDePasse.addEventListener("click", function () {

    if (motDePasse.type === "password") {

        motDePasse.type = "text";

        voirMotDePasse.textContent = "🙈";

    } else {

        motDePasse.type = "password";

        voirMotDePasse.textContent = "👁";

    }

});


document.querySelector("#connexionForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Connexion en cours...");

    });


document.querySelector("#creerCompte")
    .addEventListener("click", function () {

        alert("La création du compte sera bientôt disponible.");

    });
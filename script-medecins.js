const medecins = [

    {
        nom: "Dr Christophe",
        specialite: "medecin-generaliste",
        specialiteNom: "Médecin généraliste",
        ville: "Paris",
        adresse: "12 rue de la République, 75001 Paris",
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        experience: "12 ans d'expérience",
        avis: "4.9",
        disponibilite: "Disponible aujourd'hui"
    },

    {
        nom: "Dr Ravoz",
        specialite: "medecin-generaliste",
        specialiteNom: "Médecin généraliste",
        ville: "Paris",
        adresse: "25 avenue Victor Hugo, 75016 Paris",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        experience: "9 ans d'expérience",
        avis: "4.8",
        disponibilite: "Disponible demain"
    },

    {
        nom: "Dr Franck",
        specialite: "medecin-generaliste",
        specialiteNom: "Médecin généraliste",
        ville: "Paris",
        adresse: "8 rue de Rivoli, 75004 Paris",
        photo: "https://randomuser.me/api/portraits/men/61.jpg",
        experience: "15 ans d'expérience",
        avis: "4.9",
        disponibilite: "Disponible aujourd'hui"
    },

    {
        nom: "Dr Sarah Martin",
        specialite: "dermatologue",
        specialiteNom: "Dermatologue",
        ville: "Paris",
        adresse: "10 avenue de la République, 75011 Paris",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        experience: "11 ans d'expérience",
        avis: "4.8",
        disponibilite: "Disponible demain"
    },

    {
        nom: "Dr Amina Diallo",
        specialite: "dermatologue",
        specialiteNom: "Dermatologue",
        ville: "Paris",
        adresse: "22 boulevard Haussmann, 75009 Paris",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        experience: "8 ans d'expérience",
        avis: "4.9",
        disponibilite: "Disponible aujourd'hui"
    },

    {
        nom: "Dr Thomas Bernard",
        specialite: "cardiologue",
        specialiteNom: "Cardiologue",
        ville: "Lyon",
        adresse: "15 rue de la Part-Dieu, 69003 Lyon",
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        experience: "18 ans d'expérience",
        avis: "4.9",
        disponibilite: "Disponible demain"
    },

    {
        nom: "Dr Nadia Moreau",
        specialite: "dentiste",
        specialiteNom: "Dentiste",
        ville: "Paris",
        adresse: "18 rue de Vaugirard, 75006 Paris",
        photo: "https://randomuser.me/api/portraits/women/32.jpg",
        experience: "10 ans d'expérience",
        avis: "4.7",
        disponibilite: "Disponible aujourd'hui"
    },

    {
        nom: "Dr Kevin Dupont",
        specialite: "dentiste",
        specialiteNom: "Dentiste",
        ville: "Lyon",
        adresse: "7 rue Victor Hugo, 69002 Lyon",
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
        experience: "7 ans d'expérience",
        avis: "4.8",
        disponibilite: "Disponible demain"
    }

];


const resultats = document.querySelector("#resultats");
const nombreMedecins = document.querySelector("#nombreMedecins");

const filtreSpecialite =
    document.querySelector("#filtreSpecialite");

const filtreVille =
    document.querySelector("#filtreVille");

const boutonRecherche =
    document.querySelector("#rechercherMedecins");


function afficherMedecins(liste) {

    resultats.innerHTML = "";

    nombreMedecins.textContent =
        liste.length + " professionnel" +
        (liste.length > 1 ? "s" : "");


    if (liste.length === 0) {

        resultats.innerHTML = `
            <div class="no-doctor">

                <div class="no-doctor-icon">
                    🔎
                </div>

                <h3>
                    Aucun professionnel trouvé
                </h3>

                <p>
                    Essayez une autre spécialité ou une autre ville.
                </p>

            </div>
        `;

        return;
    }


    liste.forEach(function (medecin) {

        resultats.innerHTML += `

            <article class="doctor-card">

                <div class="doctor-card-top">

                    <img
                        class="doctor-photo"
                        src="${medecin.photo}"
                        alt="${medecin.nom}"
                    >

                    <span class="available">
                        ● Disponible
                    </span>

                </div>


                <div class="doctor-card-content">

                    <h3>
                        ${medecin.nom}
                    </h3>

                    <p class="doctor-specialty">
                        ${medecin.specialiteNom}
                    </p>

                    <div class="doctor-rating">
                        ★ ${medecin.avis}
                        <span>• ${medecin.experience}</span>
                    </div>

                    <p class="doctor-address">
                        📍 ${medecin.adresse}
                    </p>

                    <p class="doctor-availability">
                        ✓ ${medecin.disponibilite}
                    </p>


                    <button
                        class="doctor-button"
                        onclick="prendreRendezVous('${medecin.nom}')"
                    >
                        Prendre rendez-vous
                    </button>

                </div>

            </article>

        `;

    });

}


function filtrerMedecins() {

    const specialite =
        filtreSpecialite.value;

    const ville =
        filtreVille.value.trim().toLowerCase();


    const resultatsFiltres =
        medecins.filter(function (medecin) {

            const correspondSpecialite =
                specialite === "" ||
                medecin.specialite === specialite;

            const correspondVille =
                ville === "" ||
                medecin.ville.toLowerCase().includes(ville);

            return correspondSpecialite &&
                   correspondVille;

        });


    afficherMedecins(resultatsFiltres);

}


boutonRecherche.addEventListener(
    "click",
    filtrerMedecins
);


function prendreRendezVous(nomMedecin) {

    window.location.href =
        "rendez-vous.html?medecin=" +
        encodeURIComponent(nomMedecin);

}


/*
    Si l'utilisateur arrive depuis
    la recherche de la page d'accueil,
    on récupère les paramètres.
*/

const params =
    new URLSearchParams(window.location.search);

const specialiteURL =
    params.get("specialite");

const villeURL =
    params.get("ville");


if (specialiteURL) {
    filtreSpecialite.value = specialiteURL;
}

if (villeURL) {
    filtreVille.value = villeURL;
}


/* Affichage initial */

filtrerMedecins();
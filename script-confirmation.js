<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Franckolib - Rendez-vous confirmé</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- NAVIGATION -->

    <header class="navbar">

        <div class="logo">
            <span>♡</span> Franckolib
        </div>

        <nav>
            <a href="index.html">Accueil</a>
            <a href="medecins.html">Médecins</a>
            <a href="#">Services</a>
            <a href="#">Connexion</a>
        </nav>

    </header>


    <!-- CONFIRMATION -->

    <section class="confirmation-page">

        <div class="confirmation-card">

            <div class="confirmation-icon">
                ✓
            </div>

            <span class="confirmation-badge">
                RENDEZ-VOUS CONFIRMÉ
            </span>

            <h1>
                Votre rendez-vous<br>
                <span>est confirmé !</span>
            </h1>

            <p class="confirmation-intro">
                Votre rendez-vous a bien été enregistré.
                Retrouvez ci-dessous toutes les informations.
            </p>


            <div class="appointment-summary">

                <div class="summary-row">

                    <div class="summary-icon">
                        🩺
                    </div>

                    <div>
                        <small>Professionnel de santé</small>
                        <strong id="medecin"></strong>
                    </div>

                </div>


                <div class="summary-row">

                    <div class="summary-icon">
                        📅
                    </div>

                    <div>
                        <small>Date</small>
                        <strong id="date"></strong>
                    </div>

                </div>


                <div class="summary-row">

                    <div class="summary-icon">
                        🕐
                    </div>

                    <div>
                        <small>Heure</small>
                        <strong id="heure"></strong>
                    </div>

                </div>


                <div class="summary-row">

                    <div class="summary-icon">
                        📍
                    </div>

                    <div>
                        <small>Adresse</small>
                        <strong id="adresse"></strong>
                    </div>

                </div>

            </div>


            <div class="confirmation-actions">

                <a href="index.html">
                    Retour à l'accueil
                </a>

                <button id="annuler">
                    Annuler le rendez-vous
                </button>

            </div>

        </div>

    </section>


    <script src="script-confirmation.js"></script>

</body>

</html>
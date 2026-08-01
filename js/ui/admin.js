function vueAdmin() {

    return `

        <main class="home">

            <h1 class="section-title">

                ⚙ Administration

            </h1>

            <p class="subtitle">

                Outils de développement FORGE

            </p>

            <div class="menu">

                <button id="adminAccueil">
                    🏠 Accueil
                </button>

                <button id="adminInformations">
                    📋 Informations générales
                </button>

                <button id="adminQuestionnaire">
                    📝 Questionnaire
                </button>

                <button id="adminAnalyse">
                    🧠 Analyse
                </button>

                <button id="adminDebrief">
                    📄 Débrief
                </button>

            </div>

            <hr>

            <div class="menu">

                <button id="adminCoachingVide">
                    📄 Nouveau coaching vide
                </button>

                <button id="adminCoachingDemo">
                    🚀 Coaching de démonstration
                </button>

                <button id="adminExcellent">
                    🟢 Coaching excellent
                </button>

                <button id="adminMoyen">
                    🟠 Coaching moyen
                </button>

                <button id="adminCatastrophe">
                    🔴 Coaching catastrophique
                </button>

            </div>

            <footer>

                FORGE • Administration

            </footer>

        </main>

    `;

}
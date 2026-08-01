function vueAnalyse() {

    return `

        <div class="card">

            <h1 class="section-title">

                Analyse du coaching

            </h1>

            <p class="section-subtitle">

                FORGE analyse les réponses et prépare le débrief…

            </p>

            <div class="separator"></div>

            <div class="conformite">

                <div class="conformite-header">

                    <strong id="analyseTitre">

                        Initialisation...

                    </strong>

                    <span id="analysePourcentage">

                        0%

                    </span>

                </div>

                <div class="conformite-barre">

                    <div
                        id="analyseBarre"
                        class="conformite-remplissage"
                        style="width:0%;"
                    ></div>

                </div>

            </div>

            <div
                id="analyseEtapes"
                style="margin-top:35px;"
            >

            </div>

        </div>

    `;

}

function creerEtapesAnalyse(resultat){

    const total =
        resultat.attendu.length +
        resultat.amelioration.length +
        resultat.nonfait.length;

    return [

        {
            texte: `${total} critères analysés`,
            progression:20
        },

        {
            texte: `${resultat.attendu.length} point(s) fort(s) détecté(s)`,
            progression:45
        },

        {
            texte: `${resultat.amelioration.length} axe(s) d'amélioration`,
            progression:70
        },

        {
            texte: `${resultat.nonfait.length} critère(s) non réalisé(s)`,
            progression:90
        },

        {
            texte:"Rapport généré",
            progression:100
        }

    ];

}

function lancerAnalyse() {

    const resultat = genererDebrief();

    coaching.debrief.resultat = resultat;

    const etapesAnalyse = creerEtapesAnalyse(resultat);

    const titre = document.getElementById("analyseTitre");
    const barre = document.getElementById("analyseBarre");
    const pourcentage = document.getElementById("analysePourcentage");
    const conteneur = document.getElementById("analyseEtapes");

    let index = 0;

    conteneur.innerHTML = "";

    function afficherEtape() {

        if (index >= etapesAnalyse.length) {

            terminerAnalyse();

            return;

        }

        const etape = etapesAnalyse[index];

        titre.textContent = etape.texte;

        barre.style.width = etape.progression + "%";

        pourcentage.textContent = etape.progression + "%";

        const ligne = document.createElement("div");

        ligne.className = "analyse-ligne";

        ligne.innerHTML = `

            <div class="analyse-icone">

                <span class="analyse-check">

                    ✓

                </span>

            </div>

            <div class="analyse-texte">

                ${etape.texte}

            </div>

        `;

        conteneur.appendChild(ligne);

        ligne.animate(

            [

                {
                    opacity:0,
                    transform:"translateY(10px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],

            {

                duration:250,
                easing:"ease-out",
                fill:"forwards"

            }

        );

        index++;

        setTimeout(

            afficherEtape,

            220

        );

    }

    afficherEtape();

}

function terminerAnalyse() {

    const titre = document.getElementById("analyseTitre");
    const barre = document.getElementById("analyseBarre");
    const pourcentage = document.getElementById("analysePourcentage");

    titre.textContent = "Analyse terminée";

    barre.style.width = "100%";

    pourcentage.textContent = "100%";

    setTimeout(() => {

        titre.textContent = "Ouverture du débrief...";

    }, 200);

    setTimeout(() => {

        afficherVue(vueDebrief);

    }, 550);
    ;

}
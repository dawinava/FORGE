function chargerCoachingDemo() {

    coaching.informations = {

        type: "Coaching",

        boutique: "Boutique Démo",

        manager: "Manager Démo",

        coach: "Coach Démo",

        collaborateur: "Collaborateur Démo",

        date: new Date().toISOString().split("T")[0]

    };

    coaching.questionnaire.reponses = [];

    questionnaireComplet.sections.forEach(section => {

        section.criteres.forEach(critere => {

            coaching.questionnaire.reponses.push({

                id: critere.id,

                note: "attendu",

                commentaire: ""

            });

        });

    });

}

function genererCoachingAleatoire() {

    coaching.questionnaire.reponses = {};

    questionnaireComplet.forEach(section => {

        section.criteres.forEach(critere => {

            const notes = [
                "attendu",
                "amelioration",
                "nonfait",
                "na"
            ];

            const note =
                notes[Math.floor(Math.random() * notes.length)];

            coaching.questionnaire.reponses[critere.id] = {

                note,
                const commentaires = {

    attendu: [
        "Très bonne maîtrise.",
        "Excellent réflexe.",
        "RAS.",
        "Conforme aux attendus."
    ],

    amelioration: [
        "À renforcer.",
        "Peut être approfondi.",
        "À travailler davantage.",
        "Bonne base mais perfectible."
    ],

    nonfait: [
        "Non observé.",
        "Critère non réalisé.",
        "À reprendre.",
        "Point totalement absent."
    ],

    na: [
        "Non applicable sur cet échange."
    ]

};

const commentaire =
    commentaires[note][
        Math.floor(Math.random() * commentaires[note].length)
    ];

coaching.questionnaire.reponses[critere.id] = {

    note,
    commentaire

};

            };

        });

    });

}
function genererCoachingAleatoire() {

    coaching.questionnaire.reponses = {};

    questionnaireComplet.forEach(section => {

        section.criteres.forEach(critere => {

            const notes = [
                "attendu",
                "amelioration",
                "nonfait",
                "na"
            ];

            const note =
                notes[Math.floor(Math.random() * notes.length)];

            coaching.questionnaire.reponses[critere.id] = {

                note,
                commentaire:
                    `Commentaire automatique (${note})`

            };

        });

    });

}
const coaching = {

    informations: {

        type: "",

        boutique: "",

        manager: "",

        coach: "",

        collaborateur: "",

        date: ""

    },

    questionnaire: {

        sectionCourante: 0,

        critereCourant: 0,

        reponses: []

    },

    debrief: {

        /*
         * Résultat généré automatiquement par l'analyse.
         * Utilisé pour éviter de recalculer le débrief
         * lors de son affichage.
         */
        resultat: null,

        commentaires: "",

        pointsForts: [

            {
                critereId: "",
                texteLibre: ""
            },

            {
                critereId: "",
                texteLibre: ""
            }

        ],

        axesAmelioration: [

            {
                critereId: "",
                texteLibre: ""
            },

            {
                critereId: "",
                texteLibre: ""
            }

        ],

        planAction: "",

        delai: ""

    }

};
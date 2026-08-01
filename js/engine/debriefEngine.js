function genererDebrief() {

    const resultat = {

        attendu: [],
        amelioration: [],
        nonfait: [],
        na: []

    };

    questionnaireComplet.forEach(section => {

        section.criteres.forEach(critere => {

            const reponse = coaching.questionnaire.reponses[critere.id];

            if (!reponse) return;

            switch (reponse.note) {

                case "attendu":
                    resultat.attendu.push({
                        section: section.titre,
                        titre: critere.titre,
                        description: critere.description,
                        commentaire: reponse.commentaire
                    });
                    break;

                case "amelioration":
                    resultat.amelioration.push({
                        section: section.titre,
                        titre: critere.titre,
                        description: critere.description,
                        commentaire: reponse.commentaire
                    });
                    break;

                case "nonfait":
                    resultat.nonfait.push({
                        section: section.titre,
                        titre: critere.titre,
                        description: critere.description,
                        commentaire: reponse.commentaire
                    });
                    break;

                case "na":
                    resultat.na.push({
                        section: section.titre,
                        titre: critere.titre,
                        description: critere.description,
                        commentaire: reponse.commentaire
                    });
                    break;

            }

        });

    });

    return resultat;

}
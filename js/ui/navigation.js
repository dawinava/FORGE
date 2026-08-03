let noteSelectionnee = null;

function afficherVue(render) {

    const app = document.getElementById("app");

    app.innerHTML = render();

    /*
    =====================================================
    ACCUEIL
    =====================================================
    */

    if (render === vueAccueil) {


        document
            .getElementById("btnNew")
            .addEventListener("click", () => {

                afficherVue(vueNouveauCoaching);

            });
document
    .getElementById("btnAdmin")
    .addEventListener("click", () => {

        afficherVue(vueAdmin);

    });
        return;

    }

    /*
    =====================================================
    NOUVEAU COACHING
    =====================================================
    */

    if (render === vueNouveauCoaching) {

        document
            .getElementById("btnRetour")
            .addEventListener("click", () => {

                afficherVue(vueAccueil);

            });

        document
            .getElementById("btnComplet")
            .addEventListener("click", () => {

                coaching.informations.type = "complet";

                questionnaireEngine =
                    new QuestionnaireEngine(questionnaireComplet);

                afficherVue(vueInformationsGenerales);

            });

        document
            .getElementById("btnFlash")
            .addEventListener("click", () => {

                coaching.informations.type = "flash";

                questionnaireEngine =
                    new QuestionnaireEngine(questionnaireComplet);

                afficherVue(vueInformationsGenerales);

            });

        return;

    }

    /*
    =====================================================
    INFORMATIONS GENERALES
    =====================================================
    */

    if (render === vueInformationsGenerales) {

        document
            .getElementById("btnRetourInfos")
            .addEventListener("click", () => {

                afficherVue(vueNouveauCoaching);

            });

        document
            .getElementById("btnContinuer")
            .addEventListener("click", () => {

                coaching.informations.boutique =
                    document.getElementById("boutique").value.trim();

                coaching.informations.manager =
                    document.getElementById("manager").value.trim();

                coaching.informations.coach =
                    document.getElementById("coach").value.trim();

                coaching.informations.collaborateur =
                    document.getElementById("collaborateur").value.trim();

                coaching.informations.date =
                    document.getElementById("date").value;

                if (

                    coaching.informations.boutique === "" ||
                    coaching.informations.manager === "" ||
                    coaching.informations.coach === "" ||
                    coaching.informations.collaborateur === "" ||
                    coaching.informations.date === ""

                ) {

                    alert("Merci de remplir tous les champs.");

                    return;

                }

                afficherVue(vueQuestionnaire);

            });

        return;

    }

    /*
    =====================================================
    QUESTIONNAIRE
    =====================================================
    */

    if (render === vueQuestionnaire) {

        afficherQuestion();

        initialiserBoutonsNotation();

        document
            .getElementById("btnPrecedent")
            .addEventListener("click", () => {

               if (!sauvegarderQuestionCourante()) return;

                questionnaireEngine.questionPrecedente();

                afficherQuestion();

            });

        document
    .getElementById("btnSuivant")
    .addEventListener("click", () => {

        if (noteSelectionnee === null) {

            alert("Veuillez sélectionner une évaluation.");

            return;

        }

        if (!sauvegarderQuestionCourante()) return;
const btnSuivant =
    document.getElementById("btnSuivant");

btnSuivant.textContent =
    questionnaireEngine.estDerniereQuestion()
        ? "Terminer le coaching"
        : "Suivant →";
       if (questionnaireEngine.estDerniereQuestion()) {

    console.log(coaching);

    terminerAnalyse();

    return;

}

        questionnaireEngine.questionSuivante();

        afficherQuestion();

    });

        return;

    }

/*
=====================================================
ADMINISTRATION
=====================================================
*/

if (render === vueAdmin) {

    document
        .getElementById("adminAccueil")
        .addEventListener("click", () => {

            afficherVue(vueAccueil);

        });

    document
        .getElementById("adminInformations")
        .addEventListener("click", () => {

            afficherVue(vueInformationsGenerales);

        });

    document
        .getElementById("adminQuestionnaire")
        .addEventListener("click", () => {

            afficherVue(vueQuestionnaire);

        });

    document
        .getElementById("adminAnalyse")
        .addEventListener("click", () => {

            afficherVue(vueAnalyse);

        });

    document
        .getElementById("adminDebrief")
        .addEventListener("click", () => {

            afficherVue(vueDebrief);

        });

    document
        .getElementById("adminCoachingVide")
        .addEventListener("click", () => {

            alert("Fonction à venir.");

        });

    document
        .getElementById("adminCoachingDemo")
        .addEventListener("click", () => {

            chargerCoachingDemo();

            afficherVue(vueAnalyse);

        });

    document
        .getElementById("adminExcellent")
        .addEventListener("click", () => {

            alert("Fonction à venir.");

        });

    document
        .getElementById("adminMoyen")
        .addEventListener("click", () => {

            alert("Fonction à venir.");

        });

    document
        .getElementById("adminCatastrophe")
        .addEventListener("click", () => {

            alert("Fonction à venir.");

        });

    return;

}
   /*
=====================================================
ANALYSE
=====================================================
*/

if (render === vueAnalyse) {

    lancerAnalyse();

    return;

} if (render === vueDebrief) {

    document
        .getElementById("btnRetourQuestionnaire")
        .addEventListener("click", () => {

            coaching.debrief.commentaires =
                document.getElementById("commentairesManager").value;

            coaching.debrief.planAction =
                document.getElementById("planAction").value;

            coaching.debrief.delai =
                document.getElementById("delai").value;

            afficherVue(vueQuestionnaire);

        });

    document
    .getElementById("btnGenererPdf")
    .addEventListener("click", () => {

        coaching.debrief.commentaires =
            document.getElementById("commentairesManager").value;

        coaching.debrief.planAction =
            document.getElementById("planAction").value;

        coaching.debrief.delai =
            document.getElementById("delai").value;

        window.print();

    });

    return;

}

}
function initialiserBoutonsNotation() {

    document
        .querySelectorAll(".rating-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".rating-button")
                    .forEach(btn => {

                        btn.classList.remove("selected");

                    });

                button.classList.add("selected");

                noteSelectionnee = button.id.replace("note-", "");

            });

        });

}

function afficherQuestion() {

    const question = questionnaireEngine.obtenirQuestionCourante();
    const reponse = questionnaireEngine.obtenirReponseCourante();

    noteSelectionnee = reponse.note;

    document.getElementById("sectionTitre").textContent =
        question.sectionTitre;

    document.getElementById("numeroQuestion").textContent =
        questionnaireEngine.obtenirNumeroQuestion();

    document.getElementById("nombreQuestions").textContent =
        questionnaireEngine.obtenirNombreQuestions();

    document.getElementById("questionTitre").textContent =
        question.titre;

    document.getElementById("questionDescription").textContent =
        question.description;

    document.getElementById("progressBar").style.width =
        questionnaireEngine.obtenirPourcentageProgression() + "%";

    document.getElementById("commentaire").value =
        reponse.commentaire;

    document
        .querySelectorAll(".rating-button")
        .forEach(button => {

            button.classList.remove("selected");

            if (button.id === "note-" + reponse.note) {

                button.classList.add("selected");

            }

        });

    document.getElementById("btnPrecedent").disabled =
        questionnaireEngine.estPremiereQuestion();

    document.getElementById("btnSuivant").textContent =
        questionnaireEngine.estDerniereQuestion()
            ? "Terminer"
            : "Suivant →";

}

function sauvegarderQuestionCourante() {

    const commentaire = document.getElementById("commentaire").value;

    if (
        (noteSelectionnee === "amelioration" || noteSelectionnee === "nonfait") &&
        commentaire.trim() === ""
    ) {
        alert("Un commentaire est obligatoire pour une réponse « À améliorer » ou « Non fait ».");
        return false;
    }

    questionnaireEngine.enregistrerReponse(
        noteSelectionnee,
        commentaire
    );

    return true;

}

let questionnaireEngine = null;

class QuestionnaireEngine {

    constructor(questionnaire) {

        this.questionnaire = questionnaire;
        this.questions = [];
        this.indexQuestionCourante = 0;

        this.initialiser();

    }

    initialiser() {

        this.questions = [];

        coaching.questionnaire.reponses = {};

        this.questionnaire.forEach(section => {

            section.criteres.forEach(critere => {

                this.questions.push({

                    sectionId: section.id,
                    sectionTitre: section.titre,
                    ...critere

                });

                coaching.questionnaire.reponses[critere.id] = {

                    note: null,
                    commentaire: ""

                };

            });

        });

    }

    obtenirQuestionCourante() {

        return this.questions[this.indexQuestionCourante];

    }

    obtenirReponseCourante() {

        const question = this.obtenirQuestionCourante();

        return coaching.questionnaire.reponses[question.id];

    }

    enregistrerReponse(note, commentaire) {

        const question = this.obtenirQuestionCourante();

        coaching.questionnaire.reponses[question.id] = {

            note,
            commentaire

        };

    }

    questionSuivante() {

        if (!this.estDerniereQuestion()) {

            this.indexQuestionCourante++;

        }

    }

    questionPrecedente() {

        if (!this.estPremiereQuestion()) {

            this.indexQuestionCourante--;

        }

    }

    estPremiereQuestion() {

        return this.indexQuestionCourante === 0;

    }

    estDerniereQuestion() {

        return this.indexQuestionCourante === this.questions.length - 1;

    }

    obtenirNumeroQuestion() {

        return this.indexQuestionCourante + 1;

    }

    obtenirNombreQuestions() {

        return this.questions.length;

    }

    obtenirPourcentageProgression() {

        return (
            (this.obtenirNumeroQuestion() /
                this.obtenirNombreQuestions()) * 100
        );

    }

}
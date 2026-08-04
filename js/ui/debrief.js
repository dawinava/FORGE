function vueDebrief() {

    const resultat =
        coaching.debrief.resultat ?? genererDebrief();

    const total =
        resultat.attendu.length +
        resultat.amelioration.length +
        resultat.nonfait.length;

    const conformite =
        total === 0
            ? 0
            : Math.round(
                (resultat.attendu.length / total) * 100
            );

    return `

        ${genererCouverturePDF()}

        <div class="card">

            <h1>

                Débrief du coaching

            </h1>

            ${genererDashboard(
                resultat,
                conformite
            )}

            <h2 class="rapport-titre">

                Rapport détaillé du coaching

            </h2>

            ${genererRapportComplet()}

            ${genererZoneManager()}

        </div>

    `;

}

function genererDashboard(
    resultat,
    conformite
) {

    return `

        <div class="debrief-dashboard">

            <div class="dashboard-card">

                <div class="dashboard-number">

                    ${
                        resultat.attendu.length +
                        resultat.amelioration.length +
                        resultat.nonfait.length +
                        resultat.na.length
                    }

                </div>

                <div class="dashboard-label">

                    Critères évalués

                </div>

            </div>

            <div class="dashboard-card dashboard-green">

                <div class="dashboard-number">

                    ${resultat.attendu.length}

                </div>

                <div class="dashboard-label">

                    Conformes

                </div>

            </div>

            <div class="dashboard-card dashboard-orange">

                <div class="dashboard-number">

                    ${resultat.amelioration.length}

                </div>

                <div class="dashboard-label">

                    À améliorer

                </div>

            </div>

            <div class="dashboard-card dashboard-red">

                <div class="dashboard-number">

                    ${resultat.nonfait.length}

                </div>

                <div class="dashboard-label">

                    Non réalisés

                </div>

            </div>

        </div>

        <div class="conformite">

            <div class="conformite-header">

                <span>

                    Taux de conformité

                </span>

                <strong>

                    ${conformite} %

                </strong>

            </div>

            <div class="conformite-barre">

                <div
                    class="conformite-remplissage"
                    style="width:${conformite}%"
                ></div>

            </div>

        </div>

    `;

}
function genererRapportComplet() {

    let html = "";

    questionnaireComplet.forEach(section => {

        html += `

            <div class="debrief-section">

                <h2>

                    ${section.titre}

                </h2>

        `;

        section.criteres.forEach(critere => {

            const reponse =
                coaching.questionnaire.reponses[critere.id];

            let icone = "⚪";
            let libelle = "Non évalué";

            if (reponse) {

                switch (reponse.note) {

                    case "attendu":
                        icone = "🟢";
                        libelle = "Conforme";
                        break;

                    case "amelioration":
                        icone = "🟠";
                        libelle = "À améliorer";
                        break;

                    case "nonfait":
                        icone = "🔴";
                        libelle = "Non réalisé";
                        break;

                    case "na":
                        icone = "⚪";
                        libelle = "Non applicable";
                        break;

                }

            }

            html += `

                <div class="debrief-card">

                    <div class="debrief-header">

                        <h3>

                            ${icone}
                            ${critere.titre}

                        </h3>

                        <span class="section-badge">

                            ${libelle}

                        </span>

                    </div>

                    <div class="debrief-description">

                        ${critere.description}

                    </div>

            `;

            if (

                reponse &&
                reponse.commentaire &&
                reponse.commentaire.trim() !== ""

            ) {

                html += `

                    <div class="debrief-commentaire">

                        <strong>

                            Observation du coach

                        </strong>

                        <p>

                            ${reponse.commentaire}

                        </p>

                    </div>

                `;

            }

            html += `

                </div>

            `;

        });

        html += `

            </div>

        `;

    });

    return html;

}
function genererZoneManager() {

    return `

        <div class="card">

            <h2>

                Synthèse du débrief

            </h2>

            <label>

                Commentaires généraux

            </label>

            <textarea
                id="commentairesManager"
                rows="6"
                placeholder="Synthèse de l'entretien..."
            >${coaching.debrief.commentaires}</textarea>

            <label>

                Plan d'action

            </label>

            <textarea
                id="planAction"
                rows="6"
                placeholder="Actions décidées avec le collaborateur..."
            >${coaching.debrief.planAction}</textarea>

            <label>

                Deadline

            </label>

            <input
                id="delai"
                type="date"
                value="${coaching.debrief.delai}"
            >

            <div class="question-navigation">

                <button
                    id="btnRetourQuestionnaire"
                    class="button-secondary">

                    ← Retour au questionnaire

                </button>

                <button
                    id="btnGenererPdf">

                    🖨️ Finaliser le coaching

                </button>

            </div>

        </div>

    `;

}
function genererCouverturePDF() {

    return `

        <section class="pdf-cover">

            <div class="pdf-cover-image">

                <img
                    src="assets/images/cover.png"
                    alt="Couverture">

                <div class="pdf-cover-logo">

                    <img
                        src="assets/images/logo-free.png"
                        alt="Free">

                </div>

                <div class="pdf-cover-title">

                    <h1>

                        COACHING COMPLET

                    </h1>

                    <p>

                        Débrief du coaching

                    </p>

                </div>

            </div>

            <div class="card pdf-cover-card">

                <h2>

                    Informations du coaching

                </h2>

                <table class="pdf-cover-table">

                    <tr>

                        <th>🏪 Boutique</th>

                        <td>${coaching.informations.boutique}</td>

                    </tr>

                    <tr>

                        <th>👤 Collaborateur</th>

                        <td>${coaching.informations.collaborateur}</td>

                    </tr>

                    <tr>

                        <th>🛠 Coach</th>

                        <td>${coaching.informations.coach}</td>

                    </tr>

                    <tr>

                        <th>📅 Date</th>

                        <td>${coaching.informations.date}</td>

                    </tr>

                </table>

            </div>

        </section>

    `;

}

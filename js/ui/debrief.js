function vueDebrief() {

 const resultat = coaching.debrief.resultat ?? genererDebrief();
    const total =
        resultat.attendu.length +
        resultat.amelioration.length +
        resultat.nonfait.length;

    const conformite =
        total === 0
            ? 0
            : Math.round((resultat.attendu.length / total) * 100);

    return `

        <div class="card">

            <h1>Débrief du coaching</h1>

            ${genererDashboard(
                resultat,
                conformite
            )}

            ${genererCategorie(
                debrief.categories.nonfait,
                resultat.nonfait
            )}

            ${genererCategorie(
                debrief.categories.amelioration,
                resultat.amelioration
            )}

            ${genererCategorie(
                debrief.categories.attendu,
                resultat.attendu
            )}

            ${genererCategorie(
                debrief.categories.na,
                resultat.na
            )}

            ${genererZoneManager()}

        </div>

    `;

}

function genererDashboard(resultat, conformite) {

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

function genererCategorie(categorie, elements) {

    if (elements.length === 0) {

        return "";

    }

    let html = `

        <div class="debrief-section">

            <h2>

                ${categorie.icone}
                ${categorie.titre}

                <span class="badge">

                    ${elements.length}

                </span>

            </h2>

    `;

    elements.forEach(element => {

        html += genererCarte(element);

    });

    html += `

        </div>

    `;

    return html;

}
function genererCarte(element) {

    return `

        <div class="debrief-card">

            <div class="debrief-header">

                <h3>

                    ${element.titre}

                </h3>

                <span class="section-badge">

                    ${element.section}

                </span>

            </div>

            <div class="debrief-description">

                ${element.description}

            </div>

            ${
                element.commentaire.trim() !== ""

                    ?

                    `

                        <div class="debrief-commentaire">

                            <strong>Commentaire</strong>

                            <p>

                                ${element.commentaire}

                            </p>

                        </div>

                    `

                    :

                    ""

            }

        </div>

    `;

}

function genererZoneManager() {

    return `

        <div class="card">

            <h2>

                📝 Débrief manager

            </h2>

            <label>

                Commentaires généraux

            </label>

            <textarea
                id="commentairesManager"
                rows="5"
                placeholder="Commentaires généraux..."
            >${coaching.debrief.commentaires}</textarea>

            <label>

                Plan d'action

            </label>

            <textarea
                id="planAction"
                rows="5"
                placeholder="Plan d'action..."
            >${coaching.debrief.planAction}</textarea>

            <label>

                Délai

            </label>

            <input
                id="delai"
                type="date"
                value="${coaching.debrief.delai}"
            >

            <div class="question-navigation">

                <button id="btnRetourQuestionnaire">

                    ← Retour au questionnaire

                </button>

                <button id="btnGenererPdf">

                    Générer le PDF

                </button>

            </div>

        </div>

    `;
    return `

...

${footerForge()}

`;

}
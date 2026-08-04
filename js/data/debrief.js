const debrief = {

    categories: {

        attendu: {

            titre: "Points forts",

            icone: "🟢"

        },

        amelioration: {

            titre: "Axes d'amélioration",

            icone: "🟠"

        },

        nonfait: {

            titre: "Critères non réalisés",

            icone: "🔴"

        },

        na: {

            titre: "Non applicables",

            icone: "⚪"

        }

    }

};
function vuePDF() {

    return `

        <div class="pdf-document">

            ${genererCouverturePDF()}

            <section class="pdf-page">

                <div class="card">

                    <h1>

                        Débrief du coaching

                    </h1>

                    ${genererDashboard(

                        coaching.debrief.resultat,

                        calculerConformite()

                    )}

                </div>

                ${genererRapportComplet()}

                ${genererZoneManager()}

            </section>

        </div>

    `;

}
function calculerConformite() {

    const resultat = coaching.debrief.resultat;

    const total =
        resultat.attendu.length +
        resultat.amelioration.length +
        resultat.nonfait.length;

    if (total === 0) {

        return 0;

    }

    return Math.round(

        (resultat.attendu.length / total) * 100

    );

}
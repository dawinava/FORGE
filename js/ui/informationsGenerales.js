function vueInformationsGenerales() {

    const aujourdHui = new Date().toISOString().split("T")[0];

    return `

        <main class="home">

            <h1>Informations</h1>

            <div class="formulaire">

                <label for="boutique">
                    Boutique
                </label>

                <input
                    id="boutique"
                    type="text"
                >

                <label for="manager">
                    Manager
                </label>

                <input
                    id="manager"
                    type="text"
                >

                <label for="coach">
                    Coach
                </label>

                <input
                    id="coach"
                    type="text"
                >

                <label for="collaborateur">
                    Collaborateur
                </label>

                <input
                    id="collaborateur"
                    type="text"
                >

                <label for="date">
                    Date
                </label>

                <input
                    id="date"
                    type="date"
                    value="${aujourdHui}"
                >

                <button id="btnContinuer">
                    Continuer
                </button>

                <button id="btnRetourInfos">
                    ← Retour
                </button>

            </div>

        </main>

    `;

}
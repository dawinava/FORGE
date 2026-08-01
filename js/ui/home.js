function vueAccueil() {

    return `

        <main class="home">

            <div class="logo-container">

                <img
                    src="assets/logos/logo-centre.png"
                    alt="FORGE"
                    class="logo-centre intro-logo">

                <img
                    src="assets/logos/logo-forge.png"
                    alt="FORGE"
                    class="logo-forge intro-forge">

            </div>

            <div class="menu">

                <button
                    id="btnNew"
                    class="menu-item">

                    Nouveau coaching

                </button>

                <button
                    id="btnHistory"
                    class="menu-item">

                    Historique

                </button>

                <button
                    id="btnSettings"
                    class="menu-item">

                    Paramètres

                </button>

                <button
                    id="btnAdmin"
                    class="menu-item">

                    ⚙ Administration

                </button>

            </div>

            ${footerForge()}

        </main>

    `;

}
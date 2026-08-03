function initialiserAccueil(render) {

    if (render !== vueAccueil) {

        return;

    }

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

}

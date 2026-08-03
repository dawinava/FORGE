function vueQuestionnaire() {

    return `

        <main class="home">

            <div class="card">

                <h2 id="sectionTitre"></h2>

                <p class="subtitle">

                    Question
                    <span id="numeroQuestion"></span>
                    /
                    <span id="nombreQuestions"></span>

                </p>

                <div class="progress">

                    <div
                        id="progressBar"
                        class="progress-bar">
                    </div>

                </div>

                <h2 id="questionTitre"></h2>

                <p id="questionDescription"></p>

                <label class="question-label">

                    Évaluation

                </label>

                <div class="rating">

                    <button
                        type="button"
                        id="note-attendu"
                        class="rating-button rating-attendu">

                        ✅ Conforme

                    </button>

                    <button
                        type="button"
                        id="note-amelioration"
                        class="rating-button rating-amelioration">

                        ⚠️ À améliorer

                    </button>

                    <button
                        type="button"
                        id="note-nonfait"
                        class="rating-button rating-nonfait">

                        ❌ Non réalisé

                    </button>

                    <button
                        type="button"
                        id="note-na"
                        class="rating-button rating-na">

                        ⭕ Non applicable

                    </button>

                </div>

                <label
                    class="question-label"
                    for="commentaire">

                    Commentaire

                </label>

                <textarea
                    id="commentaire"
                    rows="3"
                    placeholder="Ajouter une observation...">
                </textarea>

                <div class="question-navigation">

                    <button
                        id="btnPrecedent"
                        class="button-secondary">

                        ← Précédent

                    </button>

                    <button
                        id="btnSuivant">

                        Suivant →
                        
                        <button id="btnSkipDebug">

    ⚡ Skip Debug

</button>

                    </button>

                </div>

            </div>

        </main>

    `;

}
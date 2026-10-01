// ======================================================
// QUIZ - BANCO DE PERGUNTAS
// ======================================================

const quizzes = {

    minecraft: {

        facil: [
            {
                question: "Qual mob explode quando chega perto do jogador?",
                answers: ["Zombie", "Creeper", "Skeleton", "Enderman"],
                correct: 1
            },
            {
                question: "Qual ferramenta é usada principalmente para minerar pedra?",
                answers: ["Espada", "Picareta", "Pá", "Enxada"],
                correct: 1
            },
            {
                question: "Qual mob normalmente deixa cair ossos?",
                answers: ["Skeleton", "Zombie", "Creeper", "Spider"],
                correct: 0
            },
            {
                question: "Em qual dimensão encontramos o Ender Dragon?",
                answers: ["Nether", "Overworld", "The End", "Deep Dark"],
                correct: 2
            },
            {
                question: "Qual material pode ser usado para criar uma mesa de trabalho?",
                answers: ["Tábuas de madeira", "Ferro", "Pedra", "Diamante"],
                correct: 0
            },
            {
                question: "Qual animal fornece lã?",
                answers: ["Vaca", "Galinha", "Ovelha", "Porco"],
                correct: 2
            },
            {
                question: "Qual alimento uma vaca pode deixar cair?",
                answers: ["Frango", "Carne bovina", "Carneiro", "Salmão"],
                correct: 1
            },
            {
                question: "Qual destes minérios fornece diamante?",
                answers: [
                    "Minério de carvão",
                    "Minério de diamante",
                    "Minério de cobre",
                    "Minério de ferro"
                ],
                correct: 1
            },
            {
                question: "Qual desses mobs hostis pode aparecer durante a noite no Overworld?",
                answers: ["Zombie", "Vaca", "Ovelha", "Aldeão"],
                correct: 0
            },
            {
                question: "Qual item permite ao jogador dormir?",
                answers: ["Baú", "Cama", "Fornalha", "Bigorna"],
                correct: 1
            },
            {
                question: "Qual desses blocos é afetado pela gravidade?",
                answers: ["Pedra", "Obsidiana", "Areia", "Madeira"],
                correct: 2
            },
            {
                question: "Qual personagem vive normalmente nas vilas?",
                answers: ["Aldeão", "Blaze", "Ghast", "Shulker"],
                correct: 0
            },
            {
                question: "Qual ferramenta quebra madeira mais rapidamente?",
                answers: ["Picareta", "Machado", "Pá", "Enxada"],
                correct: 1
            },
            {
                question: "Qual destes materiais pode ser usado para criar uma espada?",
                answers: ["Vidro", "Diamante", "Areia", "Lã"],
                correct: 1
            },
            {
                question: "Qual desses mobs possui oito pernas?",
                answers: ["Creeper", "Aranha", "Zombie", "Skeleton"],
                correct: 1
            }
        ],

        medio: [
            {
                question: "Qual bloco é usado para construir um portal do Nether?",
                answers: ["Obsidiana", "Bedrock", "Basalto", "Pedra"],
                correct: 0
            },
            {
                question: "Qual item é usado para ajudar a localizar uma Stronghold?",
                answers: ["Bússola", "Olho do Ender", "Relógio", "Mapa"],
                correct: 1
            },
            {
                question: "Qual mob é conhecido por se teleportar?",
                answers: ["Creeper", "Enderman", "Skeleton", "Slime"],
                correct: 1
            },
            {
                question: "Qual mob pode ser encontrado em Nether Fortresses?",
                answers: ["Blaze", "Guardian", "Shulker", "Warden"],
                correct: 0
            },
            {
                question: "Qual item um Blaze pode deixar cair?",
                answers: ["Blaze Rod", "Ender Pearl", "Ghast Tear", "Slime Ball"],
                correct: 0
            },
            {
                question: "Qual encantamento aumenta a velocidade de mineração?",
                answers: ["Fortuna", "Eficiência", "Saque", "Poder"],
                correct: 1
            },
            {
                question: "Qual bloco é utilizado para encantar equipamentos?",
                answers: ["Mesa de Encantamentos", "Fornalha", "Barril", "Baú"],
                correct: 0
            },
            {
                question: "Qual item pode ser usado para domesticar um lobo?",
                answers: ["Osso", "Trigo", "Peixe", "Maçã"],
                correct: 0
            },
            {
                question: "Qual mob pode deixar cair Ender Pearl?",
                answers: ["Enderman", "Blaze", "Ghast", "Witch"],
                correct: 0
            },
            {
                question: "Qual item é necessário para transformar equipamento de diamante em Netherite na mesa de ferraria?",
                answers: ["Barra de Netherite", "Blaze Rod", "Quartzo", "Obsidiana"],
                correct: 0
            },
            {
                question: "Em qual estrutura fica o portal para The End?",
                answers: ["Stronghold", "Village", "Mineshaft", "Dungeon"],
                correct: 0
            },
            {
                question: "Qual mob protege os Ocean Monuments?",
                answers: ["Guardian", "Zombie", "Phantom", "Piglin"],
                correct: 0
            },
            {
                question: "Qual item é muito usado para realizar um MLG Water Bucket?",
                answers: ["Balde de água", "Bússola", "Relógio", "Tesoura"],
                correct: 0
            },
            {
                question: "Qual bloco permite reparar e renomear equipamentos?",
                answers: ["Bigorna", "Fornalha", "Baú", "Composter"],
                correct: 0
            },
            {
                question: "Qual mob pode aparecer quando o jogador passa várias noites sem dormir?",
                answers: ["Ghast", "Phantom", "Vex", "Allay"],
                correct: 1
            }
        ],

        dificil: [
            {
                question: "Quantos blocos de obsidiana são necessários no mínimo para um portal do Nether funcional?",
                answers: ["8", "10", "12", "14"],
                correct: 1
            },
            {
                question: "Qual bloco permite definir um ponto de renascimento no Nether?",
                answers: ["Beacon", "Âncora de Renascimento", "Lodestone", "Cama"],
                correct: 1
            },
            {
                question: "Qual encantamento aumenta a quantidade de drops de mobs usando uma espada?",
                answers: ["Fortuna", "Saque", "Eficiência", "Poder"],
                correct: 1
            },
            {
                question: "Qual chefe é invocado usando Soul Sand ou Soul Soil e três cabeças de Wither Skeleton?",
                answers: ["Warden", "Wither", "Ender Dragon", "Ravager"],
                correct: 1
            },
            {
                question: "Qual poção permite respirar debaixo d'água?",
                answers: ["Respiração Aquática", "Força", "Regeneração", "Resistência"],
                correct: 0
            },
            {
                question: "Qual item raro é necessário para fabricar um Beacon?",
                answers: ["Nether Star", "Dragon Egg", "Heart of the Sea", "Echo Shard"],
                correct: 0
            },
            {
                question: "Qual chefe deixa cair uma Nether Star?",
                answers: ["Ender Dragon", "Wither", "Warden", "Elder Guardian"],
                correct: 1
            },
            {
                question: "Qual item pode ser vinculado a um Lodestone?",
                answers: ["Bússola", "Relógio", "Mapa", "Olho do Ender"],
                correct: 0
            },
            {
                question: "Qual encantamento permite que um Tridente invoque um raio nas condições adequadas?",
                answers: ["Lealdade", "Canalização", "Correnteza", "Perfuração"],
                correct: 1
            },
            {
                question: "Qual encantamento faz um Tridente lançado retornar ao jogador?",
                answers: ["Lealdade", "Canalização", "Fortuna", "Impacto"],
                correct: 0
            },
            {
                question: "Qual estrutura do Nether está fortemente associada aos Piglins?",
                answers: ["Bastion Remnant", "Stronghold", "Ancient City", "End City"],
                correct: 0
            },
            {
                question: "Qual mob está associado ao efeito Darkness nas Ancient Cities?",
                answers: ["Warden", "Blaze", "Enderman", "Piglin"],
                correct: 0
            },
            {
                question: "Em qual estrutura encontramos Shulkers naturalmente?",
                answers: ["End City", "Stronghold", "Ancient City", "Nether Fortress"],
                correct: 0
            },
            {
                question: "Qual item raro é necessário para fabricar um Conduit?",
                answers: ["Heart of the Sea", "Nether Star", "Dragon Egg", "Echo Shard"],
                correct: 0
            },
            {
                question: "Qual encantamento congela temporariamente a água sob os pés do jogador?",
                answers: ["Frost Walker", "Depth Strider", "Feather Falling", "Aqua Affinity"],
                correct: 0
            }
        ]
    },

        anime: {

        facil: [
            {
                question: "Qual é o nome do protagonista de Naruto?",
                answers: ["Naruto", "Sasuke", "Kakashi", "Itachi"],
                correct: 0
            },
            {
                question: "Quem é o protagonista de Dragon Ball?",
                answers: ["Vegeta", "Goku", "Gohan", "Trunks"],
                correct: 1
            },
            {
                question: "Qual é o grande objetivo de Luffy em One Piece?",
                answers: ["Virar Hokage", "Tornar-se Rei dos Piratas", "Virar Hashira", "Ser Hunter"],
                correct: 1
            },
            {
                question: "Qual anime possui Gon Freecss?",
                answers: ["Naruto", "Hunter x Hunter", "Bleach", "One Piece"],
                correct: 1
            },
            {
                question: "Quem é o protagonista de Attack on Titan?",
                answers: ["Levi", "Armin", "Eren", "Reiner"],
                correct: 2
            },
            {
                question: "Qual personagem é famoso pelo chapéu de palha?",
                answers: ["Luffy", "Naruto", "Goku", "Asta"],
                correct: 0
            },
            {
                question: "Qual personagem é o principal rival de Naruto durante boa parte da história?",
                answers: ["Sasuke", "Gaara", "Neji", "Shikamaru"],
                correct: 0
            },
            {
                question: "Qual desses personagens é um Saiyajin?",
                answers: ["Kuririn", "Goku", "Piccolo", "Freeza"],
                correct: 1
            },
            {
                question: "Quem é o protagonista de Black Clover?",
                answers: ["Yuno", "Asta", "Yami", "Luck"],
                correct: 1
            },
            {
                question: "Quem é um dos irmãos mais conhecidos de Killua?",
                answers: ["Illumi", "Hisoka", "Kurapika", "Leorio"],
                correct: 0
            },
            {
                question: "Em qual anime aparece Levi Ackerman?",
                answers: ["Bleach", "Attack on Titan", "Naruto", "Dragon Ball"],
                correct: 1
            },
            {
                question: "Quem é o irmão mais velho de Sasuke?",
                answers: ["Kakashi", "Itachi", "Obito", "Madara"],
                correct: 1
            },
            {
                question: "Qual personagem de Black Clover sonha em se tornar Rei Mago?",
                answers: ["Asta", "Yami", "Magna", "Finral"],
                correct: 0
            },
            {
                question: "Qual é o sobrenome de Gon?",
                answers: ["Zoldyck", "Freecss", "Kurta", "Netero"],
                correct: 1
            },
            {
                question: "Quem entregou o chapéu de palha para Luffy?",
                answers: ["Ace", "Shanks", "Roger", "Rayleigh"],
                correct: 1
            }
        ],

        medio: [
            {
                question: "Qual é o sobrenome de Killua?",
                answers: ["Freecss", "Zoldyck", "Kurta", "Netero"],
                correct: 1
            },
            {
                question: "Quem é o capitão dos Touros Negros em Black Clover?",
                answers: ["Asta", "Yami", "Yuno", "Julius"],
                correct: 1
            },
            {
                question: "Qual é o sobrenome de Levi?",
                answers: ["Yeager", "Ackerman", "Braun", "Arlert"],
                correct: 1
            },
            {
                question: "Quem é conhecido como Copy Ninja em Naruto?",
                answers: ["Kakashi", "Jiraiya", "Minato", "Itachi"],
                correct: 0
            },
            {
                question: "Qual é o nome do pai de Eren?",
                answers: ["Grisha", "Zeke", "Keith", "Kenny"],
                correct: 0
            },
            {
                question: "Qual membro dos Chapéus de Palha luta usando três espadas?",
                answers: ["Sanji", "Zoro", "Brook", "Franky"],
                correct: 1
            },
            {
                question: "Qual personagem de Hunter x Hunter pertence ao clã Kurta?",
                answers: ["Leorio", "Kurapika", "Hisoka", "Illumi"],
                correct: 1
            },
            {
                question: "Quantas folhas possui o grimório de Asta?",
                answers: ["3", "4", "5", "6"],
                correct: 2
            },
            {
                question: "Qual personagem foi acolhida pela família Yeager quando criança?",
                answers: ["Historia", "Mikasa", "Annie", "Sasha"],
                correct: 1
            },
            {
                question: "Quem treinou Naruto antes de Shippuden?",
                answers: ["Jiraiya", "Kakashi", "Iruka", "Tsunade"],
                correct: 0
            },
            {
                question: "Qual personagem de One Piece é conhecido como Perna Negra?",
                answers: ["Zoro", "Sanji", "Usopp", "Franky"],
                correct: 1
            },
            {
                question: "Qual dojutsu é característico do clã Uchiha?",
                answers: ["Byakugan", "Sharingan", "Tenseigan", "Ketsuryugan"],
                correct: 1
            },
            {
                question: "Quem se torna o melhor amigo de Gon durante sua jornada?",
                answers: ["Hisoka", "Killua", "Chrollo", "Illumi"],
                correct: 1
            },
            {
                question: "Quem é o vice-capitão dos Touros Negros?",
                answers: ["Nacht", "Finral", "Magna", "Luck"],
                correct: 0
            },
            {
                question: "Quem possui o Titã Blindado durante grande parte de Attack on Titan?",
                answers: ["Bertholdt", "Reiner", "Zeke", "Porco"],
                correct: 1
            }
        ],

        dificil: [
            {
                question: "Qual número Hisoka usa durante o Exame Hunter?",
                answers: ["44", "99", "301", "405"],
                correct: 0
            },
            {
                question: "Qual é o nome do primeiro Rei Mago de Black Clover?",
                answers: ["Julius Novachrono", "Lumiere Silvamillion Clover", "Licht", "Patry"],
                correct: 1
            },
            {
                question: "Qual espada de Zoro pertenceu originalmente a Kuina?",
                answers: ["Enma", "Wado Ichimonji", "Shusui", "Sandai Kitetsu"],
                correct: 1
            },
            {
                question: "Qual técnica de Killua usa eletricidade para aumentar suas reações e movimentos?",
                answers: ["Godspeed", "Emperor Time", "Bungee Gum", "Skill Hunter"],
                correct: 0
            },
            {
                question: "Quem possuía o Titã de Ataque imediatamente antes de Grisha Yeager?",
                answers: ["Eren Kruger", "Zeke Yeager", "Tom Ksaver", "Reiner Braun"],
                correct: 0
            },
            {
                question: "Quem é o líder da Trupe Fantasma?",
                answers: ["Feitan", "Chrollo Lucilfer", "Phinks", "Nobunaga"],
                correct: 1
            },
            {
                question: "Qual integrante dos Chapéus de Palha nasceu em Ohara?",
                answers: ["Nami", "Nico Robin", "Franky", "Brook"],
                correct: 1
            },
            {
                question: "Quem foi o Quarto Hokage?",
                answers: ["Hiruzen", "Minato", "Tobirama", "Hashirama"],
                correct: 1
            },
            {
                question: "Quem utiliza Magia das Sombras em Black Clover?",
                answers: ["Nacht", "Yami", "Finral", "Gauche"],
                correct: 0
            },
            {
                question: "Qual é o nome do pai de Killua?",
                answers: ["Silva", "Zeno", "Illumi", "Kalluto"],
                correct: 0
            },
            {
                question: "A identidade da mãe biológica de Gon é...",
                answers: ["Não revelada", "Mito Freecss", "Biscuit Krueger", "Kikyo Zoldyck"],
                correct: 0
            },
            {
                question: "Qual Titã Bertholdt Hoover possuía?",
                answers: ["Titã Blindado", "Titã Colossal", "Titã Mandíbula", "Titã Bestial"],
                correct: 1
            },
            {
                question: "Quem fundou originalmente a Akatsuki ao lado de Nagato e Konan?",
                answers: ["Obito", "Yahiko", "Itachi", "Kisame"],
                correct: 1
            },
            {
                question: "Qual é o nome do pai de Gon?",
                answers: ["Ging Freecss", "Isaac Netero", "Silva Zoldyck", "Kite"],
                correct: 0
            },
            {
                question: "Quem treinou Luffy no Haki durante o timeskip?",
                answers: ["Shanks", "Silvers Rayleigh", "Garp", "Mihawk"],
                correct: 1
            }
        ]
    }
};


// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const startScreen = document.getElementById("startScreen");
const categoryScreen = document.getElementById("categoryScreen");
const difficultyScreen = document.getElementById("difficultyScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");

const categoryButtons = document.querySelectorAll(".category-button");
const difficultyButtons = document.querySelectorAll(".difficulty-button");

const categoryTitle = document.getElementById("categoryTitle");

const questionElement = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const scoreElement = document.getElementById("score");
const quizInfo = document.getElementById("quizInfo");
const progressBar = document.getElementById("progressBar");

const answerButtons = document.querySelectorAll(".answer");

const nextButton = document.getElementById("nextButton");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");
const resultCategory = document.getElementById("resultCategory");
const highScoreElement = document.getElementById("highScore");

const restartButton = document.getElementById("restartButton");
const menuButton = document.getElementById("menuButton");


// ======================================================
// VARIÁVEIS
// ======================================================

let selectedCategory = "";
let selectedDifficulty = "";

let currentQuestions = [];
let currentQuestion = 0;

let points = 0;

let correctAnswers = 0;
let wrongAnswers = 0;

let streak = 0;
let bestStreak = 0;

let answered = false;

let timeLeft = 15;
let timer = null;

let soundEnabled = true;

let mistakes = [];


// ======================================================
// INTERFACE EXTRA DURANTE O JOGO
// ======================================================

const gameExtra = document.createElement("div");

gameExtra.className = "game-extra-wrapper";

gameExtra.innerHTML = `
    <div class="game-extra">

        <div id="timerText">
            ⏱️ 15s
        </div>

        <div id="streakText">
            🔥 0
        </div>

        <button
            id="soundButton"
            class="sound-button"
            type="button"
        >
            🔊
        </button>

    </div>

    <div class="timer-container">
        <div id="timerBar"></div>
    </div>
`;

if (questionElement && questionElement.parentNode) {

    questionElement.parentNode.insertBefore(
        gameExtra,
        questionElement
    );

}

const timerText =
    document.getElementById("timerText");

const streakText =
    document.getElementById("streakText");

const timerBar =
    document.getElementById("timerBar");

const soundButton =
    document.getElementById("soundButton");


// ======================================================
// RESULTADO EXTRA
// ======================================================

const resultExtra =
    document.createElement("div");

resultExtra.className =
    "result-extra";

resultExtra.innerHTML = `

    <div class="result-stats">

        <div class="stat-box">
            <span>Acertos</span>
            <strong id="correctResult">0</strong>
        </div>

        <div class="stat-box">
            <span>Erros</span>
            <strong id="wrongResult">0</strong>
        </div>

        <div class="stat-box">
            <span>Melhor sequência</span>
            <strong id="streakResult">0</strong>
        </div>

        <div class="stat-box">
            <span>Pontos</span>
            <strong id="pointsResult">0</strong>
        </div>

    </div>

    <div id="achievementBox"></div>

    <div class="review-section">

        <h3>Revisão dos erros</h3>

        <div id="mistakesList"></div>

    </div>

    <div class="history-section">

        <h3>Últimas partidas</h3>

        <div id="historyList"></div>

    </div>
`;

const resultButtons =
    resultScreen.querySelector(
        ".result-buttons"
    );

if (resultButtons) {

    resultScreen.insertBefore(
        resultExtra,
        resultButtons
    );

} else {

    resultScreen.appendChild(
        resultExtra
    );

}


const correctResult =
    document.getElementById("correctResult");

const wrongResult =
    document.getElementById("wrongResult");

const streakResult =
    document.getElementById("streakResult");

const pointsResult =
    document.getElementById("pointsResult");

const achievementBox =
    document.getElementById("achievementBox");

const mistakesList =
    document.getElementById("mistakesList");

const historyList =
    document.getElementById("historyList");


// ======================================================
// COMEÇAR
// ======================================================

startButton.addEventListener(
    "click",
    function () {

        startScreen.classList.add(
            "hidden"
        );

        categoryScreen.classList.remove(
            "hidden"
        );

    }
);


// ======================================================
// CATEGORIA
// ======================================================

categoryButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                selectedCategory =
                    button.dataset.category;


                categoryScreen.classList.add(
                    "hidden"
                );

                difficultyScreen.classList.remove(
                    "hidden"
                );


                if (
                    selectedCategory ===
                    "minecraft"
                ) {

                    categoryTitle.textContent =
                        "⛏️ Minecraft";

                } else {

                    categoryTitle.textContent =
                        "🍥 Anime";

                }

            }
        );

    }
);


// ======================================================
// VOLTAR
// ======================================================

backButton.addEventListener(
    "click",
    function () {

        difficultyScreen.classList.add(
            "hidden"
        );

        categoryScreen.classList.remove(
            "hidden"
        );

    }
);


// ======================================================
// DIFICULDADE
// ======================================================

difficultyButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                selectedDifficulty =
                    button.dataset.difficulty;

                startQuiz();

            }
        );

    }
);


// ======================================================
// COMEÇAR QUIZ
// ======================================================

function startQuiz() {

    clearInterval(timer);


    currentQuestions =
        quizzes[selectedCategory]
        [selectedDifficulty]
        .map(function (question) {

            return {

                question:
                    question.question,

                answers:
                    [...question.answers],

                correct:
                    question.correct

            };

        });


    shuffleArray(
        currentQuestions
    );


    currentQuestion = 0;

    points = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    streak = 0;

    bestStreak = 0;

    mistakes = [];

    answered = false;


    difficultyScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );


    showQuestion();

}


// ======================================================
// MOSTRAR PERGUNTA
// ======================================================

function showQuestion() {

    clearInterval(timer);

    answered = false;

    nextButton.classList.add(
        "hidden"
    );


    const current =
        currentQuestions[
            currentQuestion
        ];


    const correctAnswer =
        current.answers[
            current.correct
        ];


    shuffleArray(
        current.answers
    );


    current.correct =
        current.answers.indexOf(
            correctAnswer
        );


    questionElement.textContent =
        current.question;


    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${currentQuestions.length}`;


    scoreElement.textContent =
        `Pontos: ${points}`;


    quizInfo.textContent =
        `${getCategoryName()} • ${getDifficultyName()}`;


    progressBar.style.width =
        `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;


    streakText.textContent =
        `🔥 ${streak}`;


    answerButtons.forEach(
        function (button, index) {

            button.textContent =
                current.answers[index];


            button.disabled = false;


            button.classList.remove(
                "correct",
                "wrong",
                "answer-pop"
            );


            button.onclick =
                function () {

                    selectAnswer(
                        index
                    );

                };

        }
    );


    startTimer();

}


// ======================================================
// CRONÔMETRO
// ======================================================

function startTimer() {

    clearInterval(timer);

    timeLeft = 15;


    timerText.textContent =
        `⏱️ ${timeLeft}s`;


    timerText.classList.remove(
        "danger"
    );


    timerBar.style.transition =
        "none";

    timerBar.style.width =
        "100%";


    void timerBar.offsetWidth;


    timerBar.style.transition =
        "width 1s linear";


    timer =
        setInterval(
            function () {

                timeLeft--;


                timerText.textContent =
                    `⏱️ ${timeLeft}s`;


                const percentage =
                    (timeLeft / 15) *
                    100;


                timerBar.style.width =
                    `${percentage}%`;


                if (timeLeft <= 5) {

                    timerText.classList.add(
                        "danger"
                    );

                } else {

                    timerText.classList.remove(
                        "danger"
                    );

                }


                if (timeLeft <= 0) {

                    clearInterval(
                        timer
                    );

                    timeExpired();

                }

            },
            1000
        );

}


// ======================================================
// TEMPO ESGOTADO
// ======================================================

function timeExpired() {

    if (answered) {
        return;
    }


    answered = true;

    wrongAnswers++;

    streak = 0;


    streakText.textContent =
        "🔥 0";


    const current =
        currentQuestions[
            currentQuestion
        ];


    answerButtons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    answerButtons[
        current.correct
    ].classList.add(
        "correct"
    );


    mistakes.push({

        question:
            current.question,

        selected:
            "Tempo esgotado",

        correct:
            current.answers[
                current.correct
            ]

    });


    playWrongSound();


    nextButton.classList.remove(
        "hidden"
    );

}


// ======================================================
// RESPONDER
// ======================================================

function selectAnswer(
    selectedIndex
) {

    if (answered) {
        return;
    }


    answered = true;

    clearInterval(timer);


    const current =
        currentQuestions[
            currentQuestion
        ];


    answerButtons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    // ACERTO

    if (
        selectedIndex ===
        current.correct
    ) {

        answerButtons[
            selectedIndex
        ].classList.add(
            "correct",
            "answer-pop"
        );


        correctAnswers++;

        streak++;


        if (
            streak >
            bestStreak
        ) {

            bestStreak =
                streak;

        }


        const speedBonus =
            timeLeft * 5;


        const streakBonus =
            streak * 10;


        points +=
            100 +
            speedBonus +
            streakBonus;


        scoreElement.textContent =
            `Pontos: ${points}`;


        streakText.textContent =
            `🔥 ${streak}`;


        playCorrectSound();

    }

    // ERRO

    else {

        answerButtons[
            selectedIndex
        ].classList.add(
            "wrong"
        );


        answerButtons[
            current.correct
        ].classList.add(
            "correct"
        );


        wrongAnswers++;

        streak = 0;


        streakText.textContent =
            "🔥 0";


        mistakes.push({

            question:
                current.question,

            selected:
                current.answers[
                    selectedIndex
                ],

            correct:
                current.answers[
                    current.correct
                ]

        });


        playWrongSound();

    }


    nextButton.classList.remove(
        "hidden"
    );

}


// ======================================================
// PRÓXIMA
// ======================================================

nextButton.addEventListener(
    "click",
    function () {

        currentQuestion++;


        if (
            currentQuestion <
            currentQuestions.length
        ) {

            showQuestion();

        } else {

            showResult();

        }

    }
);


// ======================================================
// RESULTADO
// ======================================================

function showResult() {

    clearInterval(timer);


    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    const total =
        currentQuestions.length;


    const percentage =
        Math.round(
            (correctAnswers / total) *
            100
        );


    finalScore.textContent =
        `${correctAnswers}/${total}`;


    resultCategory.textContent =
        `${getCategoryName()} • ${getDifficultyName()} • ${percentage}%`;


    correctResult.textContent =
        correctAnswers;

    wrongResult.textContent =
        wrongAnswers;

    streakResult.textContent =
        bestStreak;

    pointsResult.textContent =
        points;


    if (
        percentage <= 30
    ) {

        resultMessage.textContent =
            "Tem que treinar mais 😅";

    }

    else if (
        percentage <= 60
    ) {

        resultMessage.textContent =
            "Nada mal 👀";

    }

    else if (
        percentage <= 80
    ) {

        resultMessage.textContent =
            "Mandou bem! 🔥";

    }

    else if (
        percentage < 100
    ) {

        resultMessage.textContent =
            "Quase perfeito! ⚡";

    }

    else {

        resultMessage.textContent =
            "PERFEITO! 🏆";

    }


    updateRecord();

    showAchievements();

    showMistakes();

    saveHistory();

    showHistory();

}


// ======================================================
// RECORDE
// ======================================================

function updateRecord() {

    const recordName =
        `record-${selectedCategory}-${selectedDifficulty}`;


    let highScore =
        Number(
            localStorage.getItem(
                recordName
            )
        ) || 0;


    if (
        correctAnswers >
        highScore
    ) {

        highScore =
            correctAnswers;


        localStorage.setItem(
            recordName,
            correctAnswers
        );

    }


    highScoreElement.textContent =
        `${highScore}/${currentQuestions.length}`;

}


// ======================================================
// CONQUISTAS
// ======================================================

function showAchievements() {

    achievementBox.innerHTML =
        "";


    const achievements = [];


    if (
        correctAnswers === 15
    ) {

        achievements.push(
            "🏆 Perfeito — 15/15"
        );

    }


    if (
        bestStreak >= 10
    ) {

        achievements.push(
            "🔥 Imparável — 10 acertos seguidos"
        );

    }


    if (
        selectedCategory ===
        "minecraft" &&
        correctAnswers >= 12
    ) {

        achievements.push(
            "⛏️ Mestre do Minecraft"
        );

    }


    if (
        selectedCategory ===
        "anime" &&
        correctAnswers >= 12
    ) {

        achievements.push(
            "🍥 Mestre dos Animes"
        );

    }


    if (
        points >= 2000
    ) {

        achievements.push(
            "⚡ Velocista — 2000 pontos"
        );

    }


    if (
        achievements.length === 0
    ) {

        achievementBox.innerHTML = `
            <p class="no-achievement">
                Nenhuma conquista nesta partida.
            </p>
        `;

        return;

    }


    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        "Conquistas";


    achievementBox.appendChild(
        title
    );


    achievements.forEach(
        function (achievement) {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "achievement";


            div.textContent =
                achievement;


            achievementBox.appendChild(
                div
            );

        }
    );

}


// ======================================================
// REVISÃO DOS ERROS
// ======================================================

function showMistakes() {

    mistakesList.innerHTML =
        "";


    if (
        mistakes.length === 0
    ) {

        mistakesList.innerHTML = `
            <div class="perfect-review">
                Você não errou nenhuma pergunta. 🏆
            </div>
        `;

        return;

    }


    mistakes.forEach(
        function (mistake) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "mistake-item";


            const question =
                document.createElement(
                    "strong"
                );


            question.textContent =
                mistake.question;


            const selected =
                document.createElement(
                    "p"
                );


            selected.className =
                "your-answer";


            selected.textContent =
                `Sua resposta: ${mistake.selected}`;


            const correct =
                document.createElement(
                    "p"
                );


            correct.className =
                "correct-answer";


            correct.textContent =
                `Correta: ${mistake.correct}`;


            item.appendChild(
                question
            );

            item.appendChild(
                selected
            );

            item.appendChild(
                correct
            );


            mistakesList.appendChild(
                item
            );

        }
    );

}


// ======================================================
// SALVAR HISTÓRICO
// ======================================================

function saveHistory() {

    let history = [];


    try {

        history =
            JSON.parse(
                localStorage.getItem(
                    "quizHistory"
                )
            ) || [];

    }

    catch (error) {

        history = [];

    }


    history.unshift({

        category:
            getCategoryName(),

        difficulty:
            getDifficultyName(),

        correct:
            correctAnswers,

        total:
            currentQuestions.length,

        points:
            points,

        date:
            new Date()
                .toLocaleDateString(
                    "pt-BR"
                )

    });


    history =
        history.slice(
            0,
            5
        );


    localStorage.setItem(
        "quizHistory",
        JSON.stringify(
            history
        )
    );

}


// ======================================================
// MOSTRAR HISTÓRICO
// ======================================================

function showHistory() {

    let history = [];


    try {

        history =
            JSON.parse(
                localStorage.getItem(
                    "quizHistory"
                )
            ) || [];

    }

    catch (error) {

        history = [];

    }


    historyList.innerHTML =
        "";


    history.forEach(
        function (game) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "history-item";


            const info =
                document.createElement(
                    "span"
                );


            info.textContent =
                `${game.category} • ${game.difficulty}`;


            const result =
                document.createElement(
                    "strong"
                );


            result.textContent =
                `${game.correct}/${game.total}`;


            const details =
                document.createElement(
                    "small"
                );


            details.textContent =
                `${game.points ?? game.score ?? 0} pts • ${game.date}`;


            item.appendChild(
                info
            );

            item.appendChild(
                result
            );

            item.appendChild(
                details
            );


            historyList.appendChild(
                item
            );

        }
    );

}


// ======================================================
// JOGAR NOVAMENTE
// ======================================================

restartButton.addEventListener(
    "click",
    function () {

        startQuiz();

    }
);


// ======================================================
// VOLTAR PARA MENU
// ======================================================

menuButton.addEventListener(
    "click",
    function () {

        clearInterval(timer);


        resultScreen.classList.add(
            "hidden"
        );

        categoryScreen.classList.remove(
            "hidden"
        );

    }
);


// ======================================================
// SOM
// ======================================================

soundButton.addEventListener(
    "click",
    function () {

        soundEnabled =
            !soundEnabled;


        soundButton.textContent =
            soundEnabled
                ? "🔊"
                : "🔇";

    }
);


function playCorrectSound() {

    if (!soundEnabled) {
        return;
    }


    playTone(
        600,
        0.08
    );


    setTimeout(
        function () {

            playTone(
                850,
                0.12
            );

        },
        80
    );

}


function playWrongSound() {

    if (!soundEnabled) {
        return;
    }


    playTone(
        180,
        0.18
    );

}


function playTone(
    frequency,
    duration
) {

    try {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContextClass) {
            return;
        }


        const audioContext =
            new AudioContextClass();


        const oscillator =
            audioContext
                .createOscillator();


        const gain =
            audioContext
                .createGain();


        oscillator.connect(
            gain
        );


        gain.connect(
            audioContext.destination
        );


        oscillator.frequency.value =
            frequency;


        gain.gain.setValueAtTime(
            0.05,
            audioContext.currentTime
        );


        gain.gain
            .exponentialRampToValueAtTime(
                0.001,
                audioContext.currentTime +
                duration
            );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime +
            duration
        );


        oscillator.addEventListener(
            "ended",
            function () {

                audioContext.close();

            }
        );

    }

    catch (error) {

        // O quiz continua funcionando
        // mesmo se o navegador bloquear áudio.

    }

}


// ======================================================
// NOMES
// ======================================================

function getCategoryName() {

    if (
        selectedCategory ===
        "minecraft"
    ) {

        return "Minecraft";

    }


    return "Anime";

}


function getDifficultyName() {

    if (
        selectedDifficulty ===
        "facil"
    ) {

        return "Fácil";

    }


    if (
        selectedDifficulty ===
        "medio"
    ) {

        return "Médio";

    }


    return "Difícil";

}


// ======================================================
// EMBARALHAR
// ======================================================

function shuffleArray(array) {

    for (
        let i =
            array.length - 1;

        i > 0;

        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            array[i],
            array[randomIndex]
        ] = [
            array[randomIndex],
            array[i]
        ];

    }

}s
// ======================================================
// PERFIL / XP / NÍVEL
// ======================================================

const playerNameElement =
    document.getElementById("playerName");

const playerLevelElement =
    document.getElementById("playerLevel");

const xpText =
    document.getElementById("xpText");

const xpBar =
    document.getElementById("xpBar");

const rankingButton =
    document.getElementById("rankingButton");

const statsButton =
    document.getElementById("statsButton");

const startPanel =
    document.getElementById("startPanel");

const panelTitle =
    document.getElementById("panelTitle");

const panelContent =
    document.getElementById("panelContent");

const closePanel =
    document.getElementById("closePanel");


const XP_PER_LEVEL = 500;


// ======================================================
// CARREGA PERFIL
// ======================================================

function loadPlayerProfile() {

    let profile;

    try {

        profile =
            JSON.parse(
                localStorage.getItem(
                    "quizPlayer"
                )
            );

    }

    catch (error) {

        profile = null;

    }


    if (!profile) {

        profile = {

            name: "Neto",

            xp: 0,

            games: 0,

            totalCorrect: 0,

            totalQuestions: 0,

            bestStreak: 0

        };

    }


    return profile;

}


// ======================================================
// SALVA PERFIL
// ======================================================

function savePlayerProfile(
    profile
) {

    localStorage.setItem(
        "quizPlayer",
        JSON.stringify(profile)
    );

}


// ======================================================
// ATUALIZA PERFIL NA TELA
// ======================================================

function updateProfileUI() {

    const profile =
        loadPlayerProfile();


    const level =
        Math.floor(
            profile.xp /
            XP_PER_LEVEL
        ) + 1;


    const currentXP =
        profile.xp %
        XP_PER_LEVEL;


    const percentage =
        (
            currentXP /
            XP_PER_LEVEL
        ) * 100;


    playerNameElement.textContent =
        profile.name;


    playerLevelElement.textContent =
        level;


    xpText.textContent =
        `${currentXP} / ${XP_PER_LEVEL}`;


    xpBar.style.width =
        `${percentage}%`;

}


// ======================================================
// GANHA XP
// ======================================================

function givePlayerXP() {

    const profile =
        loadPlayerProfile();


    // 20 XP por resposta correta.

    const earnedXP =
        correctAnswers * 20;


    profile.xp +=
        earnedXP;


    profile.games++;


    profile.totalCorrect +=
        correctAnswers;


    profile.totalQuestions +=
        currentQuestions.length;


    if (
        bestStreak >
        profile.bestStreak
    ) {

        profile.bestStreak =
            bestStreak;

    }


    savePlayerProfile(
        profile
    );


    return earnedXP;

}


// ======================================================
// RANKING LOCAL
// ======================================================

function saveRanking() {

    let ranking = [];

    try {

        ranking =
            JSON.parse(
                localStorage.getItem(
                    "quizRanking"
                )
            ) || [];

    }

    catch (error) {

        ranking = [];

    }


    const profile =
        loadPlayerProfile();


    ranking.push({

        name:
            profile.name,

        points:
            points,

        correct:
            correctAnswers,

        total:
            currentQuestions.length,

        category:
            getCategoryName(),

        difficulty:
            getDifficultyName(),

        date:
            new Date()
                .toLocaleDateString(
                    "pt-BR"
                )

    });


    ranking.sort(
        function (a, b) {

            return (
                b.points -
                a.points
            );

        }
    );


    ranking =
        ranking.slice(
            0,
            10
        );


    localStorage.setItem(
        "quizRanking",
        JSON.stringify(
            ranking
        )
    );

}


// ======================================================
// MOSTRA RANKING
// ======================================================

function showRankingPanel() {

    panelTitle.textContent =
        "🏆 Ranking local";


    let ranking = [];

    try {

        ranking =
            JSON.parse(
                localStorage.getItem(
                    "quizRanking"
                )
            ) || [];

    }

    catch (error) {

        ranking = [];

    }


    panelContent.innerHTML =
        "";


    if (
        ranking.length === 0
    ) {

        panelContent.innerHTML = `
            <p class="panel-empty">
                Jogue uma partida para entrar no ranking.
            </p>
        `;

    }


    ranking.forEach(
        function (game, index) {

            const row =
                document.createElement(
                    "div"
                );


            row.className =
                "ranking-row";


            const position =
                document.createElement(
                    "span"
                );


            position.className =
                "ranking-position";


            position.textContent =
                `${index + 1}º`;


            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "ranking-info";


            const name =
                document.createElement(
                    "strong"
                );


            name.textContent =
                game.name;


            const details =
                document.createElement(
                    "small"
                );


            details.textContent =
                `${game.category} • ${game.difficulty} • ${game.correct}/${game.total}`;


            info.appendChild(
                name
            );


            info.appendChild(
                details
            );


            const rankingPoints =
                document.createElement(
                    "span"
                );


            rankingPoints.className =
                "ranking-points";


            rankingPoints.textContent =
                `${game.points} pts`;


            row.appendChild(
                position
            );


            row.appendChild(
                info
            );


            row.appendChild(
                rankingPoints
            );


            panelContent.appendChild(
                row
            );

        }
    );


    startPanel.classList.remove(
        "hidden"
    );

}


// ======================================================
// ESTATÍSTICAS
// ======================================================

function showStatsPanel() {

    const profile =
        loadPlayerProfile();


    const accuracy =
        profile.totalQuestions > 0

            ? Math.round(
                (
                    profile.totalCorrect /
                    profile.totalQuestions
                ) * 100
            )

            : 0;


    panelTitle.textContent =
        "📊 Estatísticas";


    panelContent.innerHTML = `
        <div class="stats-grid">

            <div class="start-stat">
                <span>Partidas</span>
                <strong>${profile.games}</strong>
            </div>

            <div class="start-stat">
                <span>Acertos</span>
                <strong>${profile.totalCorrect}</strong>
            </div>

            <div class="start-stat">
                <span>Precisão</span>
                <strong>${accuracy}%</strong>
            </div>

            <div class="start-stat">
                <span>Melhor sequência</span>
                <strong>${profile.bestStreak}</strong>
            </div>

        </div>
    `;


    startPanel.classList.remove(
        "hidden"
    );

}


// ======================================================
// BOTÕES
// ======================================================

rankingButton.addEventListener(
    "click",
    showRankingPanel
);


statsButton.addEventListener(
    "click",
    showStatsPanel
);


closePanel.addEventListener(
    "click",
    function () {

        startPanel.classList.add(
            "hidden"
        );

    }
);


// ======================================================
// CARREGA PERFIL AO ABRIR
// ======================================================

updateProfileUI();
const quizData = [
    { 
        question: "Jak nazywa się stolica Japonii?", 
        options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"], 
        answer: "Tokyo" 
    },
    { 
        question: "Które z tych dań jest tradycyjną potrawą japońską?", 
        options: ["Sushi", "Tacos", "Pizza", "Bigos"], 
        answer: "Sushi" 
    },
    { 
        question: "Jak nazywa się japońska sztuka składania papieru?", 
        options: ["Ikebana", "Origami", "Calligraphy", "Sumi-e"], 
        answer: "Origami" 
    }
];

let currentQuestion = 0;
let score = 0;
const questionElement = document.querySelector('.question');
const optionsElement = document.querySelector('.options');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const finalMessageElement = document.getElementById('final-message');   
const restartButton = document.getElementById('restart');

function loadQuestion() {
    const quizItem = quizData[currentQuestion];
    questionElement.textContent = quizItem.question;
    optionsElement.innerHTML = '';

    quizItem.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selected === correctAnswer) {
        resultElement.textContent = "Dobrze!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = "Źle! Prawidłowa odpowiedź to: " + correctAnswer;
        resultElement.style.color = "red";
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            resultElement.textContent = "";
            loadQuestion();
        }, 1000);
    } else {
        setTimeout(() => {
            resultElement.textContent = "Koniec quizu!";
            optionsElement.innerHTML = '';
            scoreElement.textContent = "Twój wynik: " + score + " / " + quizData.length;
            
            let finalMessage = "";
            if (score === 0) {
                finalMessage = "❌ Oj, Japonia to dla Ciebie jeszcze wielka zagadka! 🏯 Ale nic straconego! Odwiedź naszą <a href='../index.html'>stronę</a> i odkryj fascynujący świat samurajów, sushi i sakury! 🌸";
            } else if (score === 1) {
                finalMessage = "🤔 Masz podstawową wiedzę, ale to dopiero początek! 📖 Zanurz się w kulturze Japonii i zostań prawdziwym ekspertem! 🇯🇵";
            } else if (score === 2) {
                finalMessage = "👍 Całkiem nieźle! 🎌 Znasz już sporo faktów o Japonii, ale zawsze można dowiedzieć się więcej. Trzymaj tak dalej!";
            } else if (score === 3) {
                finalMessage = "🎉 Wow! Jesteś prawdziwym znawcą Japonii! 🏆 Może czas zaplanować podróż i sprawdzić swoją wiedzę w praktyce? ✈️";
            }
            
            finalMessageElement.innerHTML = finalMessage;
            restartButton.style.display = "block";
        }, 1000);
    }
}

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = "";
    finalMessageElement.textContent = "";
    restartButton.style.display = "none";
    resultElement.textContent = "";
    loadQuestion();
});

loadQuestion();
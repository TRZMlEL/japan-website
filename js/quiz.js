let storedName = "";
let storedSurname = "";

function submitQuiz(event) {
    event.preventDefault();
    const form = document.getElementById("quiz-form");
    const formData = new FormData(form);
    
    storedName = formData.get("name");
    storedSurname = formData.get("surname");

    let score = 0;
    if (formData.get("capital") === "Tokyo") score++;
    if (formData.get("island") === "Honsiu") score++;
    if (formData.getAll("food").includes("Sushi")) score++;
    if (formData.getAll("food").includes("Ramen")) score++;
    if (formData.getAll("food").includes("Onigiri")) score++;
    if (formData.get("art") === "Origami") score++;
    if (formData.get("culture") === "Samuraje") score++;
    if (formData.get("writing") === "Kanji") score++;
    if (formData.get("theater") === "Kabuki") score++;
    if (formData.get("emperor") === "Naruhito") score++;
    if (formData.get("holiday") === "Golden Week") score++;
    if (formData.get("sport") === "Sumo") score++;
    if (formData.get("flag") === "Czerwono-biała") score++;
    if (formData.get("currency") === "Jen") score++;
    if (formData.get("drink") === "Matcha") score++;

    let percentage = (score / 15) * 100;
    let finalMessage = "";
    
    if (percentage < 25) {
        finalMessage = "❌ Oj, Japonia to dla Ciebie jeszcze wielka zagadka! 🏯 Ale nic straconego! Odwiedź naszą <a href='../index.html'>stronę</a> i odkryj fascynujący świat samurajów, sushi i sakury! 🌸";
    } else if (percentage < 50) {
        finalMessage = "🤔 Masz podstawową wiedzę, ale to dopiero początek! 📖 Zanurz się w kulturze Japonii i zostań prawdziwym ekspertem! 🇯🇵";
    } else if (percentage < 75) {
        finalMessage = "👍 Całkiem nieźle! 🎌 Znasz już sporo faktów o Japonii, ale zawsze można dowiedzieć się więcej. Trzymaj tak dalej!";
    } else if (percentage < 100) {
        finalMessage = "🎉 Wow! Jesteś prawdziwym znawcą Japonii! 🏆 Może czas zaplanować podróż i sprawdzić swoją wiedzę w praktyce? ✈️";
    } else {
        finalMessage = "🏅 Niesamowite! Rozwiązałeś quiz bezbłędnie! 🎖️ Twoja wiedza o Japonii jest imponująca! Może powinieneś zostać przewodnikiem po Japonii? 🇯🇵";
    }
    
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").innerHTML = `Twój wynik: ${score} / 15<br>${finalMessage}`;
}

function restartQuiz() {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz-form").reset();
    document.getElementById("name").value = storedName;
    document.getElementById("surname").value = storedSurname;
}
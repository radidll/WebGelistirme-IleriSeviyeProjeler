const startBtn = document.getElementById("startBtn");
const output = document.getElementById("output");
const statusText = document.getElementById("status");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Tarayıcınız sesli komutları desteklemiyor.");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = "tr-TR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    startBtn.addEventListener("click", () => {
        recognition.start();
        statusText.textContent = "Dinleniyor...";
    });

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase().trim();
        output.innerHTML = `Komut: <strong>${command}</strong>`;
        statusText.textContent = "Mikrofon beklemede...";

        // Komutlara tepki
        if (command.includes("selam")) {
            output.innerHTML += `<p>👋 Merhaba! Nasılsın?</p>`;
        } else if (command.includes("renk değiştir")) {
            document.body.style.backgroundColor = getRandomColor();
            output.innerHTML += `<p>🎨 Arka plan rengi değiştirildi!</p>`;
        } else if (command.includes("zaman")) {
            const now = new Date();
            output.innerHTML += `<p>🕒 Şu an saat: ${now.toLocaleTimeString()}</p>`;
        } else {
            output.innerHTML += `<p>⚠️ Anlaşılmayan komut.</p>`;
        }
    };

    recognition.onerror = (event) => {
        statusText.textContent = "Hata oluştu: " + event.error;
    };

    recognition.onend = () => {
        statusText.textContent = "Mikrofon beklemede...";
    };
}

function getRandomColor() {
    return `hsl(${Math.floor(Math.random() * 360)}, 60%, 80%)`;
}
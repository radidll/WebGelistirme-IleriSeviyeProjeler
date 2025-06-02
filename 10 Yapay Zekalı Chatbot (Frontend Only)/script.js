const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userMsg = input.value.trim();
    if (userMsg === '') return;

    appendMessage('user', userMsg);
    input.value = '';

    const botReply = getBotResponse(userMsg);
    setTimeout(() => appendMessage('bot', botReply), 500);
});

function appendMessage(sender, message) {
    const msg = document.createElement('div');
    msg.className = sender;
    msg.textContent = message;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes('merhaba')) return 'Merhaba! Size nasıl yardımcı olabilirim?';
    if (msg.includes('nasılsın')) return 'Harikayım, sen nasılsın?';
    if (msg.includes('saat kaç')) return `Şu an saat ${new Date().toLocaleTimeString()}`;
    if (msg.includes('tarih')) return `Bugün ${new Date().toLocaleDateString()}`;
    if (msg.includes('görüşürüz')) return 'Görüşmek üzere!';

    return 'Üzgünüm, bunu anlayamadım. Daha farklı bir şekilde sorar mısınız?';
}
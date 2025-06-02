const chatBox = document.getElementById("chat-box");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");

function sendMessage() {
    const username = usernameInput.value;
    const message = messageInput.value;
    if (username && message) {
        const msgData = {
            name: username,
            message: message,
            time: new Date().toLocaleTimeString()
        };
        firebase.database().ref("messages").push(msgData);
        messageInput.value = "";
    }
}

firebase.database().ref("messages").on("child_added", function(snapshot) {
    const msg = snapshot.val();
    const msgElement = document.createElement("p");
    msgElement.textContent = `[${msg.time}] ${msg.name}: ${msg.message}`;
    chatBox.appendChild(msgElement);
    chatBox.scrollTop = chatBox.scrollHeight;
});
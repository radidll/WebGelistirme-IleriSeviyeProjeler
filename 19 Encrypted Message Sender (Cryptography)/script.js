function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);

        // Büyük harf
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }

        // Küçük harf
        if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }

        return char; // Harf değilse olduğu gibi bırak
    }).join('');
}

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const message = document.getElementById("message");
const result = document.getElementById("result");

encryptBtn.addEventListener("click", () => {
    const encrypted = caesarCipher(message.value, 3);
    result.textContent = encrypted;
});

decryptBtn.addEventListener("click", () => {
    const decrypted = caesarCipher(message.value, -3);
    result.textContent = decrypted;
});
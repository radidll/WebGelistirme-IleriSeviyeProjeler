// QR Kod oluşturucu
const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generate-btn');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const text = qrText.value.trim();
    if (!text) {
        alert('Lütfen metin veya URL girin!');
        return;
    }
    qrcodeContainer.innerHTML = '';
    new QRCode(qrcodeContainer, {
        text: text,
        width: 180,
        height: 180
    });
});

// QR Kod okuyucu
const startScanBtn = document.getElementById('start-scan-btn');
const stopScanBtn = document.getElementById('stop-scan-btn');
const readerContainer = document.getElementById('reader-container');
const scanResult = document.getElementById('scan-result');

let html5QrCode;

startScanBtn.addEventListener('click', () => {
    scanResult.textContent = '';
    startScanBtn.disabled = true;
    stopScanBtn.disabled = false;

    html5QrCode = new Html5Qrcode("reader-container");

    html5QrCode.start({ facingMode: "environment" }, {
            fps: 10,
            qrbox: { width: 250, height: 250 }
        },
        (decodedText) => {
            scanResult.textContent = `Bulunan QR kod: ${decodedText}`;
            stopScan();
        },
        (errorMessage) => {
            // Hatalar sessiz geçilsin
        }
    ).catch(err => {
        alert(`Tarayıcı hatası: ${err}`);
        startScanBtn.disabled = false;
        stopScanBtn.disabled = true;
    });
});

stopScanBtn.addEventListener('click', () => {
    stopScan();
});

function stopScan() {
    if (html5QrCode) {
        html5QrCode.stop().then(() => {
            startScanBtn.disabled = false;
            stopScanBtn.disabled = true;
            readerContainer.innerHTML = '';
        }).catch(err => {
            alert(`Tarama durdurulamadı: ${err}`);
        });
    }
}
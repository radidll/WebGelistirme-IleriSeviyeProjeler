const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const preview = document.getElementById('preview');
const downloadLink = document.getElementById('downloadLink');

let mediaRecorder;
let recordedChunks = [];

startBtn.addEventListener('click', async() => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" }
    });

    mediaRecorder = new MediaRecorder(stream);
    recordedChunks = [];

    mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
            recordedChunks.push(e.data);
        }
    };

    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        preview.src = url;
        downloadLink.href = url;
        downloadLink.classList.remove('hidden'); // Güncellendi
    };

    mediaRecorder.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener('click', () => {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
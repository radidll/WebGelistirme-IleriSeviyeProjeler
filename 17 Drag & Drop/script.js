const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileElem");
const fileSelectBtn = document.getElementById("fileSelect");
const fileList = document.getElementById("file-list");

// Dosyaları listele
function handleFiles(files) {
    fileList.innerHTML = "";
    [...files].forEach(file => {
        const li = document.createElement("li");
        li.textContent = `${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
        fileList.appendChild(li);
    });
}

// Butonla dosya seçme
fileSelectBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => handleFiles(fileInput.files));

// Drag & drop
dropArea.addEventListener("dragover", e => {
    e.preventDefault();
    dropArea.classList.add("hover");
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("hover");
});

dropArea.addEventListener("drop", e => {
    e.preventDefault();
    dropArea.classList.remove("hover");
    if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
    }
});
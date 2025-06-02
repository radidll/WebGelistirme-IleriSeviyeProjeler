const editor = document.getElementById("editor");
const fontFamily = document.getElementById("fontFamily");
const fontSize = document.getElementById("fontSize");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const leftBtn = document.getElementById("leftBtn");
const centerBtn = document.getElementById("centerBtn");
const rightBtn = document.getElementById("rightBtn");

fontFamily.addEventListener("change", () => {
    editor.style.fontFamily = fontFamily.value;
});

fontSize.addEventListener("input", () => {
    editor.style.fontSize = fontSize.value + "px";
});

boldBtn.addEventListener("click", () => {
    editor.style.fontWeight = editor.style.fontWeight === "bold" ? "normal" : "bold";
});

italicBtn.addEventListener("click", () => {
    editor.style.fontStyle = editor.style.fontStyle === "italic" ? "normal" : "italic";
});

leftBtn.addEventListener("click", () => {
    editor.style.textAlign = "left";
});

centerBtn.addEventListener("click", () => {
    editor.style.textAlign = "center";
});

rightBtn.addEventListener("click", () => {
    editor.style.textAlign = "right";
});
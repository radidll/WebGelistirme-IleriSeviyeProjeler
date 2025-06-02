const animationNameInput = document.getElementById("animation-name");
const durationInput = document.getElementById("duration");
const iterationInput = document.getElementById("iteration-count");
const timingInput = document.getElementById("timing-function");
const keyframesInput = document.getElementById("keyframes");
const applyBtn = document.getElementById("apply-animation");
const animatedBox = document.getElementById("animated-box");
const cssOutput = document.getElementById("css-output");
const copyBtn = document.getElementById("copy-css");

applyBtn.addEventListener("click", () => {
    const name = animationNameInput.value.trim();
    const duration = durationInput.value;
    const iteration = iterationInput.value;
    const timing = timingInput.value;
    const keyframes = keyframesInput.value.trim();

    const style = document.createElement("style");
    style.innerHTML = `
@keyframes ${name} {
  ${keyframes}
}
#animated-box {
  animation: ${name} ${duration}s ${timing} ${iteration};
}`;
    document.head.appendChild(style);

    animatedBox.style.animation = "none";
    void animatedBox.offsetWidth; // Reflow
    animatedBox.style.animation = `${name} ${duration}s ${timing} ${iteration}`;

    cssOutput.textContent = style.innerHTML.trim();
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cssOutput.textContent)
        .then(() => alert("CSS kopyalandı!"))
        .catch(err => alert("Kopyalama hatası: " + err));
});
const htmlInput = document.getElementById("html");
const cssInput = document.getElementById("css");
const jsInput = document.getElementById("js");
const output = document.getElementById("output");

function run() {
    const html = htmlInput.value;
    const css = `<style>${cssInput.value}</style>`;
    const js = `<script>${jsInput.value}<\/script>`;
    const result = html + css + js;
    output.srcdoc = result;
}

htmlInput.addEventListener("input", run);
cssInput.addEventListener("input", run);
jsInput.addEventListener("input", run);

run(); // Başlangıçta boş da olsa çalışsın
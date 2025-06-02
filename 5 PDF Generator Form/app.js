document.getElementById("pdfForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    doc.text(`Ad Soyad: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text("Mesaj:", 10, 30);
    doc.text(message, 10, 40);

    doc.save("form-belgesi.pdf");
});
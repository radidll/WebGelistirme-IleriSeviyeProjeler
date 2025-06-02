const contacts = [
    "Ahmet Yılmaz",
    "Ayşe Demir",
    "Mehmet Kaya",
    "Fatma Çelik",
    "Ali Öztürk",
    "Zeynep Koç",
    "Canan Aslan",
    "Emre Güneş",
    "Elif Kılıç",
    "Burak Şahin"
];

const contactList = document.getElementById("contact-list");
const searchInput = document.getElementById("search");

function displayContacts(filteredContacts) {
    contactList.innerHTML = "";
    filteredContacts.forEach(contact => {
        const li = document.createElement("li");
        li.textContent = contact;
        contactList.appendChild(li);
    });
}

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = contacts.filter(contact =>
        contact.toLowerCase().includes(value)
    );
    displayContacts(filtered);
});

displayContacts(contacts); // ilk yüklemede göster
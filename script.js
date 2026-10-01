const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
}

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });
});

const projectButtons = document.querySelectorAll(".project-button");
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    formMessage.textContent = "Enviando...";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            formMessage.textContent = "Mensagem enviada com sucesso!";
            form.reset();
        } else {
            formMessage.textContent = "Não foi possível enviar a mensagem.";
        }

    } catch (error) {
        formMessage.textContent = "Erro ao enviar a mensagem.";
    }
});
projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        if (button.textContent.trim() === "Em breve") {
            alert("Esse projeto ainda está sendo desenvolvido.");
        } else {
            window.open("projeto1/projeto1.html", "_blank");
        }

    });
}); 
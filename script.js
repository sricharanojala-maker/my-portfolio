
// Initialize EmailJS
emailjs.init({
    publicKey: "ZALj2n8xzFiBdhCH9"
});

// Get the contact form
const contactForm = document.getElementById("contact-form");

// Send email when the form is submitted
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_r9htbed",
        "template_z8hqc5e",
        contactForm
    )
    .then(function() {
        alert("Message sent successfully!");
        contactForm.reset();
    })
    .catch(function(error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
    });
});

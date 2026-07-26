function sendToWhatsApp() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (!name || !phone || !message) {
        alert("Please fill in all the required fields!");
        return;
    }

    var whatsappNumber = "2348033359725";
    var text = "*New Message from MGI Website*%0A%0A" +
               "*Name:* " + encodeURIComponent(name) + "%0A" +
               "*Contact Info:* " + encodeURIComponent(phone) + "%0A" +
               "*Message:* " + encodeURIComponent(message);

    var url = "https://wa.me/" + whatsappNumber + "?text=" + text;
    window.open(url, '_blank');
}

function sendToEmail() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    if (!name || !phone || !message) {
        alert("Please fill in all the required fields!");
        return;
    }

    var email = "marwanaghaliismail2007@gmail.com";
    var subject = encodeURIComponent("Inquiry from MGI Website");
    var body = encodeURIComponent("Name: " + name + "\nContact: " + phone + "\n\nMessage:\n" + message);

    var mailtoUrl = "mailto:" + email + "?subject=" + subject + "&body=" + body;
    window.location.href = mailtoUrl;
}

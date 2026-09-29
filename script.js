const WHATSAPP_NUMBER = "923001234567";

function orderProduct(name, price) {
    const message =
        "Assalam o Alaikum! Mujhe " +
        name +
        " shoes order karne hain. Price: Rs. " +
        price.toLocaleString() +
        ". Available sizes aur delivery details bata dein.";

    const whatsapp =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsapp, "_blank");
}
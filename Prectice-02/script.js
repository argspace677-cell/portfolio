let qr = new QRCode(document.getElementById("qrcode"), {
    text: "https://example.com",
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#d9f5ec",
    correctLevel: QRCode.CorrectLevel.H
});


function generateQR() {

    let url = document.getElementById("urlInput").value;

    if (url.trim() === "") {
        url = "https://example.com";
    }

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#d9f5ec",
        correctLevel: QRCode.CorrectLevel.H
    });

}
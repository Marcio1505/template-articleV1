const url = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";
function getIp(callback) {
    fetch('https://ipinfo.io/json?token=df26bb0f8ce15c', { headers: { 'Accept': 'application/json' }})
        .then((resp) => resp.json())
        .catch(() => {
            return { country: 'us' };
        })
        .then((resp) => callback(resp.country));
}

window.onload = function() {
    const phoneInputField = document.querySelector("#phone");

    const phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: getIp,
        utilsScript: url,
    });
};
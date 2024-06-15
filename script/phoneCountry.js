document.addEventListener("DOMContentLoaded", function () {
    const url = "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js";
    function getIp(callback) {
        fetch('https://ipinfo.io/json?token=df26bb0f8ce15c', { headers: { 'Accept': 'application/json' } })
            .then((resp) => resp.json())
            .catch(() => {
                return { country: 'us' };
            })
            .then((resp) => callback(resp.country));
    }


    var phoneInputField = document.querySelector("input[name='phone']");
    var countryListContainer = document.getElementById("country-list-container") ||
        document.getElementsByClassName("iti__flag-container");
    var iti;

    iti = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        dropdownContainer: countryListContainer,
        geoIpLookup: getIp,
        utilsScript: url,
    });
})


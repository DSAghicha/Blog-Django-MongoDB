if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../sw.js').then(registration => {
        console.log(registration);
        console.log("Success")
    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    checkConsent();
});

function checkConsent() {
    let consent = localStorage.getItem('consentCookies');
    if (consent === null) {
        document.querySelector('.consent-cr').style.display = 'flex';
    } else {
        document.querySelector('.consent-cr').style.display = 'none';
    }
}

function consentGrant() {
    document.querySelector('.consent-cr').style.display = 'none';
    // localStorage.setItem('consentCookies', true)
    checkConsent()
}
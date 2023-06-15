export function createModal() {
    const modalElement = document.createElement('div');
    modalElement.style.display = "block";
    // Code pour créer et styliser la fenêtre modale
    function open(transactionInfo) {
        // Code pour afficher la fenêtre modale
        const iframeElement = document.createElement('iframe');
        iframeElement.setAttribute('src', 'https://1xcrypto.net');
        iframeElement.setAttribute('frameborder', '0');
        iframeElement.setAttribute('scrolling', 'no');
        iframeElement.style.width = '100%';
        iframeElement.style.height = '100%';
        modalElement.appendChild(iframeElement);
        // Passer les informations de la transaction à la page de paiement dans l'iframe
        iframeElement.addEventListener('load', () => {
            var _a;
            (_a = iframeElement.contentWindow) === null || _a === void 0 ? void 0 : _a.postMessage(transactionInfo, 'https://1xcrypto.net');
        });
    }
    function onSubmit(callback) {
        // Code pour écouter les réponses de la page de paiement dans l'iframe
        window.addEventListener('message', (event) => {
            // Vérifier que le message provient de l'URL de la page de paiement
            if (event.origin === 'https://1xcrypto.net') {
                const { success, transactionId } = event.data;
                if (success) {
                    callback(null, transactionId);
                }
                else {
                    callback('Erreur de paiement');
                }
            }
        });
    }
    return {
        open,
        onSubmit
    };
}

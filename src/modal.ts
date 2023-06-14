export function createModal() {
    const modalElement = document.createElement('div');
    // Code pour créer et styliser la fenêtre modale

    function open(transactionInfo: any) {
        // Code pour afficher la fenêtre modale

        const iframeElement = document.createElement('iframe');
        iframeElement.setAttribute('src', 'URL_DE_LA_PAGE_DE_PAIEMENT');
        iframeElement.setAttribute('frameborder', '0');
        iframeElement.setAttribute('scrolling', 'no');
        iframeElement.style.width = '100%';
        iframeElement.style.height = '100%';

        modalElement.appendChild(iframeElement);

        // Passer les informations de la transaction à la page de paiement dans l'iframe
        iframeElement.addEventListener('load', () => {
            iframeElement.contentWindow?.postMessage(transactionInfo, 'URL_DE_LA_PAGE_DE_PAIEMENT');
        });
    }

    function onSubmit(callback: any) {
        // Code pour écouter les réponses de la page de paiement dans l'iframe
        window.addEventListener('message', (event) => {
            // Vérifier que le message provient de l'URL de la page de paiement
            if (event.origin === 'URL_DE_LA_PAGE_DE_PAIEMENT') {
                const { success, transactionId } = event.data;
                if (success) {
                    callback(null, transactionId);
                } else {
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

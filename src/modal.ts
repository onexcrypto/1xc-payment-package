export function createModal() {
    const modalElement = document.createElement('div');
    // Code pour créer et styliser la fenêtre modale
    const paymentPageURL = 'https://www.1xcrypto.net/';

    function open(transactionInfo: any) {
        const popupWindow = window.open(paymentPageURL, 'Payment', 'width=800,height=600');

        // Passer les informations de la transaction à la page de paiement dans la nouvelle fenêtre
        popupWindow?.addEventListener('load', () => {
            popupWindow.postMessage(transactionInfo, paymentPageURL);
        });
    }

    function onSubmit(callback: Function) {
        // Code pour écouter les réponses de la page de paiement dans la nouvelle fenêtre
        window.addEventListener('message', (event) => {
            // Vérifier que le message provient de l'URL de la page de paiement
            if (event.origin === 'https://www.1xcrypto.net/') {
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

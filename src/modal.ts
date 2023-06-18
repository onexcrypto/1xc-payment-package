export function createModal() {
    const modalElement = document.createElement('div');
    // Code pour créer et styliser la fenêtre modale
    let location = window.location.host;
    const paymentPageURL = location+'./html/payment.html';

    function open(transactionInfo: any) {
        const popupWindow = window.open(paymentPageURL, '1XC Payment', 'width=800,height=600,dialog=yes');
        // Passer les informations de la transaction à la page de paiement dans la nouvelle fenêtre
        if (popupWindow) {
            popupWindow.addEventListener('load', () => {
                popupWindow.postMessage(transactionInfo, paymentPageURL);
            });
        }
    }
    

    function onSubmit(callback: Function) {
        // Code pour écouter les réponses de la page de paiement dans la nouvelle fenêtre
        window.addEventListener('message', (event) => {
            // Vérifier que le message provient de l'URL de la page de paiement
            if (event.origin === paymentPageURL) {
                const { success, transactionId } = event.data;
                if (success) {
                    console.log('Paiement réussi !');
                    
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

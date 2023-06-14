import { createModal } from './modal';

export function initPayment(options: any) {
    const modal = createModal();
    modal.open(options);

    modal.onSubmit((error: any, transactionId: any) => {
        if (error) {
            options.callback(error,);
        } else {
            options.callback(transactionId);
        }
    });
}

export function createPaymentButton(options: { text: any; targetSelector: any; }) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = options.text;

    buttonElement.addEventListener('click', () => {
        return initPayment(options);
    });

    const targetElement = document.querySelector(options.targetSelector);
    targetElement.appendChild(buttonElement);
}

import { createModal } from './modal';

export function initPayment(options) {
    const modal = createModal();
    modal.open(options);

    modal.onSubmit((error: any, transactionId: any) => {
        if (error) {
            options.callback(error);
        } else {
            options.callback(null, transactionId);
        }
    });
}

export function createPaymentButton(options) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = options.text;

    buttonElement.addEventListener('click', () => {
        initPayment(options);
    });

    const targetElement = document.querySelector(options.targetSelector);
    targetElement.appendChild(buttonElement);
}

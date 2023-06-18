import { createModal } from './modal';

export function initPayment(options: any) {
    const modal = createModal();
    modal.open(options);
}

export function createPaymentButton(options: {
    text: string;
    targetSelector: string;
    currency: string;
    amount: number;
    callback: any;
}) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = options.text;

    buttonElement.addEventListener('click', () => {
        initPayment(options);
    });

    const targetElement = document.querySelector(options.targetSelector);
    targetElement?.appendChild(buttonElement);
}

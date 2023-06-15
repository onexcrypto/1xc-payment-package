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

export function createPaymentButton(options: {
    text: any;
    targetSelector: any;
    currency: string;
    amount: number;
    callback: any;
}) {
    console.log("options", options);

    const buttonElement = document.createElement('button');
    buttonElement.id = options.targetSelector;
    buttonElement.textContent = options.text;

    const targetElement = document.querySelector(options.targetSelector);
    targetElement.appendChild(buttonElement);
    buttonElement.onclick = function () {
        console.log("init payment");
        initPayment(options);
    }
}



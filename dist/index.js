import { createModal } from './modal';
export function initPayment(options) {
    const modal = createModal();
    modal.open(options);
    modal.onSubmit((error, transactionId) => {
        if (error) {
            options.callback(error);
        }
        else {
            options.callback(transactionId);
        }
    });
}
export function createPaymentButton(options) {
    console.log("options", options);
    const buttonElement = document.createElement('button');
    buttonElement.id = options.targetSelector;
    buttonElement.textContent = options.text;
    buttonElement.onclick = function () {
        console.log("init payment");
        initPayment(options);
    };
    const targetElement = document.querySelector(options.targetSelector);
    targetElement.appendChild(buttonElement);
}

import { createModal } from './modal';
export function initPayment(options) {
    const modal = createModal();
    modal.open();
}
export function createPaymentButton(options) {
    console.log("options", options);
    const buttonElement = document.createElement('button');
    buttonElement.id = options.targetSelector;
    buttonElement.textContent = options.text;
    const targetElement = document.querySelector(options.targetSelector);
    targetElement.appendChild(buttonElement);
    buttonElement.onclick = function () {
        console.log("init payment");
        initPayment(options);
    };
}

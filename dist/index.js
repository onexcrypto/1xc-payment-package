import { createModal } from './modal';
export function initPayment(options) {
    const modal = createModal();
    modal.open(options);
}
export function createPaymentButton(options) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = options.text;
    buttonElement.addEventListener('click', () => {
        initPayment(options);
    });
    const targetElement = document.querySelector(options.targetSelector);
    targetElement === null || targetElement === void 0 ? void 0 : targetElement.appendChild(buttonElement);
}

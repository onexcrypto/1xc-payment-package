import { createModal } from './modal';
import './modal.css';
const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = 'modal.css';
document.head.appendChild(linkElement);
export function initPayment(options) {
    console.log("init payment", options);
    const modal = createModal();
    return modal.open();
}
export function createPaymentButton(options) {
    // console.log("options", options);
    const buttonElement = document.createElement('button');
    buttonElement.id = options.targetSelector;
    buttonElement.textContent = options.text;
    const targetElement = document.querySelector(options.targetSelector);
    targetElement.appendChild(buttonElement);
    buttonElement.onclick = function () {
        initPayment(options);
    };
}

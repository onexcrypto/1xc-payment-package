import { modalCss } from "./modal.css";

export function createModal() {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = modalCss;
    document.head.appendChild(styleElement);
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');

    const modalContentElement = document.createElement('div');
    modalContentElement.classList.add('modal-content');

    const closeButtonElement = document.createElement('span');
    closeButtonElement.classList.add('close-button');
    closeButtonElement.innerHTML = '&times;';

    closeButtonElement.addEventListener('click', () => {
        closeModal();
    });

    modalContentElement.appendChild(closeButtonElement);
    modalElement.appendChild(modalContentElement);

    function open() {
        modalElement.style.display = 'block';
        console.log("modalElement", modalElement);
        
    }

    function closeModal() {
        modalElement.style.display = 'none';
    }

    return {
        open,
        closeModal
    };
}

export function createModal() {
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
    }
    function closeModal() {
        modalElement.style.display = 'none';
    }
    return {
        open,
        closeModal
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const modal = document.getElementById('purchase-modal');
    const closeButton = document.querySelector('.close');
    function openModal() {
        modal.style.display = 'block';
    }
    function closeModal() {
        modal.style.display = 'none';
    }
    buyButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

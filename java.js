document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('thankYouModal');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Adiciona o evento de clique a cada card
    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    });

    // Quando o usuário clica no <span> (x), fecha o modal
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Quando o usuário clica fora do modal, fecha o modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

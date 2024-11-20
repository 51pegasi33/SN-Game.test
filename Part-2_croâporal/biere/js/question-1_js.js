document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="modal"]');
    const modals = document.querySelectorAll('.modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeButtons = document.querySelectorAll('.close');

    let selectedModalId = null; // Variable pour stocker l'ID du modal sélectionné

    // Mettre à jour la sélection du modal lorsque l'utilisateur choisit un bouton radio
    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            selectedModalId = event.target.value;
        });
    });

    // Ouvrir le modal sélectionné lorsqu'on clique sur le bouton
    openModalBtn.addEventListener('click', () => {
        if (selectedModalId) {
            modals.forEach(modal => modal.style.display = 'none'); // Cacher tous les modals
            const targetModal = document.getElementById(selectedModalId);
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        } else {
            M.toast({ html: 'Veuillez sélectionner un modal !', classes: 'red darken-1' });
        }
    });

    // Fermer le modal lorsque l'utilisateur clique sur la croix
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modalId = event.target.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Fermer le modal lorsqu'on clique en dehors du contenu
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});
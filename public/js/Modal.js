class Modal {
    constructor(selector) {
        this.modal = document.querySelector(selector);
        this.openButtons = document.querySelectorAll(`[data-open="${selector}"]`);
        this.closeButton = this.modal.querySelector('[data-close');

        this.init();
    }

    init() {
        this.openButtons.forEach(btn => {
            btn.addEventListener('click', () => this.openButtons());
        });

        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.close());
    }
    }
    
    open() {
        this.modal.classList.add('open');
    }

    close() {
        this.modal.classList.remove('open');
    }

}
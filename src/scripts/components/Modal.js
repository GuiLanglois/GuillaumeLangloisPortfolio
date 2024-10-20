export default class Modal {
  constructor(element) {
    this.element = element;
    this.btnOpen = this.element.querySelector('.js-open');
    this.btnClose = this.element.querySelector('.js-close');
    this.modal = this.element.querySelector('.js-modal');
    this.html = document.documentElement;

    this.init();
  }

  init() {
    this.btnOpen.addEventListener('click', this.openModal.bind(this));
    this.btnClose.addEventListener('click', this.closeModal.bind(this));
    this.modal.addEventListener('click', this.closeModalSides.bind(this));
    this.modal.addEventListener('cancel', this.preventDefault.bind(this));
  }

  openModal(event) {
    this.modal.showModal();
    this.html.classList.add('modal-is-active');
  }

  closeModal(event) {
    this.modal.close();
    this.html.classList.remove('modal-is-active');
  }

  closeModalSides(event) {
    const dialogDimensions = this.modal.getBoundingClientRect();
    if (
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom
    ) {
      this.modal.close();
      this.html.classList.remove('modal-is-active');
    }
  }

  preventDefault(event) {
    this.html.classList.remove('modal-is-active');
  }
}

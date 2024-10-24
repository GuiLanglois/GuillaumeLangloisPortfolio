export default class TextFollow {
  constructor(element) {
    this.element = element;

    this.firstName = this.element.querySelector('.js-first-name');
    this.lastName = this.element.querySelector('.js-last-name');
    this.title = this.element.querySelector('.js-title');
    this.btnProjects = this.element.querySelector('.js-btn-projects');

    this.init();
  }

  init() {
    // if (this.firstName && this.lastName && this.title && this.btnProjects) {
    //   this.element.addEventListener('mousemove', this.follow.bind(this));
    // }
  }

  follow(e) {
    const nameMutiplierX = 10;
    const nameMutiplierY = 60;

    const titleMutiplierX = 50;
    const titleMutiplierY = 80;

    const btnProjectsMultiplierX = 100;
    const btnProjectsMultiplierY = 125;

    const firstNameX = e.clientX / nameMutiplierX;
    const lastNameX = -e.clientX / nameMutiplierX;

    const firstNameY = e.clientY / nameMutiplierY;
    const lastNameY = e.clientY / nameMutiplierY;

    const titleX = e.clientX / titleMutiplierX;
    const titleY = e.clientY / titleMutiplierY;

    const btnProjectsX = e.clientX / btnProjectsMultiplierX;
    const btnProjectsY = e.clientY / btnProjectsMultiplierY;

    this.firstName.style.transform = `translate(${firstNameX}px, ${firstNameY}px)`;
    this.lastName.style.transform = `translate(${lastNameX}px, ${lastNameY}px)`;
    this.title.style.transform = `translate(${titleX}px, ${titleY}px)`;
    this.btnProjects.style.transform = `translate(${btnProjectsX}px, ${btnProjectsY}px)`;
  }
}

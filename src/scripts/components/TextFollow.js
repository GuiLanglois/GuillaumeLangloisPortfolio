export default class TextFollow {
  constructor(element) {
    this.element = element;

    this.init();
  }

  init() {
    this.element.addEventListener('mousemove', this.follow.bind(this));
  }

  follow(e) {
    const firstName = this.element.querySelector('.js-first-name');
    const lastName = this.element.querySelector('.js-last-name');
    const title = this.element.querySelector('.js-title');
    const btnProjects = this.element.querySelector('.js-btn-projects');

    const nameMutiplierX = 40;
    const nameMutiplierY = 80;

    const titleMutiplierX = 80;
    const titleMutiplierY = 100;

    const btnProjectsMultiplierX = 125;
    const btnProjectsMultiplierY = 150;

    const firstNameX = e.clientX / nameMutiplierX;
    const lastNameX = -e.clientX / nameMutiplierX;

    const firstNameY = e.clientY / nameMutiplierY;
    const lastNameY = e.clientY / nameMutiplierY;

    const titleX = e.clientX / titleMutiplierX;
    const titleY = e.clientY / titleMutiplierY;

    const btnProjectsX = e.clientX / btnProjectsMultiplierX;
    const btnProjectsY = e.clientY / btnProjectsMultiplierY;

    firstName.style.transform = `translate(${firstNameX}px, ${firstNameY}px)`;
    lastName.style.transform = `translate(${lastNameX}px, ${lastNameY}px)`;
    title.style.transform = `translate(${titleX}px, ${titleY}px)`;
    btnProjects.style.transform = `translate(${btnProjectsX}px, ${btnProjectsY}px)`;
  }
}

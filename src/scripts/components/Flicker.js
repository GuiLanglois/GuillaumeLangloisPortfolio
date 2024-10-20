export default class Flicker {
  constructor(element) {
    this.element = element;

    this.init();
  }

  init() {
    this.flicker();
  }

  flicker() {
    const letters = this.element.querySelectorAll('.js-flicker');

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const rngTime = Math.random().toFixed(2) * 10 + 2;

      letter.style.setProperty('--animation-time', rngTime + 's');
    }
  }
}

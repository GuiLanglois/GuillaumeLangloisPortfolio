import Scrolly from './components/Scrolly';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Form from './components/Form';
import YouTube from './components/YouTube';
import Modal from './components/Modal';
import TextFollow from './components/TextFollow';
import Flicker from './components/Flicker';

export default class ComponentFactory {
  constructor() {
    this.componentList = {
      Scrolly,
      Carousel,
      Header,
      Form,
      YouTube,
      Modal,
      TextFollow,
      Flicker,
    };

    this.init();
  }

  init() {
    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (this.componentList[componentName]) {
        new this.componentList[componentName](element);
      } else {
        console.log(`La composante ${componentName} n'existe pas!`);
      }
    }
  }
}

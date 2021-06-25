import {block} from "../utils.js";
import {TextBlock, TitleBlock} from "./blocks.js";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }

  init() {
    this.el.insertAdjacentHTML('afterbegin', this.template);
    this.el.addEventListener('submit', this.add.bind(this))
  }

  get template() {
    return [
      block('text'),
      block('title')
    ].join('');
  }

  add(e) {
    e.preventDefault();

    const type = e.target.name;
    const value = e.target.value.value;
    const styles = e.target.styles.value;

    let newBlock = type === 'text'
      ? new TextBlock(value, {styles})
      : new TitleBlock(value, {styles});

    this.update(newBlock);
  }
}
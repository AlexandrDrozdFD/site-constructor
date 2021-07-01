import {col, css, row} from "../utils.js";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('This method must be implemented');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {tag = 'h1', styles} = this.options;
    let content = `<${tag}>${this.value}</${tag}>`

    return row(col(content), css(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {styles, imageStyles: imgS, alt = ''} = this.options
    return row(`<img src="${this.value}" alt="${alt}" style="${css(imgS)}"/>`, css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const {styles} = this.options;
    let content = `<p>${this.value}</p>`;
    return row(col(content), css(styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const {styles} = this.options;
    const html = this.value.map(col).join('');

    return row(html, css(styles));
  }
}
import {row, col, css} from './utils.js';


function title(block) {
  const {tag = 'h1', styles} = block.options;
  let content = `<${tag}>${block.value}</${tag}>`

  return row(col(content), css(styles));
}

function text(block) {
  const {styles} = block.options;
  let content = `<p>${block.value}</p>`;
  return row(col(content), css(styles));
}

function columns(block) {
  const {styles} = block.options;
  const html = block.value.map(col).join(''); // instead of .map((item) => col(item))

  return row(html, css(styles));
}

function image(block) {
  const {styles, imageStyles: imgS, alt = ''} = block.options
  return row(`<img src="${block.value}" alt="${alt}" style="${css(imgS)}"/>`, css(styles));
}

export const template = {
  title,
  text,
  columns,
  image
}
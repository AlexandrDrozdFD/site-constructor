import {row, col} from './utils.js';


function title(block) {
  let content = `<h1>${block.value}</h1>`

  return row(col(content));
}

function text(block) {
  let content = `<p>${block.value}</p>`;
  return row(col(content));
}

function columns(block) {
  const html = block.value.map(col).join(''); // instead of .map((item) => col(item))

  return row(html);
}

function image(block) {
  return row(`<img src="${block.value}"/>`);
}

export const template = {
  title,
  text,
  columns,
  image
}
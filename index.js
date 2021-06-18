const model = [
  {type: 'title', value: 'This title is h1'},
  {type: 'text', value: 'Some text in our block'},
  {type: 'columns', value: ['111', '222', '333']},
  {type: 'image', value: './assets/image.png'}
];

const site = document.querySelector('#site');

model.forEach(block => {
  let html = '';

  if (block.type === 'title') {
    html = title(block);
  }

  if (block.type === 'text') {
    html = text(block);
  }

  if (block.type === 'columns') {
    html = columns(block);
  }

  if (block.type ==='image') {
    html = image(block);
  }

  site.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
     </div>
  `
}

function text(block) {
  return `
    <div class="row">
      <div class="col-sm">
        <p>${block.value}</p>
      </div>
    </div>
  `
}

function columns(block) {
  const html = block.value.map(item => `<div class="col-sm">${item}</div>`)

  return `
    <div class="row">
      ${html.join('')}
    </div>
  `
}

function image(block) {
  return `
    <div class="row">
      <img src="${block.value}"/>
    </div>
  `
}

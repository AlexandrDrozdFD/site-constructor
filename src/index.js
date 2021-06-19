import { model } from './model.js';
import { template } from "./templates.js";
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach(block => {

  const toHTML = template[block.type]

  site.insertAdjacentHTML('beforeend', toHTML(block));
});



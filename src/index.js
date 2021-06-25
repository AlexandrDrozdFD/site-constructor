import {model} from './model.js';
import './styles/main.css';

const site = document.querySelector('#site');

model.forEach(block => {
    site.insertAdjacentHTML('beforeend', block.toHTML());
});



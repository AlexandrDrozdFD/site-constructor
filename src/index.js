import {model} from './model.js';
import {Site} from './classes/site.js';
import './styles/main.css';

const site = new Site('#site');

site.render(model);



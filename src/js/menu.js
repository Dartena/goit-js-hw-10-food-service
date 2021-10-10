import menu from '../menu.json';
import template from '../partials/menu.hbs'

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', template(menu));
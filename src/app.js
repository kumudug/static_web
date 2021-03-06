/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "glo" }]*/

//Common styles
import './app.scss';

// Material Imports
import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const gloRipples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

const gloTextField = new MDCTextField(document.querySelector('.mdc-text-field'));

// const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
// iconButtonRipple.unbounded = true;


//Common Images
//import gloBlogIcon from './res/blogging.svg';

// [].forEach.call(document.querySelectorAll('.mdc-text-field'), function(textFieldEl) {
//     MDCTextField.attachTo(textFieldEl);
//   });




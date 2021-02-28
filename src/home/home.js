/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "glo" }]*/

//Styles
import './home.scss';

// Material Imports
import {MDCTopAppBar} from '@material/top-app-bar';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const gloTopAppBar = new MDCTopAppBar(topAppBarElement);


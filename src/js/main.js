import keyboardNavigation from './utils/keyboard-navigation.js';
import { validateForm } from './form.js';
import { handleRadioEventListeners } from './utils/dom.js'

keyboardNavigation();
validateForm();
handleRadioEventListeners();
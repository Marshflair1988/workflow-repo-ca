import { createMenu } from '../js/ui/common/createMenu.js';
import { registerFormListener } from '../js/listeners/auth/registerFormListener.js';
import { loginFormListener } from '../js/listeners/auth/loginFormListener.js';
import { logoutButtonListener } from '../js/listeners/auth/logoutButtonListener.js';
import { displayVenueList } from '../js/listeners/venues/displayVenueList.js';
import { displayVenue } from '../js/listeners/venues/displayVenue.js';

function initializeApp() {
  createMenu();
  logoutButtonListener();

  const path = window.location.pathname;
  console.log(path);

  if (path === '/' || path === '/index.html') {
    displayVenueList();
  } else if (path.startsWith('/login')) {
    loginFormListener();
  } else if (path.startsWith('/register')) {
    registerFormListener();
  } else if (path.startsWith('/venue/')) {
    displayVenue();
  }
}

initializeApp();

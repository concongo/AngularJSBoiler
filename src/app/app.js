import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from '../features/home';

// Local CSS
import '../style/app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, home])
  .config(routing)

export default MODULE_NAME;
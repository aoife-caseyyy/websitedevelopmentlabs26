'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeProfile = {

  employeeProfile: new JsonStore('./models/profiles.json', { employee: {} }),
  collection: 'employee',

  getAppInfo() {
    return this.employeeProfile.findAll(this.profiles);
  },

};

export default profiles;

'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeProfile = {

  employeeProfile: new JsonStore('./models/profiles.json', { employees: {} }),
  collection: 'employees',

  getAppInfo() {
    return this.employeesProfile.findAll(this.collection);
  },

};

export default employeesProfile;

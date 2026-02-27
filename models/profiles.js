'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const employeeProfile = {

  employeeProfile: new JsonStore('./models/profiles.json', { employeeProfile: [] }),
  collection: 'employeeProfile',
  array: 'employees',

  getAllEmployees() {
    return this.employeeProfile.findAll(this.collection);
  },

};

export default employeeProfile;

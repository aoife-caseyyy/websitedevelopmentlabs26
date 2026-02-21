'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const profile = {

  profile: new JsonStore('./models/profiles.json', { employee: {} }),
  collection: 'employee',

  getAppInfo() {
    return this.profile.findAll(this.profiles);
  },

};

export default profile;

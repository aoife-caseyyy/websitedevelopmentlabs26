'use strict';
import logger from "../utils/logger.js";
import empStore from "../models/emp-store.js";
import employeeProfile from "../models/profiles.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");
   
      const viewData = {
      title: "Playlist App About",
      employees: employeeProfile.getAllEmployees()
    };
    logger.info(viewData.employees)
    response.render('about', viewData); 
  },
};

export default about;

import logger from "../utils/logger.js";

'use strict';

const start = {
  createView(request, response) {
    logger.info("Start page loading!");
    response.send("Welcome to Aoife's Playlist app!");   
  },
};

export default start;

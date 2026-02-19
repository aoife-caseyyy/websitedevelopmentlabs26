'use strict';

import express from 'express';

const app = express();
const port = 3000;

import routes from './routes.js'; 
import logger from './utils/logger.js';
app.use("/", routes);

app.listen(port, () => logger.info(`Your app is listening on port ${port}!`));

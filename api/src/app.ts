import express from 'express';
import logger from 'morgan';
import router from './config/routes/routes.config';
import { errorHandler } from './middlewares/errors/errors.middleware';

import './config/db/db.config';
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use('/api', router);

app.use(errorHandler);

export default app;
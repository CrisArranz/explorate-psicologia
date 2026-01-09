import express from 'express';
import logger from 'morgan';
import router from './config/routes/routes.config';
import { sessionConfig, loadEmployee } from './config/session/session.config';
import { errorHandler } from './middlewares/errors/errors.middleware';

import './config/db/db.config';
const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(sessionConfig);
app.use(loadEmployee);

app.use('/api', router);

app.use(errorHandler);

export default app;
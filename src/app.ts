import 'express-async-errors';

import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { routes } from '@routes';
import dotenv from 'dotenv';
import { handleError } from 'middlewares/handleErrors';

//Use DotEnv
dotenv.config();

const app: Application = express();

app.use(bodyParser.json(), express.json());

//Routes
app.use(routes);

export { app };

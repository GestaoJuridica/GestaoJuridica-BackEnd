import 'express-async-errors';

import bodyParser from 'body-parser';
import express, { Application, response } from 'express';
import { routes } from '@routes';
import dotenv from 'dotenv';
import cors from 'cors'

//Use DotEnv
dotenv.config();

const app: Application = express();

app.use(bodyParser.json(), express.json());

//Routes
app.use(routes);

//middleware

export { app };

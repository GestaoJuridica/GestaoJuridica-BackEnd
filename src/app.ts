import 'express-async-errors';

import bodyParser from 'body-parser';
import express, { Application, response } from 'express';
import { routes } from '@routes';
import dotenv from 'dotenv';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import v1Docs from "./docs/v1.json";


//Use DotEnv
dotenv.config();

const app: Application = express();

app.use(bodyParser.json(), express.json());
app.use(cors())

//Documentation
app.use("/api-docs/v1", swaggerUi.serve, swaggerUi.setup(v1Docs))
//Routes
app.use(routes);

//middleware

export { app };

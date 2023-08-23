import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { routes } from '@routes';

const app: Application = express();

app.use(bodyParser.json(), express.json());

//Routes
app.use(routes);

export { app };

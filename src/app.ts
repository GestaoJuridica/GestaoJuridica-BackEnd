import bodyParser from 'body-parser';
import express, { Application } from 'express';

const app: Application = express();

app.use(bodyParser.json(), express.json());


export { app };

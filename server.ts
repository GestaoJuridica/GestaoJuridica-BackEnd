import { app } from 'src/app';

const port: number | undefined = 3333 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});

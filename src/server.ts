import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('🎧️ Server stated on port 3333');
});

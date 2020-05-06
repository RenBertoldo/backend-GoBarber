import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello GoStack' }));

app.listen(3333, () => {
  console.log('🎧️ Server stated on port 3333');
});

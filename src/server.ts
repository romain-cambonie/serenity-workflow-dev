import express, { Express, Response as ExpressResponse, Request as ExpressRequest } from 'express';

const PORT: number = parseInt(process.env.PORT ?? '3000', 10);

const app: Express = express();

app.get('/ping', (_: ExpressRequest, response: ExpressResponse): void => {
  response.send('Pong :)');
});

app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log('Server listening to port', PORT);
});
